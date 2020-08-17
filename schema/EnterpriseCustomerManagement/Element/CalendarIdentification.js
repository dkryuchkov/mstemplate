var Modeler = require("../Modeler.js");
var className = 'ElementCalendarIdentification';

var ElementCalendarIdentification = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CalendarIdentification: {
      type: "TypeCalendarIdentificationType",
      wsdlDefinition: {
        name: "CalendarIdentification",
        type: "CalendarIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Unique identification of a calendar"
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
	  CalendarIdentification: {
      type: "TypeCalendarIdentificationType",
      wsdlDefinition: {
        name: "CalendarIdentification",
        type: "CalendarIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Unique identification of a calendar"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementCalendarIdentification;
Modeler.register(ElementCalendarIdentification, "ElementCalendarIdentification");
