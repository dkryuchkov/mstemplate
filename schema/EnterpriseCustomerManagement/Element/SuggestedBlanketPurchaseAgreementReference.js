var Modeler = require("../Modeler.js");
var className = 'ElementSuggestedBlanketPurchaseAgreementReference';

var ElementSuggestedBlanketPurchaseAgreementReference = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  SuggestedBlanketPurchaseAgreementReference: {
      type: "TypePurchaseAgreementReferenceType",
      wsdlDefinition: {
        name: "SuggestedBlanketPurchaseAgreementReference",
        type: "PurchaseAgreementReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Reference to a Blanket Purchase Agreement. A Suggested Blanket Purchase Agreement is typically used on a Requisition to help the Buyer asigned to the requsition identify the price details of the item"
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
	  SuggestedBlanketPurchaseAgreementReference: {
      type: "TypePurchaseAgreementReferenceType",
      wsdlDefinition: {
        name: "SuggestedBlanketPurchaseAgreementReference",
        type: "PurchaseAgreementReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Reference to a Blanket Purchase Agreement. A Suggested Blanket Purchase Agreement is typically used on a Requisition to help the Buyer asigned to the requsition identify the price details of the item"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementSuggestedBlanketPurchaseAgreementReference;
Modeler.register(ElementSuggestedBlanketPurchaseAgreementReference, "ElementSuggestedBlanketPurchaseAgreementReference");
