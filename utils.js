const _ = require("lodash");
const JSONPath = require('JSONPath');
const sleep = async (milliseconds) => await new Promise(resolve => setTimeout(resolve, milliseconds));

const removeNull = json => Object.keys(json).forEach(key => {
  if (_.isArray(json) || _.isObject(json[key])) removeNull(json[key]);
  if (_.isNull(json[key])) delete json[key];
});

const tryJsonParse = (data) => {
  try {
    return JSON.parse(data);
  } catch (e) {
    return data;
  }
}

const toOCHDate = date => { 
  if(date) {
    const arr=date.split("-"); return `${arr[2]}/${arr[1]}/${arr[0]}`;
  }
  else
  {
    return null;
  }
};

const headersTransform = (headers, config) => Promise.all(Object.entries(headers).map(([key, value]) => {
  newkey = config.config.defaults.headers[key];
  if (newkey) {
    headers[newkey] = value;
  }
  delete headers[key];
}));

const jsonToKeyValueArray = (json) => {
  const keyValue = [];
  if (_.isArray(json)) json.forEach(key => keyValue.concat(jsonToKeyValueArray(json[key])));
  if (json) Object.entries(json).forEach(([key, value]) => keyValue.push({
    key: key,
    value: value
  }));
  return keyValue;
};

const toGraphQlEnumTransform = val => val.replace(/\\/g, "__BACKSLASH__").replace(/ /g, "__SPACE__").replace(/-/g, "__HYPHON__");
const toEnumFromGraphQlEnumTransform = val => val.replace(/__BACKSLASH__/g, "/").replace(/__SPACE__/g, " ").replace(/__HYPHON__/g, "-");

const mergeContacts = contacts => {
  return {
    "Contact": {
      ContactPhoneCommunication: JSONPath({
        json: contacts,
        path: "$..ContactPhoneCommunication[0]"
      }),
      ContactEmailCommunication: JSONPath({
        json: contacts,
        path: "$..ContactEmailCommunication[0]"
      })
    }
  }
};

const concatenatedPhoneNumber = customer => {
  let concatenatedNumber = '';
  const phoneDetails = customer.contact.communication;
  if (phoneDetails) {
    if (phoneDetails.countryCode) concatenatedNumber += phoneDetails.countryCode;
    if (phoneDetails.areaCode) concatenatedNumber += phoneDetails.areaCode;
    if (phoneDetails.phoneNumber) concatenatedNumber += phoneDetails.phoneNumber;
    concatenatedNumber = concatenatedNumber.length ? concatenatedNumber : null;
  }
  return concatenatedNumber;
}

module.exports = {
  removeNull: json => {
    removeNull(json);
    return json
  },
  jsonToKeyValueArray: jsonToKeyValueArray,
  sleep: sleep,
  toGraphQlEnumTransform: toGraphQlEnumTransform,
  toEnumFromGraphQlEnumTransform: toEnumFromGraphQlEnumTransform,
  mergeContacts: mergeContacts,
  headersTransform: headersTransform,
  concatenatedPhoneNumber: concatenatedPhoneNumber,
  tryJsonParse: tryJsonParse,
  toOCHDate: toOCHDate
}
