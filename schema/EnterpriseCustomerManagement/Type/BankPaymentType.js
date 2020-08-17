var Modeler = require("../Modeler.js");
var className = 'TypeBankPaymentType';

var TypeBankPaymentType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  Identification: {
      type: "TypeIdentificationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Identification",
        type: "IdentificationType",
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
        "xsd:annotation": {
          "xsd:documentation": "Type of EFT (Electronic Funds Transfer) transaction attempted.  Sample Values : DEBIT, CREDIT, VERIFY, VALIDATE"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    InstructionCode: {
      type: "TypeCodeType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:InstructionCode",
        type: "CodeType",
        "xsd:annotation": {
          "xsd:documentation": "Unique identification of the Bank payment Instruction that the PayFrom party instructs the bank"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    SettlementPriorityCode: {
      type: "TypeCodeType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:SettlementPriorityCode",
        type: "CodeType",
        "xsd:annotation": {
          "xsd:documentation": "The priority with which the financial institution or payment system should settle payment for this document"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    SequenceTypeCode: {
      type: "TypeCodeType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:SequenceTypeCode",
        type: "CodeType",
        "xsd:annotation": {
          "xsd:documentation": "Identifies the direct debit sequence i.e. First, Recurrent, Final or One-off etc"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    ReasonCode: {
      type: "TypeCodeType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:ReasonCode",
        type: "CodeType",
        "xsd:annotation": {
          "xsd:documentation": "Payment Reason code determining the purpose of the payment. Usage: This code helps to process and fulfill the payment properly"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    AuthorizationMethodCode: {
      type: "TypeCodeType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:AuthorizationMethodCode",
        type: "CodeType",
        "xsd:annotation": {
          "xsd:documentation": "Method by which the payer authorized the transaction.  Example of some values can be: WRITTEN, INTERNET_FORM"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    DeliveryMethodCode: {
      type: "TypeCodeType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:DeliveryMethodCode",
        type: "CodeType",
        "xsd:annotation": {
          "xsd:documentation": "Method by which the transaction is delivered.  Example of some values can be: ACH, FASCIMILE"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    TransferTypeCode: {
      type: "TypeCodeType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:TransferTypeCode",
        type: "CodeType",
        "xsd:annotation": {
          "xsd:documentation": "Bank account payment transfer type"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    ReferenceCode: {
      type: "TypeCodeType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:ReferenceCode",
        type: "CodeType",
        "xsd:annotation": {
          "xsd:documentation": "Payment system-provided reference code for this payment"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    ChargeBearerCode: {
      type: "TypeCodeType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:ChargeBearerCode",
        type: "CodeType",
        "xsd:annotation": {
          "xsd:documentation": "Bearer of bank account charges.  Specifies which party/parties will bear the charges associated with the processing of the payment transaction. Example of some values can be: Credit, Debit, Shared, Service Level"
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
          "xsd:documentation": "Bank charge amount in payer's Bank account currency"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    PayFromBankAccount: {
      type: "TypeBankAccountType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:PayFromBankAccount",
        type: "BankAccountType",
        "xsd:annotation": {
          "xsd:documentation": "Payer's Bank Account"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    PayeeBankAccount: {
      type: "TypeBankAccountType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:PayeeBankAccount",
        type: "BankAccountType",
        "xsd:annotation": {
          "xsd:documentation": "Payee's Bank Account"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    ChargeProcessingBankAccount: {
      type: "TypeBankAccountType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:ChargeProcessingBankAccount",
        type: "BankAccountType",
        "xsd:annotation": {
          "xsd:documentation": "Bank Account that pays the Bank Charge amount, if different from the Payer's Bank Account"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    PaymentDebitCommunication: {
      type: "TypePaymentDebitCommunicationType",
      wsdlDefinition: {
        maxOccurs: "unbounded",
        minOccurs: "0",
        name: "WL5G3N2:PaymentDebitCommunication",
        type: "PaymentDebitCommunicationType",
        "xsd:annotation": {
          "xsd:documentation": "Contact information related to the Debit Notification"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    },
    PaymentRemittanceCommunication: {
      type: "TypePaymentRemittanceCommunicationType",
      wsdlDefinition: {
        maxOccurs: "unbounded",
        minOccurs: "0",
        name: "WL5G3N2:PaymentRemittanceCommunication",
        type: "PaymentRemittanceCommunicationType",
        "xsd:annotation": {
          "xsd:documentation": "Contact information related to the Remittance"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    },
    Custom: {
      type: "TypeCustomBankPaymentType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Custom",
        type: "corecomcust:CustomBankPaymentType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    ServiceLevelCode: {
      type: "TypeCodeType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:ServiceLevelCode",
        type: "CodeType",
        "xsd:annotation": {
          "xsd:documentation": "Agreement of Service between the payFrom party and the payee party under which the transfer should be processed. For SEPA the service level code must be SEPA. The other two options are EBA Priority Service and Same Day Value. Alternatively the company and the bank can use mutually agreed service level"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    ClearingChannelCode: {
      type: "TypeCodeType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:ClearingChannelCode",
        type: "CodeType",
        "xsd:annotation": {
          "xsd:documentation": "Clearing channel to be used for the transaction. Valid values are : Book Transfer, Mass Payment Net System, Real Time Gross Settlement System, Real Time Net Settlement System"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    PaymentDirectDebitMandate: {
      type: "TypePaymentDirectDebitMandateType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:PaymentDirectDebitMandate",
        type: "PaymentDirectDebitMandateType",
        "xsd:annotation": {
          "xsd:documentation": "Mandate for the Direct Debit in case of a Direct debit payment"
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
        "xsd:annotation": {
          "xsd:documentation": "Details of the check in case of a check payment"
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
	  Identification: {
      type: "TypeIdentificationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Identification",
        type: "IdentificationType",
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
        "xsd:annotation": {
          "xsd:documentation": "Type of EFT (Electronic Funds Transfer) transaction attempted.  Sample Values : DEBIT, CREDIT, VERIFY, VALIDATE"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    InstructionCode: {
      type: "TypeCodeType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:InstructionCode",
        type: "CodeType",
        "xsd:annotation": {
          "xsd:documentation": "Unique identification of the Bank payment Instruction that the PayFrom party instructs the bank"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    SettlementPriorityCode: {
      type: "TypeCodeType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:SettlementPriorityCode",
        type: "CodeType",
        "xsd:annotation": {
          "xsd:documentation": "The priority with which the financial institution or payment system should settle payment for this document"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    SequenceTypeCode: {
      type: "TypeCodeType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:SequenceTypeCode",
        type: "CodeType",
        "xsd:annotation": {
          "xsd:documentation": "Identifies the direct debit sequence i.e. First, Recurrent, Final or One-off etc"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    ReasonCode: {
      type: "TypeCodeType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:ReasonCode",
        type: "CodeType",
        "xsd:annotation": {
          "xsd:documentation": "Payment Reason code determining the purpose of the payment. Usage: This code helps to process and fulfill the payment properly"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    AuthorizationMethodCode: {
      type: "TypeCodeType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:AuthorizationMethodCode",
        type: "CodeType",
        "xsd:annotation": {
          "xsd:documentation": "Method by which the payer authorized the transaction.  Example of some values can be: WRITTEN, INTERNET_FORM"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    DeliveryMethodCode: {
      type: "TypeCodeType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:DeliveryMethodCode",
        type: "CodeType",
        "xsd:annotation": {
          "xsd:documentation": "Method by which the transaction is delivered.  Example of some values can be: ACH, FASCIMILE"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    TransferTypeCode: {
      type: "TypeCodeType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:TransferTypeCode",
        type: "CodeType",
        "xsd:annotation": {
          "xsd:documentation": "Bank account payment transfer type"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    ReferenceCode: {
      type: "TypeCodeType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:ReferenceCode",
        type: "CodeType",
        "xsd:annotation": {
          "xsd:documentation": "Payment system-provided reference code for this payment"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    ChargeBearerCode: {
      type: "TypeCodeType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:ChargeBearerCode",
        type: "CodeType",
        "xsd:annotation": {
          "xsd:documentation": "Bearer of bank account charges.  Specifies which party/parties will bear the charges associated with the processing of the payment transaction. Example of some values can be: Credit, Debit, Shared, Service Level"
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
          "xsd:documentation": "Bank charge amount in payer's Bank account currency"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    PayFromBankAccount: {
      type: "TypeBankAccountType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:PayFromBankAccount",
        type: "BankAccountType",
        "xsd:annotation": {
          "xsd:documentation": "Payer's Bank Account"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    PayeeBankAccount: {
      type: "TypeBankAccountType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:PayeeBankAccount",
        type: "BankAccountType",
        "xsd:annotation": {
          "xsd:documentation": "Payee's Bank Account"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    ChargeProcessingBankAccount: {
      type: "TypeBankAccountType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:ChargeProcessingBankAccount",
        type: "BankAccountType",
        "xsd:annotation": {
          "xsd:documentation": "Bank Account that pays the Bank Charge amount, if different from the Payer's Bank Account"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    PaymentDebitCommunication: {
      type: "TypePaymentDebitCommunicationType",
      wsdlDefinition: {
        maxOccurs: "unbounded",
        minOccurs: "0",
        name: "WL5G3N2:PaymentDebitCommunication",
        type: "PaymentDebitCommunicationType",
        "xsd:annotation": {
          "xsd:documentation": "Contact information related to the Debit Notification"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    },
    PaymentRemittanceCommunication: {
      type: "TypePaymentRemittanceCommunicationType",
      wsdlDefinition: {
        maxOccurs: "unbounded",
        minOccurs: "0",
        name: "WL5G3N2:PaymentRemittanceCommunication",
        type: "PaymentRemittanceCommunicationType",
        "xsd:annotation": {
          "xsd:documentation": "Contact information related to the Remittance"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    },
    Custom: {
      type: "TypeCustomBankPaymentType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Custom",
        type: "corecomcust:CustomBankPaymentType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    ServiceLevelCode: {
      type: "TypeCodeType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:ServiceLevelCode",
        type: "CodeType",
        "xsd:annotation": {
          "xsd:documentation": "Agreement of Service between the payFrom party and the payee party under which the transfer should be processed. For SEPA the service level code must be SEPA. The other two options are EBA Priority Service and Same Day Value. Alternatively the company and the bank can use mutually agreed service level"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    ClearingChannelCode: {
      type: "TypeCodeType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:ClearingChannelCode",
        type: "CodeType",
        "xsd:annotation": {
          "xsd:documentation": "Clearing channel to be used for the transaction. Valid values are : Book Transfer, Mass Payment Net System, Real Time Gross Settlement System, Real Time Net Settlement System"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    PaymentDirectDebitMandate: {
      type: "TypePaymentDirectDebitMandateType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:PaymentDirectDebitMandate",
        type: "PaymentDirectDebitMandateType",
        "xsd:annotation": {
          "xsd:documentation": "Mandate for the Direct Debit in case of a Direct debit payment"
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
        "xsd:annotation": {
          "xsd:documentation": "Details of the check in case of a check payment"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeBankPaymentType;
Modeler.register(TypeBankPaymentType, "TypeBankPaymentType");
