var Modeler = require("../Modeler.js");
var className = 'ElementPurchaseAgreementLineIdentification';

var ElementPurchaseAgreementLineIdentification = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  PurchaseAgreementLineIdentification: {
      type: "TypePurchaseAgreementLineIdentificationType",
      wsdlDefinition: {
        name: "PurchaseAgreementLineIdentification",
        type: "PurchaseAgreementLineIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Unique Identification of a Purchase Agreement Line"
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
	  PurchaseAgreementLineIdentification: {
      type: "TypePurchaseAgreementLineIdentificationType",
      wsdlDefinition: {
        name: "PurchaseAgreementLineIdentification",
        type: "PurchaseAgreementLineIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Unique Identification of a Purchase Agreement Line"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementPurchaseAgreementLineIdentification;
Modeler.register(ElementPurchaseAgreementLineIdentification, "ElementPurchaseAgreementLineIdentification");
