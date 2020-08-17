var Modeler = require("../Modeler.js");
var className = 'ElementPurchaseAgreementPriceBreakIdentification';

var ElementPurchaseAgreementPriceBreakIdentification = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  PurchaseAgreementPriceBreakIdentification: {
      type: "TypePurchaseAgreementPriceBreakIdentificationType",
      wsdlDefinition: {
        name: "PurchaseAgreementPriceBreakIdentification",
        type: "PurchaseAgreementPriceBreakIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Unique Identification of a price qualification line on a Purchase Agreement"
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
	  PurchaseAgreementPriceBreakIdentification: {
      type: "TypePurchaseAgreementPriceBreakIdentificationType",
      wsdlDefinition: {
        name: "PurchaseAgreementPriceBreakIdentification",
        type: "PurchaseAgreementPriceBreakIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Unique Identification of a price qualification line on a Purchase Agreement"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementPurchaseAgreementPriceBreakIdentification;
Modeler.register(ElementPurchaseAgreementPriceBreakIdentification, "ElementPurchaseAgreementPriceBreakIdentification");
