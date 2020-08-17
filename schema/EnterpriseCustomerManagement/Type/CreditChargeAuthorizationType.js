var Modeler = require("../Modeler.js");
var className = 'TypeCreditChargeAuthorizationType';

var TypeCreditChargeAuthorizationType = function(json, parentObj) {
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
    TypeCode: {
      type: "TypeCodeType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:TypeCode",
        type: "CodeType",
        "xsd:annotation": {
          "xsd:documentation": "Type of credit card transaction attempted.  Values include: AUTHORIZATION, AUTHCAPTURE, VOICEAUTH, CAPTURE, CREDIT, RETURN, VOID"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    TraceNumber: {
      type: "TypeIdentifierType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:TraceNumber",
        type: "IdentifierType",
        "xsd:annotation": {
          "xsd:documentation": "Third party Payment (credit card system) system-provided trace number"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    VoiceAuthorizationIndicator: {
      type: "TypeIndicatorType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:VoiceAuthorizationIndicator",
        type: "IndicatorType",
        "xsd:annotation": {
          "xsd:documentation": "Indicates whether Authorization was done manually over the phone"
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
    CreditCard: {
      type: "TypeCreditCardType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:CreditCard",
        type: "CreditCardType",
        "xsd:annotation": {
          "xsd:documentation": "Details about the credit card to which an amount is requsted to be charged"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Custom: {
      type: "TypeCustomCreditChargeAuthorizationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Custom",
        type: "corecomcust:CustomCreditChargeAuthorizationType",
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
    TypeCode: {
      type: "TypeCodeType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:TypeCode",
        type: "CodeType",
        "xsd:annotation": {
          "xsd:documentation": "Type of credit card transaction attempted.  Values include: AUTHORIZATION, AUTHCAPTURE, VOICEAUTH, CAPTURE, CREDIT, RETURN, VOID"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    TraceNumber: {
      type: "TypeIdentifierType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:TraceNumber",
        type: "IdentifierType",
        "xsd:annotation": {
          "xsd:documentation": "Third party Payment (credit card system) system-provided trace number"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    VoiceAuthorizationIndicator: {
      type: "TypeIndicatorType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:VoiceAuthorizationIndicator",
        type: "IndicatorType",
        "xsd:annotation": {
          "xsd:documentation": "Indicates whether Authorization was done manually over the phone"
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
    CreditCard: {
      type: "TypeCreditCardType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:CreditCard",
        type: "CreditCardType",
        "xsd:annotation": {
          "xsd:documentation": "Details about the credit card to which an amount is requsted to be charged"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Custom: {
      type: "TypeCustomCreditChargeAuthorizationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Custom",
        type: "corecomcust:CustomCreditChargeAuthorizationType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCreditChargeAuthorizationType;
Modeler.register(TypeCreditChargeAuthorizationType, "TypeCreditChargeAuthorizationType");
