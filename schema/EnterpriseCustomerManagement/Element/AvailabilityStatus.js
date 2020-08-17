var Modeler = require("../Modeler.js");
var className = 'ElementAvailabilityStatus';

var ElementAvailabilityStatus = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  AvailabilityStatus: {
      type: "TypeStatusType",
      wsdlDefinition: {
        name: "AvailabilityStatus",
        type: "StatusType",
        "xsd:annotation": {
          "xsd:documentation": "Describe the availbility of a resource against an event, schedule, or a resource requirement, e.g., Commited, Unattainable, Available."
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
	  AvailabilityStatus: {
      type: "TypeStatusType",
      wsdlDefinition: {
        name: "AvailabilityStatus",
        type: "StatusType",
        "xsd:annotation": {
          "xsd:documentation": "Describe the availbility of a resource against an event, schedule, or a resource requirement, e.g., Commited, Unattainable, Available."
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementAvailabilityStatus;
Modeler.register(ElementAvailabilityStatus, "ElementAvailabilityStatus");
