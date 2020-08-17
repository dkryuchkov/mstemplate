var Modeler = require("../Modeler.js");
var className = 'ElementTimePeriod';

var ElementTimePeriod = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  TimePeriod: {
      type: "TypeTimePeriodType",
      wsdlDefinition: {
        name: "TimePeriod",
        type: "TimePeriodType",
        "xsd:annotation": {
          "xsd:documentation": "A period of time expressed with a Start Date and and an effective duration that can be indicated by an end date or a certain duration (number of hours/ days/ months etc)"
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
	  TimePeriod: {
      type: "TypeTimePeriodType",
      wsdlDefinition: {
        name: "TimePeriod",
        type: "TimePeriodType",
        "xsd:annotation": {
          "xsd:documentation": "A period of time expressed with a Start Date and and an effective duration that can be indicated by an end date or a certain duration (number of hours/ days/ months etc)"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementTimePeriod;
Modeler.register(ElementTimePeriod, "ElementTimePeriod");
