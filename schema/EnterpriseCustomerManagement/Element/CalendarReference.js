var Modeler = require("../Modeler.js");
var className = 'ElementCalendarReference';

var ElementCalendarReference = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CalendarReference: {
      type: "TypeCalendarReferenceType",
      wsdlDefinition: {
        name: "CalendarReference",
        type: "CalendarReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Reference to a Calendar"
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
	  CalendarReference: {
      type: "TypeCalendarReferenceType",
      wsdlDefinition: {
        name: "CalendarReference",
        type: "CalendarReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Reference to a Calendar"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementCalendarReference;
Modeler.register(ElementCalendarReference, "ElementCalendarReference");
