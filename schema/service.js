const Modeler = require('./lib/Modeler.js');
const _ = require("lodash");
const path = require('path');
const fs = require('fs');
const JSONPath = require('JSONPath');
const logWrapper = process.env.logger ? require(process.env.logger) : null;
const logger = logWrapper ? new logWrapper(process.env.LOG_LEVEL) : null;
const scriptName = path.basename(__filename);

const getTypeMapping = (type, parent, parentObj) => {
	return process.env.typesMapping[`${type}${parent ? parent : ""}`] ||
		parentObj && parentObj.constructor && parentObj.constructor(null, 'getWsdlDefinition')[type] ?
		parentObj.constructor(null, 'getWsdlDefinition')[type].type.slice(4) : null;
};

const service = require('./EnterpriseCustomerManagement');

const payload = (data, type, parent, parentObj) => {
	//console.log(`${type},${parent}`);
	if (type === 'Custom' && parent === 'Address')
		parent = parent;

	if (type === "$") return null;

	data = type ? data[type] : data;
	let obj = {};
	if (_.isArray(data)) {
		obj = [];
		for (let i = 0; i < data.length; i++) {
			const ret = payload(data[i], null, type, obj);
			if (ret) obj.push(ret);
		}
	} else if (_.isObject(data)) {
		if (type) {
			const resolvedType = getTypeMapping(type, parent, parentObj) || `${type}${parent}Type`;
			try {
				obj = new service.Types[resolvedType]();;
			} catch (e) {
				if(service.Types[`${type}Type`]) obj = new service.Types[`${type}Type`]();
				//console.log("resolvedType=",`${type}Type`);
			}
		}
		const keys = Object.keys(data);
		for (let i = 0; i < keys.length; i++) {
			const ret = payload(data, keys[i], type, obj);
			if (ret) {
				if (_.isArray(obj[keys[i]]))
					obj[keys[i]].push(ret);
				else
				if (keys[i] === '_') obj = ret;
				else obj[keys[i]] = ret;
			}
		}
	} else {
		const resolvedType = getTypeMapping(type, parent, parentObj) || (parent === "Custom" ? "TextType" : null);
		if (type && resolvedType && service.Types[resolvedType]) {
			obj = new service.Types[resolvedType]();
			obj[resolvedType] = data;

		} else obj = data;
	}
	return obj;
}

const getPayload = (data, port, op) => {
	const obj = payload(data, port);
	const root = Object.keys(obj)[0];
	if (fs.existsSync(path.resolve(`${process.cwd()}/src/schema/validators/${port || root}.js`))) {
		const validator = require(`${process.cwd()}/src/schema/validators/${port || root}`);
		(op ? op : obj).validator = new validator(obj, port || root);
	} else {
		throw `Validator ${process.cwd()}/src/schema/validators/${port || root} does not exist`;
	}

	return obj;
}

const operation = (data) => {
	return new Promise((resolve, reject) => {
		const port = Object.keys(data)[0];
		const op = new service.EnterpriseCustomerManagementEBSBinding_pt[port]();

		op[port] = getPayload(data, port, op);
		resolve(op);
	});
}

const flatten = experienceObject => {
	if (experienceObject && _.isObject(experienceObject)) {
		const keys = Object.keys(experienceObject);
		for (let i = 0; i < keys.length; i++) {
			const key = keys[i];
			let value = experienceObject[key]
			if (_.isArray(value)) {
				if (value.length === 1) {
					if (value[0]) {
						experienceObject[key] = flatten(value[0]);
					} else
						delete experienceObject[key];
				} else if (!value.length) {
					delete experienceObject[key];
				} else {
					experienceObject[key] = flatten(value);
				}
			} else if (_.isObject(value)) {
				experienceObject[key] = flatten(value);
			}

		}
	}
	return !experienceObject || _.isEmpty(experienceObject) ? null : experienceObject;
}

const getFaults = async json => {
	let faults = [];
	faults = faults.concat(JSONPath({
		json: json,
		path: '$..FaultNotification..FaultMessage[0]'
	}));
	faults = faults.concat(JSONPath({
		json: json,
		path: '$..Fault..faultstring[0]'
	}));
	faults = await faults.filter(i => i);
	await faults.forEach((item, i, arr) => arr[i] = item.replace(/<[^>]*>|"|'|\t|\n|\r/g, ''));
	return faults.length ? payload({
		FaultMessage: faults.join(". ")
	}) : null;
};

module.exports = {
	payload: payload,
	operation: operation,
	flatten: flatten,
	getFaults: getFaults,
	getPayload: getPayload
}

//service.Settings.logger = function(data) { fs.createWriteStream('./test').write(JSON.stringify(data))};
//require(`./${scriptName}`)(service,data).then(op => console.log(op.preview()));

/*
test('CustomerSync JSON to SOAP mapping test', () => {
  expect.assertions(1);
  require(scriptName)(service,data).then(op =>
    expect(op.preview()).toBe(3);
  );
});

test('expect exception', () => {
  expect.assertions(1);
  return graphqlHandler({path: "/add",httpMethod: "POST", body: '{"intA": 1, intB": 2}'},{}).catch(e => {
    expect(e.type).toMatch(/InvalidInputJsonException/);
  });
});

*/
/*

operation(service,data).request(function(err, response) {
  //response.debug(); // Watch your console output
  if (err || !response) {
    console.log(err || "No response?");
  }
console.log(response);
  //... w00p!
})
*/