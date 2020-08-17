var Modeler = require("../Modeler.js");
var className = 'ElementServiceSpecialistPersonReference';

var ElementServiceSpecialistPersonReference = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  ServiceSpecialistPersonReference: {
      type: "TypeServiceSpecialistPersonReferenceType",
      wsdlDefinition: {
        name: "ServiceSpecialistPersonReference",
        type: "ServiceSpecialistPersonReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Reference to a person who is a specialist for a particular service (e.g., a clock service specialist)"
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
	  ServiceSpecialistPersonReference: {
      type: "TypeServiceSpecialistPersonReferenceType",
      wsdlDefinition: {
        name: "ServiceSpecialistPersonReference",
        type: "ServiceSpecialistPersonReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Reference to a person who is a specialist for a particular service (e.g., a clock service specialist)"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementServiceSpecialistPersonReference;
Modeler.register(ElementServiceSpecialistPersonReference, "ElementServiceSpecialistPersonReference");
