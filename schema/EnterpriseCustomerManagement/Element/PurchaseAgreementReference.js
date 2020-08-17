var Modeler = require("../Modeler.js");
var className = 'ElementPurchaseAgreementReference';

var ElementPurchaseAgreementReference = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  PurchaseAgreementReference: {
      type: "TypePurchaseAgreementReferenceType",
      wsdlDefinition: {
        name: "PurchaseAgreementReference",
        type: "PurchaseAgreementReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Reference to a Purchase Agreement. A Purchase Agreement is a document that identifies a negotiated price for a set of items between the two parties involved in the agreement. The prices may be further qualified by factors such as quantity, Ship To Location etc"
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
	  PurchaseAgreementReference: {
      type: "TypePurchaseAgreementReferenceType",
      wsdlDefinition: {
        name: "PurchaseAgreementReference",
        type: "PurchaseAgreementReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Reference to a Purchase Agreement. A Purchase Agreement is a document that identifies a negotiated price for a set of items between the two parties involved in the agreement. The prices may be further qualified by factors such as quantity, Ship To Location etc"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementPurchaseAgreementReference;
Modeler.register(ElementPurchaseAgreementReference, "ElementPurchaseAgreementReference");
