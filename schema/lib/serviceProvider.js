const JSONPath = require('JSONPath');
String.prototype.capitalize = function () {
  return `${this.charAt(0).toUpperCase()}${this.slice(1)}`
};

var fs = require('fs');
var parseString = require('xml2js').parseString;
var stripPrefix = require('xml2js').processors.stripPrefix;
var request = require('request');
var models = {};
var serviceDefinition = {};
var Modeler = require('./Modeler.js');

var coreSettings = {
  debugSoap: false,
  benchmark: process.env.benchmark,
  createMock: false,
  useMock: process.env.useMock,
  modeler: Modeler.Settings,
  logger: function (data) {
    console.log(JSON.stringify(data, null, 2));
  }
};

const _ = require("lodash");

var Elements = {};
const IgnoreElements = ['CodeType', 'IdentifierType', 'TextType', 'SortElementType', 'StringType', 'NameType', 'URIType', 'IndicatorType'];
const TypeToNSMap = {
  PhoneCommunication: "WL5G3N2",
  IdentificationSyncCustomerPartyList: "WL5G3N2",
  PartyContactSyncCustomerPartyList: "WL5G3N2",
  PersonSyncCustomerPartyList: "WL5G3N2",
  PersonDataArea: "WL5G3N2",
  IdentificationDataArea: "WL5G3N2",
  PartyContactDataArea: "WL5G3N2"
};

const ignoreElement = (name, data) => !name || IgnoreElements.includes(name);

function flattenXml(xml) {
  let ret = "";
  const arr = xml.split(/(<[0-9,a-z,A-Z,/,:,>,-]+)/g).filter(e => e);

  for (let i = 0; i < arr.length; i++) {
    ret += (i > 0 ? (arr[i - 1] === arr[i] ? "" : arr[i]) : arr[i]);
  }
  return ret;
}

const isAttribute = (type, data) => {
  if (models[data.__type]) {
    const json = eval("_ => " + models[data.__type].toString())()(null, 'getWsdlDefinition');
    const attributes = JSONPath({
      json: json,
      path: `$..${type}[?(@.attribute==true)]`
    });
    return attributes && attributes.length;
  }
}

function getAttributes(type, data) {
  return "";
  const result = [];
  if (models[`Type${type}Type`]) {
    const json = eval("t => " + models[`Type${type}Type`].toString())()(null, 'getWsdlDefinition');
    const attributes = JSONPath({
      json: json,
      path: `$..[?(@.attribute==true)]`
    });
    attributes.forEach(attribute => {
      let val = (data[attribute.name] && data[attribute.name][attribute.type]) ? data[attribute.name][attribute.type] : null;
      if (attribute.name && (val || attribute.default)) {
        val = ` ${attribute.ns ? attribute.ns + ":" : ""}${attribute.name}="${val || attribute.default}"`;
        if (!result.includes(val)) result.push(val);
      }
    });
  }
  return result.join("");
}

function getNS(ns, parent, prop) {
  if (ns && ns.toString().match(/wsdlDefinition: /)) {
    ns = eval("t => " + ns.toString())()(null, 'getWsdlDefinition');
    //console.log(name,prop,JSON.stringify(ns));

    return prop && ns[prop] ? (ns[prop].wsdlDefinition ? (ns[prop].wsdlDefinition.ns) : null) : (ns[parent] ? (ns[parent].wsdlDefinition ? ns[parent].wsdlDefinition.ns : null) : null);

  }
  return null;
}

function getModel(type, notadd) {
  return (models[notadd ? type : `Type${type}Type`]) ? eval("t => " + models[notadd ? type : `Type${type}Type`].toString())()(null, 'getWsdlDefinition') : null;
}

function getFromTypeDefinition(type, name) {
  const json = getModel(type);
  const nameType = json && json[name] ? json[name].type : null;
  return nameType ? getModel(nameType, true) : null;
}

