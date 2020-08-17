var Modeler = require("../Modeler.js");
var className = 'ElementDefaultLegalEntityReference';

var ElementDefaultLegalEntityReference = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  DefaultLegalEntityReference: {
      type: "TypeLegalEntityReferenceType",
      wsdlDefinition: {
        name: "DefaultLegalEntityReference",
        type: "LegalEntityReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Reference to a default Legal Entity (e.g., for a BusinessUnit)."
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
	  DefaultLegalEntityReference: {
      type: "TypeLegalEntityReferenceType",
      wsdlDefinition: {
        name: "DefaultLegalEntityReference",
        type: "LegalEntityReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Reference to a default Legal Entity (e.g., for a BusinessUnit)."
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementDefaultLegalEntityReference;
Modeler.register(ElementDefaultLegalEntityReference, "ElementDefaultLegalEntityReference");
