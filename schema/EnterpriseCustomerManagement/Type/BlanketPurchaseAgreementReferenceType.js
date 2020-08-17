var Modeler = require("../Modeler.js");
var className = 'TypeBlanketPurchaseAgreementReferenceType';

var TypeBlanketPurchaseAgreementReferenceType = function(json, parentObj) {
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
    Custom: {
      type: "TypeCustomBlanketPurchaseAgreementReferenceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Custom",
        type: "corecomcust:CustomBlanketPurchaseAgreementReferenceType",
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
    Custom: {
      type: "TypeCustomBlanketPurchaseAgreementReferenceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Custom",
        type: "corecomcust:CustomBlanketPurchaseAgreementReferenceType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeBlanketPurchaseAgreementReferenceType;
Modeler.register(TypeBlanketPurchaseAgreementReferenceType, "TypeBlanketPurchaseAgreementReferenceType");
