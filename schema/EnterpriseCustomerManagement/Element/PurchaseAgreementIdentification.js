var Modeler = require("../Modeler.js");
var className = 'ElementPurchaseAgreementIdentification';

var ElementPurchaseAgreementIdentification = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  PurchaseAgreementIdentification: {
      type: "TypePurchaseAgreementIdentificationType",
      wsdlDefinition: {
        name: "PurchaseAgreementIdentification",
        type: "PurchaseAgreementIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Unique Identification of a Purchase Agreement"
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
	  PurchaseAgreementIdentification: {
      type: "TypePurchaseAgreementIdentificationType",
      wsdlDefinition: {
        name: "PurchaseAgreementIdentification",
        type: "PurchaseAgreementIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Unique Identification of a Purchase Agreement"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementPurchaseAgreementIdentification;
Modeler.register(ElementPurchaseAgreementIdentification, "ElementPurchaseAgreementIdentification");
