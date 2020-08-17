var Modeler = require("../Modeler.js");
var className = 'TypeCreditChargeAuthorizationResponseType';

var TypeCreditChargeAuthorizationResponseType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  Identification: {
      type: "TypeIdentificationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Identification",
        type: "IdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Identification of the authorization response"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    ActionTypeCode: {
      type: "TypeCodeType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:ActionTypeCode",
        type: "CodeType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    ResponseCode: {
      type: "TypeCodeType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:ResponseCode",
        type: "CodeType",
        "xsd:annotation": {
          "xsd:documentation": "Code that indicates the result of the authorization request"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    AVSResponseCode: {
      type: "TypeCodeType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:AVSResponseCode",
        type: "CodeType",
        "xsd:annotation": {
          "xsd:documentation": "Address Verification Service response code for swiped transactions where the zip code or address line information was provided as part of the request"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    PaymentSystemCode: {
      type: "TypeCodeType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:PaymentSystemCode",
        type: "CodeType",
        "xsd:annotation": {
          "xsd:documentation": "Payment system code returned during the initial authorization"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    SecurityCheckResponseCode: {
      type: "TypeCodeType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:SecurityCheckResponseCode",
        type: "CodeType",
        "xsd:annotation": {
          "xsd:documentation": "Result of the CVV3/4 number verification"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    AuthorizationDateTime: {
      type: "TypeDateTimeType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:AuthorizationDateTime",
        type: "DateTimeType",
        "xsd:annotation": {
          "xsd:documentation": "Time at which the credit card payment request was authorized"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    AuthorizedAmount: {
      type: "TypeAmountType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:AuthorizedAmount",
        type: "AmountType",
        "xsd:annotation": {
          "xsd:documentation": "The Authorized  Charge Amount, in the  currency of the credit card issuer"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Custom: {
      type: "TypeCustomCreditChargeAuthorizationResponseType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Custom",
        type: "corecomcust:CustomCreditChargeAuthorizationResponseType",
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
          "xsd:documentation": "Identification of the authorization response"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    ActionTypeCode: {
      type: "TypeCodeType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:ActionTypeCode",
        type: "CodeType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    ResponseCode: {
      type: "TypeCodeType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:ResponseCode",
        type: "CodeType",
        "xsd:annotation": {
          "xsd:documentation": "Code that indicates the result of the authorization request"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    AVSResponseCode: {
      type: "TypeCodeType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:AVSResponseCode",
        type: "CodeType",
        "xsd:annotation": {
          "xsd:documentation": "Address Verification Service response code for swiped transactions where the zip code or address line information was provided as part of the request"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    PaymentSystemCode: {
      type: "TypeCodeType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:PaymentSystemCode",
        type: "CodeType",
        "xsd:annotation": {
          "xsd:documentation": "Payment system code returned during the initial authorization"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    SecurityCheckResponseCode: {
      type: "TypeCodeType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:SecurityCheckResponseCode",
        type: "CodeType",
        "xsd:annotation": {
          "xsd:documentation": "Result of the CVV3/4 number verification"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    AuthorizationDateTime: {
      type: "TypeDateTimeType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:AuthorizationDateTime",
        type: "DateTimeType",
        "xsd:annotation": {
          "xsd:documentation": "Time at which the credit card payment request was authorized"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    AuthorizedAmount: {
      type: "TypeAmountType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:AuthorizedAmount",
        type: "AmountType",
        "xsd:annotation": {
          "xsd:documentation": "The Authorized  Charge Amount, in the  currency of the credit card issuer"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Custom: {
      type: "TypeCustomCreditChargeAuthorizationResponseType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Custom",
        type: "corecomcust:CustomCreditChargeAuthorizationResponseType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCreditChargeAuthorizationResponseType;
Modeler.register(TypeCreditChargeAuthorizationResponseType, "TypeCreditChargeAuthorizationResponseType");
