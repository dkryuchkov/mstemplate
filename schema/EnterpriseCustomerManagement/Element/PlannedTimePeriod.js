var Modeler = require("../Modeler.js");
var className = 'ElementPlannedTimePeriod';

var ElementPlannedTimePeriod = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  PlannedTimePeriod: {
      type: "TypeTimePeriodType",
      wsdlDefinition: {
        name: "PlannedTimePeriod",
        type: "TimePeriodType",
        "xsd:annotation": {
          "xsd:documentation": "The planned  time period"
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
	  PlannedTimePeriod: {
      type: "TypeTimePeriodType",
      wsdlDefinition: {
        name: "PlannedTimePeriod",
        type: "TimePeriodType",
        "xsd:annotation": {
          "xsd:documentation": "The planned  time period"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementPlannedTimePeriod;
Modeler.register(ElementPlannedTimePeriod, "ElementPlannedTimePeriod");
