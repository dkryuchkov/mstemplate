var Modeler = require("../Modeler.js");
var className = 'TypeDebitChargeAuthorizationType';

var TypeDebitChargeAuthorizationType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  Identification: {
      type: "TypeIdentificationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Identification",
        type: "IdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Identification of the authorization request"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    TransactionTypeCode: {
      type: "TypeCodeType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:TransactionTypeCode",
        type: "CodeType",
        "xsd:annotation": {
          "xsd:documentation": "Type of  card transaction attempted.  Values include: AUTHORIZATION, AUTHCAPTURE, VOICEAUTH, CAPTURE,  RETURN, VOID"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    ChargeAmount: {
      type: "TypeAmountType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:ChargeAmount",
        type: "AmountType",
        "xsd:annotation": {
          "xsd:documentation": "In Payment transaction request currency"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    ChargeDateTime: {
      type: "TypeDateTimeType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:ChargeDateTime",
        type: "DateTimeType",
        "xsd:annotation": {
          "xsd:documentation": "Time of requesting the credit card authorization"
        },
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
        "xsd:annotation": {
          "xsd:documentation": "Details about the debit card to which an amount is requsted to be charged"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Custom: {
      type: "TypeCustomDebitChargeAuthorizationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Custom",
        type: "corecomcust:CustomDebitChargeAuthorizationType",
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
	  Identification: {
      type: "TypeIdentificationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Identification",
        type: "IdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Identification of the authorization request"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    TransactionTypeCode: {
      type: "TypeCodeType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:TransactionTypeCode",
        type: "CodeType",
        "xsd:annotation": {
          "xsd:documentation": "Type of  card transaction attempted.  Values include: AUTHORIZATION, AUTHCAPTURE, VOICEAUTH, CAPTURE,  RETURN, VOID"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    ChargeAmount: {
      type: "TypeAmountType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:ChargeAmount",
        type: "AmountType",
        "xsd:annotation": {
          "xsd:documentation": "In Payment transaction request currency"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    ChargeDateTime: {
      type: "TypeDateTimeType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:ChargeDateTime",
        type: "DateTimeType",
        "xsd:annotation": {
          "xsd:documentation": "Time of requesting the credit card authorization"
        },
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
        "xsd:annotation": {
          "xsd:documentation": "Details about the debit card to which an amount is requsted to be charged"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Custom: {
      type: "TypeCustomDebitChargeAuthorizationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Custom",
        type: "corecomcust:CustomDebitChargeAuthorizationType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeDebitChargeAuthorizationType;
Modeler.register(TypeDebitChargeAuthorizationType, "TypeDebitChargeAuthorizationType");
