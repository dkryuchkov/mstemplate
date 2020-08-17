var Modeler = require("../Modeler.js");
var className = 'ElementBlanketPurchaseAgreementReference';

var ElementBlanketPurchaseAgreementReference = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  BlanketPurchaseAgreementReference: {
      type: "TypeBlanketPurchaseAgreementReferenceType",
      wsdlDefinition: {
        name: "BlanketPurchaseAgreementReference",
        type: "BlanketPurchaseAgreementReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Reference to a Blanket Purchase Agreement. A Blanket Purchase Agreement is an agreement between a buyer and a seller to buy goods or services for a certain amount"
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
	  BlanketPurchaseAgreementReference: {
      type: "TypeBlanketPurchaseAgreementReferenceType",
      wsdlDefinition: {
        name: "BlanketPurchaseAgreementReference",
        type: "BlanketPurchaseAgreementReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Reference to a Blanket Purchase Agreement. A Blanket Purchase Agreement is an agreement between a buyer and a seller to buy goods or services for a certain amount"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementBlanketPurchaseAgreementReference;
Modeler.register(ElementBlanketPurchaseAgreementReference, "ElementBlanketPurchaseAgreementReference");
