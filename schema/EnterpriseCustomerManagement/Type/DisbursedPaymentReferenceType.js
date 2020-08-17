var Modeler = require("../Modeler.js");
var className = 'TypeDisbursedPaymentReferenceType';

var TypeDisbursedPaymentReferenceType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  DisbursedPaymentIdentification: {
      type: "TypeDisbursedPaymentIdentificationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:DisbursedPaymentIdentification",
        type: "DisbursedPaymentIdentificationType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    PaymentAmount: {
      type: "TypeAmountType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:PaymentAmount",
        type: "AmountType",
        "xsd:annotation": {
          "xsd:documentation": "Payment amount in bank account currency"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    ClearedDate: {
      type: "TypeDateType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:ClearedDate",
        type: "DateType",
        "xsd:annotation": {
          "xsd:documentation": "The date that the payment was cleared by the bank"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    ClearedAmount: {
      type: "TypeAmountType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:ClearedAmount",
        type: "AmountType",
        "xsd:annotation": {
          "xsd:documentation": "Payment cleared amount in bank account currency"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Status: {
      type: "TypeStatusType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Status",
        type: "StatusType",
        "xsd:annotation": {
          "xsd:documentation": "Status of payment (for example, NEGOTIABLE, SET UP, SPOILED)"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Custom: {
      type: "TypeCustomDisbursedPaymentReferenceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Custom",
        type: "corecomcust:CustomDisbursedPaymentReferenceType",
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
	  DisbursedPaymentIdentification: {
      type: "TypeDisbursedPaymentIdentificationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:DisbursedPaymentIdentification",
        type: "DisbursedPaymentIdentificationType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    PaymentAmount: {
      type: "TypeAmountType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:PaymentAmount",
        type: "AmountType",
        "xsd:annotation": {
          "xsd:documentation": "Payment amount in bank account currency"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    ClearedDate: {
      type: "TypeDateType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:ClearedDate",
        type: "DateType",
        "xsd:annotation": {
          "xsd:documentation": "The date that the payment was cleared by the bank"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    ClearedAmount: {
      type: "TypeAmountType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:ClearedAmount",
        type: "AmountType",
        "xsd:annotation": {
          "xsd:documentation": "Payment cleared amount in bank account currency"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Status: {
      type: "TypeStatusType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Status",
        type: "StatusType",
        "xsd:annotation": {
          "xsd:documentation": "Status of payment (for example, NEGOTIABLE, SET UP, SPOILED)"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Custom: {
      type: "TypeCustomDisbursedPaymentReferenceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Custom",
        type: "corecomcust:CustomDisbursedPaymentReferenceType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeDisbursedPaymentReferenceType;
Modeler.register(TypeDisbursedPaymentReferenceType, "TypeDisbursedPaymentReferenceType");
