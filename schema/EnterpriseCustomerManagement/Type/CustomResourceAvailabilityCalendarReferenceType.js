var Modeler = require("../Modeler.js");
var className = 'TypeCustomResourceAvailabilityCalendarReferenceType';

var TypeCustomResourceAvailabilityCalendarReferenceType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomResourceAvailabilityCalendarReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomResourceAvailabilityCalendarReferenceType",
        attribute: false,
        type: "xsd:string"
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
	  CustomResourceAvailabilityCalendarReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomResourceAvailabilityCalendarReferenceType",
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCustomResourceAvailabilityCalendarReferenceType;
Modeler.register(TypeCustomResourceAvailabilityCalendarReferenceType, "TypeCustomResourceAvailabilityCalendarReferenceType");
