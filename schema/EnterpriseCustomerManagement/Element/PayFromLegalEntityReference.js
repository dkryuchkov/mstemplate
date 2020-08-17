var Modeler = require("../Modeler.js");
var className = 'ElementPayFromLegalEntityReference';

var ElementPayFromLegalEntityReference = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  PayFromLegalEntityReference: {
      type: "TypeLegalEntityReferenceType",
      wsdlDefinition: {
        name: "PayFromLegalEntityReference",
        type: "LegalEntityReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Reference to a PayFrom Legal Entity. This is the legal entity definition of the party that is making a payment"
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
	  PayFromLegalEntityReference: {
      type: "TypeLegalEntityReferenceType",
      wsdlDefinition: {
        name: "PayFromLegalEntityReference",
        type: "LegalEntityReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Reference to a PayFrom Legal Entity. This is the legal entity definition of the party that is making a payment"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementPayFromLegalEntityReference;
Modeler.register(ElementPayFromLegalEntityReference, "ElementPayFromLegalEntityReference");
