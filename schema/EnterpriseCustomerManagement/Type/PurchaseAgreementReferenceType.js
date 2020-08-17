var Modeler = require("../Modeler.js");
var className = 'TypePurchaseAgreementReferenceType';

var TypePurchaseAgreementReferenceType = function(json, parentObj) {
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
      type: "TypeCustomPurchaseAgreementReferenceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Custom",
        type: "corecomcust:CustomPurchaseAgreementReferenceType",
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
      type: "TypeCustomPurchaseAgreementReferenceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Custom",
        type: "corecomcust:CustomPurchaseAgreementReferenceType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypePurchaseAgreementReferenceType;
Modeler.register(TypePurchaseAgreementReferenceType, "TypePurchaseAgreementReferenceType");
