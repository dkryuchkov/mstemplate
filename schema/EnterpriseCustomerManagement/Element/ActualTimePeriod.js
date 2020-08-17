var Modeler = require("../Modeler.js");
var className = 'ElementActualTimePeriod';

var ElementActualTimePeriod = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  ActualTimePeriod: {
      type: "TypeTimePeriodType",
      wsdlDefinition: {
        name: "ActualTimePeriod",
        type: "TimePeriodType",
        "xsd:annotation": {
          "xsd:documentation": "The actual time period"
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
	  ActualTimePeriod: {
      type: "TypeTimePeriodType",
      wsdlDefinition: {
        name: "ActualTimePeriod",
        type: "TimePeriodType",
        "xsd:annotation": {
          "xsd:documentation": "The actual time period"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementActualTimePeriod;
Modeler.register(ElementActualTimePeriod, "ElementActualTimePeriod");
