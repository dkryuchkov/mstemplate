var Modeler = require("../Modeler.js");
var className = 'TypeBusinessCalendarReferenceType';

var TypeBusinessCalendarReferenceType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  BusinessCalendarIdentification: {
      type: "TypeBusinessCalendarIdentificationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:BusinessCalendarIdentification",
        type: "BusinessCalendarIdentificationType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Custom: {
      type: "TypeCustomBusinessCalendarReferenceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Custom",
        type: "corecomcust:CustomBusinessCalendarReferenceType",
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
	  BusinessCalendarIdentification: {
      type: "TypeBusinessCalendarIdentificationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:BusinessCalendarIdentification",
        type: "BusinessCalendarIdentificationType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Custom: {
      type: "TypeCustomBusinessCalendarReferenceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Custom",
        type: "corecomcust:CustomBusinessCalendarReferenceType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeBusinessCalendarReferenceType;
Modeler.register(TypeBusinessCalendarReferenceType, "TypeBusinessCalendarReferenceType");
