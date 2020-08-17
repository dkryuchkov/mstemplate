var Modeler = require("../Modeler.js");
var className = 'ElementBaseTimePeriod';

var ElementBaseTimePeriod = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  BaseTimePeriod: {
      type: "TypeTimePeriodType",
      wsdlDefinition: {
        name: "BaseTimePeriod",
        type: "TimePeriodType",
        "xsd:annotation": {
          "xsd:documentation": "The time period which acts a base for a certain activity, ex: forecast"
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
	  BaseTimePeriod: {
      type: "TypeTimePeriodType",
      wsdlDefinition: {
        name: "BaseTimePeriod",
        type: "TimePeriodType",
        "xsd:annotation": {
          "xsd:documentation": "The time period which acts a base for a certain activity, ex: forecast"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementBaseTimePeriod;
Modeler.register(ElementBaseTimePeriod, "ElementBaseTimePeriod");
