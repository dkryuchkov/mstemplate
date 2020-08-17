var Modeler = require("../Modeler.js");
var className = 'ElementResourceAvailabilityCalendarIdentification';

var ElementResourceAvailabilityCalendarIdentification = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  ResourceAvailabilityCalendarIdentification: {
      type: "TypeResourceAvailabilityCalendarIdentificationType",
      wsdlDefinition: {
        name: "ResourceAvailabilityCalendarIdentification",
        type: "ResourceAvailabilityCalendarIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Unique identification of a Resource Availability Calendar object"
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
	  ResourceAvailabilityCalendarIdentification: {
      type: "TypeResourceAvailabilityCalendarIdentificationType",
      wsdlDefinition: {
        name: "ResourceAvailabilityCalendarIdentification",
        type: "ResourceAvailabilityCalendarIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Unique identification of a Resource Availability Calendar object"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementResourceAvailabilityCalendarIdentification;
Modeler.register(ElementResourceAvailabilityCalendarIdentification, "ElementResourceAvailabilityCalendarIdentification");
