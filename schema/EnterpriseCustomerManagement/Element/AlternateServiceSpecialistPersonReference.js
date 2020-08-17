var Modeler = require("../Modeler.js");
var className = 'ElementAlternateServiceSpecialistPersonReference';

var ElementAlternateServiceSpecialistPersonReference = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  AlternateServiceSpecialistPersonReference: {
      type: "TypeServiceSpecialistPersonReferenceType",
      wsdlDefinition: {
        name: "AlternateServiceSpecialistPersonReference",
        type: "ServiceSpecialistPersonReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "A substittute for the Primary Service Specialist Person"
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
	  AlternateServiceSpecialistPersonReference: {
      type: "TypeServiceSpecialistPersonReferenceType",
      wsdlDefinition: {
        name: "AlternateServiceSpecialistPersonReference",
        type: "ServiceSpecialistPersonReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "A substittute for the Primary Service Specialist Person"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementAlternateServiceSpecialistPersonReference;
Modeler.register(ElementAlternateServiceSpecialistPersonReference, "ElementAlternateServiceSpecialistPersonReference");
