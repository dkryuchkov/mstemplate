var Modeler = require("../Modeler.js");
var className = 'ElementPayeeLegalEntityReference';

var ElementPayeeLegalEntityReference = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  PayeeLegalEntityReference: {
      type: "TypeLegalEntityReferenceType",
      wsdlDefinition: {
        name: "PayeeLegalEntityReference",
        type: "LegalEntityReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Reference to a Payee Legal Entity. This is the legal entity definition of the party to whom a payment is to be made"
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
	  PayeeLegalEntityReference: {
      type: "TypeLegalEntityReferenceType",
      wsdlDefinition: {
        name: "PayeeLegalEntityReference",
        type: "LegalEntityReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Reference to a Payee Legal Entity. This is the legal entity definition of the party to whom a payment is to be made"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementPayeeLegalEntityReference;
Modeler.register(ElementPayeeLegalEntityReference, "ElementPayeeLegalEntityReference");
