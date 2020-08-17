var Modeler = require("../Modeler.js");
var className = 'ElementGovernmentAgencyReference';

var ElementGovernmentAgencyReference = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  GovernmentAgencyReference: {
      type: "TypeGovernmentAgencyReferenceType",
      wsdlDefinition: {
        name: "GovernmentAgencyReference",
        type: "GovernmentAgencyReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Refers to a Government Agency object. An agency maybe a department, a bureau, etc. which may be a subagency of another. It captures information about that agency such as address, contact, etc. This object is used, for example, in the HCM area."
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
	  GovernmentAgencyReference: {
      type: "TypeGovernmentAgencyReferenceType",
      wsdlDefinition: {
        name: "GovernmentAgencyReference",
        type: "GovernmentAgencyReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Refers to a Government Agency object. An agency maybe a department, a bureau, etc. which may be a subagency of another. It captures information about that agency such as address, contact, etc. This object is used, for example, in the HCM area."
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementGovernmentAgencyReference;
Modeler.register(ElementGovernmentAgencyReference, "ElementGovernmentAgencyReference");
