var Modeler = require("../Modeler.js");
var className = 'ElementEventTimePeriod';

var ElementEventTimePeriod = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  EventTimePeriod: {
      type: "TypeTimePeriodType",
      wsdlDefinition: {
        name: "EventTimePeriod",
        type: "TimePeriodType",
        "xsd:annotation": {
          "xsd:documentation": "Indicates the time period of the event"
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
	  EventTimePeriod: {
      type: "TypeTimePeriodType",
      wsdlDefinition: {
        name: "EventTimePeriod",
        type: "TimePeriodType",
        "xsd:annotation": {
          "xsd:documentation": "Indicates the time period of the event"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementEventTimePeriod;
Modeler.register(ElementEventTimePeriod, "ElementEventTimePeriod");