function getPrefix(name, parent, data, parentData, proparent) {
  //if(name && name.match(/Identification/)) console.log("name=",name,"parent=",parent);
  if (name) {
    if (name === 'SyncCustomerPartyListEBM')
      name = name;
    const elementNS = getNS(Elements[name], name);
    const typeNS = parentData ? getNS(parentData.constructor, parent, name) : null;
    let protypeNS = null;
    if (proparent) {
      const def = getFromTypeDefinition(proparent, parent);
      protypeNS = def && def[name] ? def[name].wsdlDefinition.ns : null;
    }
    //if(name === 'Custom') console.log("name=",name,"parent=",parent,"elementNS=",elementNS,"typeNS=",typeNS);
    return typeNS || elementNS || protypeNS;
  }
  return null;
}

function jsonToXml(data, name, parent, parentNS, parentData) {
  var keepEmptyTags = false;
  let ns = getPrefix(name, parent, data, parentData) || parentNS;
  //console.log("ns=", ns, "name=", name,"parent=" + parent,"parentNS=",parentNS);

  if (data == undefined) return "";
  if (name === 'CreatedSystem' && parent === 'Custom')
    name = name;

  if (data instanceof Array) {
    var result = "";
    for (var i = 0; i < data.length; i++) {
      if (!isAttribute(name, data)) result += (ignoreElement(name) ? "" : "<" + (ns ? ns + ":" : "") + name + getAttributes(name, data[i]) + ">") + jsonToXml(data[i], name, parent, ns, data) + (ignoreElement(name, data) ? "" : "</" + (ns ? ns + ":" : "") + name + ">");
    }
    return result;
  } else if (data instanceof Date) {
    return (data).toJSON().substring(0, 10)
  } else if (data instanceof Object) {
    var keys = Object.keys(data);
    var result = "";
    for (var i = 0; i < keys.length; i++) {
      //console.log("ns=", ns, "name=", name,"parent=" + parent,"parentNS=",parentNS);
      //if(! nsmap[name]) nsmap[name] = ns;
      var childTxt = jsonToXml(data[keys[i]], keys[i], name, ns, data);
      if (childTxt != "" || keepEmptyTags) {
        if (!(data[keys[i]] instanceof Array)) {
          let ns1 = getPrefix(keys[i], name, data[keys[i]], data, parent) || ns || parentNS;
          //if(keys[i] === 'Custom') console.log("keys[i]=",keys[i],"parent=",parent,"ns=", ns,"ns1=",ns1,"parentNS=",parentNS);
          if (!isAttribute(keys[i], data)) result += (ignoreElement(keys[i], data) ? "" : "<" + (ns1 ? ns1 + ":" : "") + keys[i] + getAttributes(keys[i], data[keys[i]]) + ">") + childTxt + (ignoreElement(keys[i], data) ? "" : "</" + (ns1 ? ns1 + ":" : "") + keys[i] + ">");
        } else {
          result += childTxt;
        }
      }
    }
    return result;
  } else {
    return (data).toString();
  }
};

function saveMock(method, response) {
  fs.writeFile(__dirname + '/Mocks/' + method + ".js", response, function (err) {});
};

function loadMock(method, callback) {
  fs.readFile(__dirname + '/Mocks/' + method + ".js", callback);
};

async function handleSoapResponse(service, method, outputModel, err, body, callback, debug) {
  debug.endTime = new Date();
  debug.took = (debug.endTime) - (debug.startTime);

  var json;
  if (!err) {
    try {
      json = await new Promise((resolve, reject) => parseString(body, {
        tagNameProcessors: [stripPrefix]
      }, (err, js) => {
        if (err) return reject(err);
        resolve(js);
      }));
    } catch (err) {
      return callback(err, null);
    }
    json = json['Envelope']['Body'][0];
  }

  err = err || service.flatten(await service.getFaults(json));

  debug.response = {
    error: err,
    response: body
  };
  if (coreSettings.benchmark) coreSettings.logger({
    method: method,
    took: debug.took
  });

  if (err) {
    if (coreSettings.debugSoap) coreSettings.logger(debug);
    return callback(err, null);
  }
  if (coreSettings.createMock) saveMock(method, body);

  if (json == undefined) return callback("Invalid response to " + method);

  let data = null;

  try {
    data = service.getPayload(service.flatten(json),outputModel.substring(7));
    const err = await data.validator.validate();
    if (err) return callback(err)
  } catch (err) {
    return callback(err);
  }

  debug.response.output = json;
  if (coreSettings.debugSoap) coreSettings.logger(debug);

  data.debug = function () {
    coreSettings.logger({
      method: method,
      type: 'Response',
      xml: body,
      json: json,
      modeled: data,
      validates: true
    });
  };
  Object.defineProperty(data, "debug", {
    enumerable: false
  });
  //Object.preventExtensions(this);

  return callback(null, data);
};

