var Modeler = require("../Modeler.js");
var className = 'ElementPrimaryServiceSpecialistPersonReference';

var ElementPrimaryServiceSpecialistPersonReference = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  PrimaryServiceSpecialistPersonReference: {
      type: "TypeServiceSpecialistPersonReferenceType",
      wsdlDefinition: {
        name: "PrimaryServiceSpecialistPersonReference",
        type: "ServiceSpecialistPersonReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "A primary Service Specialist Person"
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
	  PrimaryServiceSpecialistPersonReference: {
      type: "TypeServiceSpecialistPersonReferenceType",
      wsdlDefinition: {
        name: "PrimaryServiceSpecialistPersonReference",
        type: "ServiceSpecialistPersonReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "A primary Service Specialist Person"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementPrimaryServiceSpecialistPersonReference;
Modeler.register(ElementPrimaryServiceSpecialistPersonReference, "ElementPrimaryServiceSpecialistPersonReference");
