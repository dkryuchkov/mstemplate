var Modeler = require("../Modeler.js");
var className = 'ElementResourceAvailabilityCalendarReference';

var ElementResourceAvailabilityCalendarReference = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  ResourceAvailabilityCalendarReference: {
      type: "TypeResourceAvailabilityCalendarReferenceType",
      wsdlDefinition: {
        name: "ResourceAvailabilityCalendarReference",
        type: "ResourceAvailabilityCalendarReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Reference to a Resource Availability Calendar object"
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
	  ResourceAvailabilityCalendarReference: {
      type: "TypeResourceAvailabilityCalendarReferenceType",
      wsdlDefinition: {
        name: "ResourceAvailabilityCalendarReference",
        type: "ResourceAvailabilityCalendarReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Reference to a Resource Availability Calendar object"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementResourceAvailabilityCalendarReference;
Modeler.register(ElementResourceAvailabilityCalendarReference, "ElementResourceAvailabilityCalendarReference");