async function doSoapRequest(service, url, method, soapAction, data, inputModel, outputModel, ns, callback) {
  const err = await data.validator.validate() || data.validate();
  if (err) return callback(err);

  var headers = {
	'Content-Type': '###1###',
    'SOAPAction': '"' + soapAction + '"'
  };

  var soapBody = '<soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/" ###3###>' +
    '<soap:Body>' +
    flattenXml(jsonToXml(data)) +
    '</soap:Body>' +
    '</soap:Envelope>';

  const soapRequest = {
    url: url,
    headers: headers,
    body: soapBody,
    timeout: coreSettings.timeout || 15000,
    agentOptions: {
      secureProtocol: "TLSv1_2_method"
    },
    tunnel: false
  };

  soapRequest.proxy = !process.env.proxy || process.env.proxy === 'false' ? null : process.env.proxy;
  soapRequest.strictSSL = process.env.strictSSL === 'true';

  var debug = {
    startTime: new Date(),
    request: {
      method: method,
      input: data,
      request: soapRequest
    }
  };
  if (!coreSettings.useMock) {
    request.post(soapRequest, function (err, response, body) {
      handleSoapResponse(service, method, outputModel, err, body, callback, debug);
    });
  } else {
    loadMock(method, function (err, body) {
      handleSoapResponse(service, method, outputModel, err, body, callback, debug);
    });
  }
};


function SoapService() {
  var self = this;
  self.Types = {};
  self.Elements = {};
  self.Settings = coreSettings;

  // load all the service models
  var includeList = fs.readdirSync(__dirname + "/Element");
  includeList.forEach(function (fileName) {
    if (/\.js$/.test(fileName)) {
      fileName = fileName.substring(0, fileName.length - 3);
      models["Element" + fileName] = require('./Element/' + fileName);
      self.Elements[fileName] = require('./Element/' + fileName);
      Elements[fileName] = self.Elements[fileName];
    }
  });
  var includeList = fs.readdirSync(__dirname + "/Type");
  includeList.forEach(function (fileName) {
    if (/\.js$/.test(fileName)) {
      fileName = fileName.substring(0, fileName.length - 3);
      models["Type" + fileName] = require('./Type/' + fileName);
      self.Types[fileName] = require('./Type/' + fileName);
    }
  });

  // load the service definitions
  serviceDefinition = require("./ServiceDefinition.js");

  //create the wrappers
  for (var someServiceName in serviceDefinition) {
    var tmpObj = {};
    self[someServiceName] = tmpObj;
    (function createService(name, properties, parent) {
      var url = "" + properties.serviceUrl;
      var namespace = "" + properties.namespace;
      delete properties.serviceUrl;
      delete properties.namespace;
      for (var someFunction in properties) {
        (function createFunction(functionName, properties) {
          parent[properties.input.replace("Element", "")] = function (json) {
            var newObject = new models[properties.input](json, this);
            this.request = async function (service, callback) {
              await doSoapRequest(service, url, functionName, properties.soapAction, this,
                properties.input, properties.output, namespace, callback);
            };
            Object.defineProperty(this, "request", {
              enumerable: false
            });
              return '<soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/" ###3###>' +
                '<soap:Body>' +
                flattenXml(jsonToXml(this)) +
                '</soap:Body>' +
                '</soap:Envelope>';
            };

            Object.defineProperty(this, "preview", {
              enumerable: false
            });
            this.debug = function () {
              coreSettings.logger({
                method: functionName,
                type: 'Request',
                json: this,
                xml: this.preview(),
                validates: this.validate()
              });
            };
            Object.defineProperty(this, "debug", {
              enumerable: false
            });
            Object.preventExtensions(this);
          };
        })(someFunction, properties[someFunction]);
      }
    })(someServiceName, serviceDefinition[someServiceName], tmpObj);
  }

};

module.exports = new SoapService();