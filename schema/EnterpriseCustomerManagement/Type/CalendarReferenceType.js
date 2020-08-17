var Modeler = require("../Modeler.js");
var className = 'TypeCalendarReferenceType';

var TypeCalendarReferenceType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CalendarIdentification: {
      type: "TypeCalendarIdentificationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:CalendarIdentification",
        type: "CalendarIdentificationType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Custom: {
      type: "TypeCustomCalendarReferenceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Custom",
        type: "corecomcust:CustomCalendarReferenceType",
        attribute: false,
        ns: "WL5G3N2"
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
        minOccurs: "0",
        name: "WL5G3N2:CalendarIdentification",
        type: "CalendarIdentificationType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Custom: {
      type: "TypeCustomCalendarReferenceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Custom",
        type: "corecomcust:CustomCalendarReferenceType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCalendarReferenceType;
Modeler.register(TypeCalendarReferenceType, "TypeCalendarReferenceType");
