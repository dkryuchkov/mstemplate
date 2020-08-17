var Modeler = require("../Modeler.js");
var className = 'ElementSuspendedTimePeriod';

var ElementSuspendedTimePeriod = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  SuspendedTimePeriod: {
      type: "TypeTimePeriodType",
      wsdlDefinition: {
        name: "SuspendedTimePeriod",
        type: "TimePeriodType",
        "xsd:annotation": {
          "xsd:documentation": "Defines the suspended start and end date"
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
	  SuspendedTimePeriod: {
      type: "TypeTimePeriodType",
      wsdlDefinition: {
        name: "SuspendedTimePeriod",
        type: "TimePeriodType",
        "xsd:annotation": {
          "xsd:documentation": "Defines the suspended start and end date"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementSuspendedTimePeriod;
Modeler.register(ElementSuspendedTimePeriod, "ElementSuspendedTimePeriod");
