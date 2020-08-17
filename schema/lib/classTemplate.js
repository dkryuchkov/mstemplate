var Modeler = require("../Modeler.js");
var className = '###1###';

var ###1### = function(json, parentObj) {
  parentObj = parentObj || this;
	###3###
	const data = {
	  ###2###
	};
	
	if(parentObj === 'getWsdlDefinition')
	{
		return data;
	}
	
	// Class property definitions here:
	Modeler.extend(className, {
	  ###2###
	}, parentObj, json);
};

module.exports = ###1###;
Modeler.register(###1###, "###1###");
