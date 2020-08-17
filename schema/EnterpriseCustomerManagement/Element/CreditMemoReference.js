var Modeler = require("../Modeler.js");
var className = 'ElementCreditMemoReference';

var ElementCreditMemoReference = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CreditMemoReference: {
      type: "TypeCreditMemoReferenceType",
      wsdlDefinition: {
        name: "CreditMemoReference",
        type: "CreditMemoReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "A credit memo is a commercial document issued by a seller to a buyer, indicating the products, quantities and agreed prices for products or services that the seller provided the buyer with, but the buyer returned or did not receive. It may also be issued in the case of damaged goods, errors or allowances. A Credit Memo can reduce or eliminate the amount that the buyer has to pay the seller in respect of the original invoice issued earlier."
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
	  CreditMemoReference: {
      type: "TypeCreditMemoReferenceType",
      wsdlDefinition: {
        name: "CreditMemoReference",
        type: "CreditMemoReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "A credit memo is a commercial document issued by a seller to a buyer, indicating the products, quantities and agreed prices for products or services that the seller provided the buyer with, but the buyer returned or did not receive. It may also be issued in the case of damaged goods, errors or allowances. A Credit Memo can reduce or eliminate the amount that the buyer has to pay the seller in respect of the original invoice issued earlier."
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementCreditMemoReference;
Modeler.register(ElementCreditMemoReference, "ElementCreditMemoReference");
