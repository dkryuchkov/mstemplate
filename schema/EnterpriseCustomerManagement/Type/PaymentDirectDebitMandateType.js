var Modeler = require("../Modeler.js");
var className = 'TypePaymentDirectDebitMandateType';

var TypePaymentDirectDebitMandateType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  AuthorizationMethodCode: {
      type: "TypeCodeType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:AuthorizationMethodCode",
        type: "CodeType",
        "xsd:annotation": {
          "xsd:documentation": "Mandate authorization method. Example values are : Phone, Web, Written etc"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    AuthorizedIndicator: {
      type: "TypeIndicatorType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:AuthorizedIndicator",
        type: "IndicatorType",
        "xsd:annotation": {
          "xsd:documentation": "Flag indicating whether the payer has explicitly granted the mandate or not"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    SignatureDateTime: {
      type: "TypeDateTimeType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:SignatureDateTime",
        type: "DateTimeType",
        "xsd:annotation": {
          "xsd:documentation": "Date on which the mandate has been signed by the payer party"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    ElectronicSignature: {
      type: "TypeStringType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:ElectronicSignature",
        type: "StringType",
        "xsd:annotation": {
          "xsd:documentation": "Digital signature as provided by the payer party"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    FrequencyCode: {
      type: "TypeCodeType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:FrequencyCode",
        type: "CodeType",
        "xsd:annotation": {
          "xsd:documentation": "Frequency of direct debit. Example values are :Daily, Weekly, Monthly etc."
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    AmendmentIndicator: {
      type: "TypeIndicatorType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:AmendmentIndicator",
        type: "IndicatorType",
        "xsd:annotation": {
          "xsd:documentation": "Flag indicating whether the underlying mandate has been amended or not"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    EffectiveTimePeriod: {
      type: "TypeTimePeriodType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:EffectiveTimePeriod",
        type: "TimePeriodType",
        "xsd:annotation": {
          "xsd:documentation": "First Collection Date and Final Collection Date as authorized by the Mandate"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    MandateSignerPartyReference: {
      type: "TypeMandateSignerPartyReferenceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:MandateSignerPartyReference",
        type: "MandateSignerPartyReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Credit Party that signs the Direct Debit Mandate"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    OriginalDirectDebitMandateReference: {
      type: "TypeDirectDebitMandateReferenceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:OriginalDirectDebitMandateReference",
        type: "DirectDebitMandateReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Original Mandate Reference for the case where amendments are made to the original mandate"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Custom: {
      type: "TypeCustomPaymentDirectDebitMandateType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Custom",
        type: "corecomcust:CustomPaymentDirectDebitMandateType",
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
	  AuthorizationMethodCode: {
      type: "TypeCodeType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:AuthorizationMethodCode",
        type: "CodeType",
        "xsd:annotation": {
          "xsd:documentation": "Mandate authorization method. Example values are : Phone, Web, Written etc"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    AuthorizedIndicator: {
      type: "TypeIndicatorType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:AuthorizedIndicator",
        type: "IndicatorType",
        "xsd:annotation": {
          "xsd:documentation": "Flag indicating whether the payer has explicitly granted the mandate or not"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    SignatureDateTime: {
      type: "TypeDateTimeType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:SignatureDateTime",
        type: "DateTimeType",
        "xsd:annotation": {
          "xsd:documentation": "Date on which the mandate has been signed by the payer party"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    ElectronicSignature: {
      type: "TypeStringType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:ElectronicSignature",
        type: "StringType",
        "xsd:annotation": {
          "xsd:documentation": "Digital signature as provided by the payer party"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    FrequencyCode: {
      type: "TypeCodeType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:FrequencyCode",
        type: "CodeType",
        "xsd:annotation": {
          "xsd:documentation": "Frequency of direct debit. Example values are :Daily, Weekly, Monthly etc."
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    AmendmentIndicator: {
      type: "TypeIndicatorType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:AmendmentIndicator",
        type: "IndicatorType",
        "xsd:annotation": {
          "xsd:documentation": "Flag indicating whether the underlying mandate has been amended or not"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    EffectiveTimePeriod: {
      type: "TypeTimePeriodType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:EffectiveTimePeriod",
        type: "TimePeriodType",
        "xsd:annotation": {
          "xsd:documentation": "First Collection Date and Final Collection Date as authorized by the Mandate"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    MandateSignerPartyReference: {
      type: "TypeMandateSignerPartyReferenceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:MandateSignerPartyReference",
        type: "MandateSignerPartyReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Credit Party that signs the Direct Debit Mandate"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    OriginalDirectDebitMandateReference: {
      type: "TypeDirectDebitMandateReferenceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:OriginalDirectDebitMandateReference",
        type: "DirectDebitMandateReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Original Mandate Reference for the case where amendments are made to the original mandate"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Custom: {
      type: "TypeCustomPaymentDirectDebitMandateType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Custom",
        type: "corecomcust:CustomPaymentDirectDebitMandateType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypePaymentDirectDebitMandateType;
Modeler.register(TypePaymentDirectDebitMandateType, "TypePaymentDirectDebitMandateType");
