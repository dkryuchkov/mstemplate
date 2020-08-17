var Modeler = require("../Modeler.js");
var className = 'TypeResourceAvailabilityCalendarReferenceType';

var TypeResourceAvailabilityCalendarReferenceType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  ResourceAvailabilityCalendarIdentification: {
      type: "TypeResourceAvailabilityCalendarIdentificationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:ResourceAvailabilityCalendarIdentification",
        type: "ResourceAvailabilityCalendarIdentificationType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Custom: {
      type: "TypeCustomResourceAvailabilityCalendarReferenceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Custom",
        type: "corecomcust:CustomResourceAvailabilityCalendarReferenceType",
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
	  ResourceAvailabilityCalendarIdentification: {
      type: "TypeResourceAvailabilityCalendarIdentificationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:ResourceAvailabilityCalendarIdentification",
        type: "ResourceAvailabilityCalendarIdentificationType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Custom: {
      type: "TypeCustomResourceAvailabilityCalendarReferenceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Custom",
        type: "corecomcust:CustomResourceAvailabilityCalendarReferenceType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeResourceAvailabilityCalendarReferenceType;
Modeler.register(TypeResourceAvailabilityCalendarReferenceType, "TypeResourceAvailabilityCalendarReferenceType");
