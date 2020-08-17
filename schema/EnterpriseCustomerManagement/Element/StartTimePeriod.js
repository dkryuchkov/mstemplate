var Modeler = require("../Modeler.js");
var className = 'ElementStartTimePeriod';

var ElementStartTimePeriod = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  StartTimePeriod: {
      type: "TypeStartTimePeriodType",
      wsdlDefinition: {
        name: "StartTimePeriod",
        type: "StartTimePeriodType",
        "xsd:annotation": {
          "xsd:documentation": "The time window something is expected to start."
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	};
	
	if(parentObj === 'getWsdlDefinition')
	{
		return data;
	}
	
	// Class property definitions here:
	Modeler.extend(className, {
	  StartTimePeriod: {
      type: "TypeStartTimePeriodType",
      wsdlDefinition: {
        name: "StartTimePeriod",
        type: "StartTimePeriodType",
        "xsd:annotation": {
          "xsd:documentation": "The time window something is expected to start."
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementStartTimePeriod;
Modeler.register(ElementStartTimePeriod, "ElementStartTimePeriod");
