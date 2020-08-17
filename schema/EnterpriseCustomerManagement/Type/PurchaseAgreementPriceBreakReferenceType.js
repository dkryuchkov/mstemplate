var Modeler = require("../Modeler.js");
var className = 'TypePurchaseAgreementPriceBreakReferenceType';

var TypePurchaseAgreementPriceBreakReferenceType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  PurchaseAgreementIdentification: {
      type: "TypePurchaseAgreementIdentificationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:PurchaseAgreementIdentification",
        type: "PurchaseAgreementIdentificationType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    PurchaseAgreementLineIdentification: {
      type: "TypePurchaseAgreementLineIdentificationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:PurchaseAgreementLineIdentification",
        type: "PurchaseAgreementLineIdentificationType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    PurchaseAgreementPriceBreakIdentification: {
      type: "TypePurchaseAgreementPriceBreakIdentificationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:PurchaseAgreementPriceBreakIdentification",
        type: "PurchaseAgreementPriceBreakIdentificationType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Custom: {
      type: "TypeCustomPurchaseAgreementPriceBreakReferenceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Custom",
        type: "corecomcust:CustomPurchaseAgreementPriceBreakReferenceType",
        attribute: false,
        ns: "WL5G3N2"
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
        minOccurs: "0",
        name: "WL5G3N2:PurchaseAgreementIdentification",
        type: "PurchaseAgreementIdentificationType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    PurchaseAgreementLineIdentification: {
      type: "TypePurchaseAgreementLineIdentificationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:PurchaseAgreementLineIdentification",
        type: "PurchaseAgreementLineIdentificationType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    PurchaseAgreementPriceBreakIdentification: {
      type: "TypePurchaseAgreementPriceBreakIdentificationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:PurchaseAgreementPriceBreakIdentification",
        type: "PurchaseAgreementPriceBreakIdentificationType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Custom: {
      type: "TypeCustomPurchaseAgreementPriceBreakReferenceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Custom",
        type: "corecomcust:CustomPurchaseAgreementPriceBreakReferenceType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypePurchaseAgreementPriceBreakReferenceType;
Modeler.register(TypePurchaseAgreementPriceBreakReferenceType, "TypePurchaseAgreementPriceBreakReferenceType");
