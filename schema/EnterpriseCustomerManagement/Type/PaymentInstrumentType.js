var Modeler = require("../Modeler.js");
var className = 'TypePaymentInstrumentType';

var TypePaymentInstrumentType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  ReceiptMethodReference: {
      type: "TypeReceiptMethodReferenceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:ReceiptMethodReference",
        type: "ReceiptMethodReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "ReceiptMethodReference is used here as an (indirect) way of conveying a payment instrument information. ReceiptMethod is an Account Receivable eneity which captures payment types, associated account information, and more. It supports AR Receipt creation."
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Check: {
      type: "TypeCheckType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Check",
        type: "CheckType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    EFT: {
      type: "TypeEFTType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:EFT",
        type: "EFTType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    BankDraft: {
      type: "TypeBankDraftType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:BankDraft",
        type: "BankDraftType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    CreditCard: {
      type: "TypeCreditCardType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:CreditCard",
        type: "CreditCardType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    DebitCard: {
      type: "TypeDebitCardType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:DebitCard",
        type: "DebitCardType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    CashIndicator: {
      type: "TypeIndicatorType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:CashIndicator",
        type: "IndicatorType",
        "xsd:annotation": {
          "xsd:documentation": "Indicates if the payment is a cash payment"
        },
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
	  ReceiptMethodReference: {
      type: "TypeReceiptMethodReferenceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:ReceiptMethodReference",
        type: "ReceiptMethodReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "ReceiptMethodReference is used here as an (indirect) way of conveying a payment instrument information. ReceiptMethod is an Account Receivable eneity which captures payment types, associated account information, and more. It supports AR Receipt creation."
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Check: {
      type: "TypeCheckType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Check",
        type: "CheckType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    EFT: {
      type: "TypeEFTType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:EFT",
        type: "EFTType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    BankDraft: {
      type: "TypeBankDraftType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:BankDraft",
        type: "BankDraftType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    CreditCard: {
      type: "TypeCreditCardType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:CreditCard",
        type: "CreditCardType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    DebitCard: {
      type: "TypeDebitCardType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:DebitCard",
        type: "DebitCardType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    CashIndicator: {
      type: "TypeIndicatorType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:CashIndicator",
        type: "IndicatorType",
        "xsd:annotation": {
          "xsd:documentation": "Indicates if the payment is a cash payment"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypePaymentInstrumentType;
Modeler.register(TypePaymentInstrumentType, "TypePaymentInstrumentType");
