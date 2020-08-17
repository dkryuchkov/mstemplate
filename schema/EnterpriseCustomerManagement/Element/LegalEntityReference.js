var Modeler = require("../Modeler.js");
var className = 'ElementLegalEntityReference';

var ElementLegalEntityReference = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  LegalEntityReference: {
      type: "TypeLegalEntityReferenceType",
      wsdlDefinition: {
        name: "LegalEntityReference",
        type: "LegalEntityReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "An individual or organization which is legally permitted to enter into a contract, and be sued if it fails to meet its contractual obligations"
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
	  LegalEntityReference: {
      type: "TypeLegalEntityReferenceType",
      wsdlDefinition: {
        name: "LegalEntityReference",
        type: "LegalEntityReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "An individual or organization which is legally permitted to enter into a contract, and be sued if it fails to meet its contractual obligations"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementLegalEntityReference;
Modeler.register(ElementLegalEntityReference, "ElementLegalEntityReference");
