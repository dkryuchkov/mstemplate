var Modeler = require("../Modeler.js");
var className = 'TypeCustomerPartyCreditProfileType';

var TypeCustomerPartyCreditProfileType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  Identification: {
      type: "TypeIdentificationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Identification",
        type: "IdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Identification of the customer's credit profile"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    PreferredIndicator: {
      type: "TypeIndicatorType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N1:PreferredIndicator",
        type: "WL5G3N2:IndicatorType",
        "xsd:annotation": {
          "xsd:documentation": "Indicates whether this is the Primary Credit profile for this Customer"
        },
        attribute: false,
        ns: "WL5G3N1"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    ClassificationCode: {
      type: "TypeCodeType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N1:ClassificationCode",
        type: "WL5G3N2:CodeType",
        "xsd:annotation": {
          "xsd:documentation": "Specifies the Credit classification."
        },
        attribute: false,
        ns: "WL5G3N1"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    CreditRatingCode: {
      type: "TypeCodeType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N1:CreditRatingCode",
        type: "WL5G3N2:CodeType",
        "xsd:annotation": {
          "xsd:documentation": "Specifies the Credit Rating"
        },
        attribute: false,
        ns: "WL5G3N1"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    RiskCode: {
      type: "TypeCodeType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N1:RiskCode",
        type: "WL5G3N2:CodeType",
        "xsd:annotation": {
          "xsd:documentation": "Specifies the Credit Risk"
        },
        attribute: false,
        ns: "WL5G3N1"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    ReviewCycleCode: {
      type: "TypeCodeType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N1:ReviewCycleCode",
        type: "WL5G3N2:CodeType",
        "xsd:annotation": {
          "xsd:documentation": "Review cycle for the customer credit profile"
        },
        attribute: false,
        ns: "WL5G3N1"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    CurrencyCode: {
      type: "TypeCodeType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N1:CurrencyCode",
        type: "WL5G3N2:CodeType",
        "xsd:annotation": {
          "xsd:documentation": "Currency Code"
        },
        attribute: false,
        ns: "WL5G3N1"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    LanguageCode: {
      type: "TypeCodeType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N1:LanguageCode",
        type: "WL5G3N2:CodeType",
        "xsd:annotation": {
          "xsd:documentation": "Language of documentation for this Credit Profile"
        },
        attribute: false,
        ns: "WL5G3N1"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    CreditLimitAmount: {
      type: "TypeAmountType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N1:CreditLimitAmount",
        type: "WL5G3N2:AmountType",
        "xsd:annotation": {
          "xsd:documentation": "The total amount that the customer is allowed to spend on purchases before the system sends a workflow message"
        },
        attribute: false,
        ns: "WL5G3N1"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    CreditTolerancePercent: {
      type: "TypePercentType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N1:CreditTolerancePercent",
        type: "WL5G3N2:PercentType",
        "xsd:annotation": {
          "xsd:documentation": "Percentage over credit limit that this customer can exceed before action is taken"
        },
        attribute: false,
        ns: "WL5G3N1"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    MaximumOrderAmount: {
      type: "TypeAmountType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N1:MaximumOrderAmount",
        type: "WL5G3N2:AmountType",
        "xsd:annotation": {
          "xsd:documentation": "Maximum Order Amount"
        },
        attribute: false,
        ns: "WL5G3N1"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    CreditCheckBacklogPeriod: {
      type: "TypeDurationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N1:CreditCheckBacklogPeriod",
        type: "WL5G3N2:DurationType",
        "xsd:annotation": {
          "xsd:documentation": "Number of days in the past included in the Credit check"
        },
        attribute: false,
        ns: "WL5G3N1"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    LastCreditReviewDate: {
      type: "TypeDateType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N1:LastCreditReviewDate",
        type: "WL5G3N2:DateType",
        "xsd:annotation": {
          "xsd:documentation": "Date of last credit profile data review"
        },
        attribute: false,
        ns: "WL5G3N1"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    NextCreditReviewDate: {
      type: "TypeDateType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N1:NextCreditReviewDate",
        type: "WL5G3N2:DateType",
        "xsd:annotation": {
          "xsd:documentation": "The next date that credit will be reviewed"
        },
        attribute: false,
        ns: "WL5G3N1"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    CreditCheckRequiredIndicator: {
      type: "TypeIndicatorType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N1:CreditCheckRequiredIndicator",
        type: "WL5G3N2:IndicatorType",
        "xsd:annotation": {
          "xsd:documentation": "Indicates whether a credit check is to be carried out"
        },
        attribute: false,
        ns: "WL5G3N1"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    DiscountTermIndicator: {
      type: "TypeIndicatorType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N1:DiscountTermIndicator",
        type: "WL5G3N2:IndicatorType",
        "xsd:annotation": {
          "xsd:documentation": "Indicates if discount terms exist."
        },
        attribute: false,
        ns: "WL5G3N1"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    PaymentTermOverrideAllowedIndicator: {
      type: "TypeIndicatorType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N1:PaymentTermOverrideAllowedIndicator",
        type: "WL5G3N2:IndicatorType",
        "xsd:annotation": {
          "xsd:documentation": "Indicates if user can override standard payment terms."
        },
        attribute: false,
        ns: "WL5G3N1"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    InterestChargeEnabledIndicator: {
      type: "TypeIndicatorType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N1:InterestChargeEnabledIndicator",
        type: "WL5G3N2:IndicatorType",
        "xsd:annotation": {
          "xsd:documentation": "Indicates if this customer is charged interest."
        },
        attribute: false,
        ns: "WL5G3N1"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    FinanceChargeAccrualIndicator: {
      type: "TypeIndicatorType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N1:FinanceChargeAccrualIndicator",
        type: "WL5G3N2:IndicatorType",
        "xsd:annotation": {
          "xsd:documentation": "Indicates if finance charges are charged on existing finance charge balances."
        },
        attribute: false,
        ns: "WL5G3N1"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    CreditHoldIndicator: {
      type: "TypeIndicatorType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N1:CreditHoldIndicator",
        type: "WL5G3N2:IndicatorType",
        "xsd:annotation": {
          "xsd:documentation": "Indicates if a credit hold exists on this account."
        },
        attribute: false,
        ns: "WL5G3N1"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    StatementDeliveryIndicator: {
      type: "TypeIndicatorType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N1:StatementDeliveryIndicator",
        type: "WL5G3N2:IndicatorType",
        "xsd:annotation": {
          "xsd:documentation": "Indicates if statements are sent to this customer."
        },
        attribute: false,
        ns: "WL5G3N1"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    CreditBalanceStatementDeliveryIndicator: {
      type: "TypeIndicatorType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N1:CreditBalanceStatementDeliveryIndicator",
        type: "WL5G3N2:IndicatorType",
        "xsd:annotation": {
          "xsd:documentation": "Indicates if customers credit balances receive statements."
        },
        attribute: false,
        ns: "WL5G3N1"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    DunningLetterDeliveryIndicator: {
      type: "TypeIndicatorType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N1:DunningLetterDeliveryIndicator",
        type: "WL5G3N2:IndicatorType",
        "xsd:annotation": {
          "xsd:documentation": "Indicates if dunning letters are sent to this customer when invoices, debit memos or chargebacks become past due."
        },
        attribute: false,
        ns: "WL5G3N1"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    InterestPeriod: {
      type: "TypeDurationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N1:InterestPeriod",
        type: "WL5G3N2:DurationType",
        "xsd:annotation": {
          "xsd:documentation": "Number of days that the interest rate refers to"
        },
        attribute: false,
        ns: "WL5G3N1"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    PaymentGracePeriod: {
      type: "TypeDurationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N1:PaymentGracePeriod",
        type: "WL5G3N2:DurationType",
        "xsd:annotation": {
          "xsd:documentation": "Maximum number of overdue days allowed before action is taken"
        },
        attribute: false,
        ns: "WL5G3N1"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    DiscountGracePeriod: {
      type: "TypeDurationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N1:DiscountGracePeriod",
        type: "WL5G3N2:DurationType",
        "xsd:annotation": {
          "xsd:documentation": "Number of days after discount term date that this customer can take discounts"
        },
        attribute: false,
        ns: "WL5G3N1"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    CorporateCreditLimitOverTolerancePercent: {
      type: "TypePercentType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N1:CorporateCreditLimitOverTolerancePercent",
        type: "WL5G3N2:PercentType",
        "xsd:annotation": {
          "xsd:documentation": "Percent Over corporate credit Limit when the credit profile is for the Customer as part of a corporation"
        },
        attribute: false,
        ns: "WL5G3N1"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    CorporateCreditLimitAmount: {
      type: "TypeAmountType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N1:CorporateCreditLimitAmount",
        type: "WL5G3N2:AmountType",
        "xsd:annotation": {
          "xsd:documentation": "Corporate Credit Limit when the credit profile is for the Customer as part of a corporation"
        },
        attribute: false,
        ns: "WL5G3N1"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    CorporateCreditLimitDate: {
      type: "TypeDateType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N1:CorporateCreditLimitDate",
        type: "WL5G3N2:DateType",
        "xsd:annotation": {
          "xsd:documentation": "Corporate Credit Limit Date when the credit profile is for the Customer as part of a corporation"
        },
        attribute: false,
        ns: "WL5G3N1"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    CreditScore: {
      type: "TypeNumericType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N1:CreditScore",
        type: "WL5G3N2:NumericType",
        "xsd:annotation": {
          "xsd:documentation": "Indicates the credit score of the customer. Ex. 4, 7, 10,8 etc."
        },
        attribute: false,
        ns: "WL5G3N1"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    RiskCategoryCode: {
      type: "TypeCodeType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N1:RiskCategoryCode",
        type: "WL5G3N2:CodeType",
        "xsd:annotation": {
          "xsd:documentation": "indicates the risk category of the customer. Ex. Moderate Risk, Significant Risk , Management Attention etc."
        },
        attribute: false,
        ns: "WL5G3N1"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    TotalUtilizedLineOfCreditAmount: {
      type: "TypeAmountType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N1:TotalUtilizedLineOfCreditAmount",
        type: "WL5G3N2:AmountType",
        "xsd:annotation": {
          "xsd:documentation": "Indicates the total utilization amount for the Credit Lines"
        },
        attribute: false,
        ns: "WL5G3N1"
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
          "xsd:documentation": "Effective Period of this Credit Profile"
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
          "xsd:documentation": "Status as of Effective Date"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Note: {
      type: "TypeNoteType",
      wsdlDefinition: {
        maxOccurs: "unbounded",
        minOccurs: "0",
        name: "WL5G3N2:Note",
        type: "NoteType",
        "xsd:annotation": {
          "xsd:documentation": "Note"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    },
    CollectionStatus: {
      type: "TypeStatusType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:CollectionStatus",
        type: "StatusType",
        "xsd:annotation": {
          "xsd:documentation": "Collection Status that also includes Collection Date"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    PaymentTerm: {
      type: "TypePaymentTermType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:PaymentTerm",
        type: "PaymentTermType",
        "xsd:annotation": {
          "xsd:documentation": "The Payment Term associated with this credit profile"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    CreditAnalystContact: {
      type: "TypeContactType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:CreditAnalystContact",
        type: "ContactType",
        "xsd:annotation": {
          "xsd:documentation": "Identifier of the credit analyst associated with this customer profile"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    CustomerPartyLineOfCredit: {
      type: "TypeCustomerPartyLineOfCreditType",
      wsdlDefinition: {
        maxOccurs: "unbounded",
        minOccurs: "0",
        name: "WL5G3N1:CustomerPartyLineOfCredit",
        type: "CustomerPartyLineOfCreditType",
        "xsd:annotation": {
          "xsd:documentation": "The credit allowed to the customer"
        },
        attribute: false,
        ns: "WL5G3N1"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    },
    Custom: {
      type: "TypeCustomCustomerPartyCreditProfileType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N1:Custom",
        type: "corecustomerpartycust:CustomCustomerPartyCreditProfileType",
        attribute: false,
        ns: "WL5G3N1"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    actionCode: {
      type: "TypeActionCodeType",
      wsdlDefinition: {
        name: "actionCode",
        type: "WL5G3N2:ActionCodeType",
        use: "optional",
        attribute: true
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
          "xsd:documentation": "Identification of the customer's credit profile"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    PreferredIndicator: {
      type: "TypeIndicatorType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N1:PreferredIndicator",
        type: "WL5G3N2:IndicatorType",
        "xsd:annotation": {
          "xsd:documentation": "Indicates whether this is the Primary Credit profile for this Customer"
        },
        attribute: false,
        ns: "WL5G3N1"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    ClassificationCode: {
      type: "TypeCodeType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N1:ClassificationCode",
        type: "WL5G3N2:CodeType",
        "xsd:annotation": {
          "xsd:documentation": "Specifies the Credit classification."
        },
        attribute: false,
        ns: "WL5G3N1"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    CreditRatingCode: {
      type: "TypeCodeType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N1:CreditRatingCode",
        type: "WL5G3N2:CodeType",
        "xsd:annotation": {
          "xsd:documentation": "Specifies the Credit Rating"
        },
        attribute: false,
        ns: "WL5G3N1"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    RiskCode: {
      type: "TypeCodeType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N1:RiskCode",
        type: "WL5G3N2:CodeType",
        "xsd:annotation": {
          "xsd:documentation": "Specifies the Credit Risk"
        },
        attribute: false,
        ns: "WL5G3N1"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    ReviewCycleCode: {
      type: "TypeCodeType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N1:ReviewCycleCode",
        type: "WL5G3N2:CodeType",
        "xsd:annotation": {
          "xsd:documentation": "Review cycle for the customer credit profile"
        },
        attribute: false,
        ns: "WL5G3N1"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    CurrencyCode: {
      type: "TypeCodeType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N1:CurrencyCode",
        type: "WL5G3N2:CodeType",
        "xsd:annotation": {
          "xsd:documentation": "Currency Code"
        },
        attribute: false,
        ns: "WL5G3N1"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    LanguageCode: {
      type: "TypeCodeType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N1:LanguageCode",
        type: "WL5G3N2:CodeType",
        "xsd:annotation": {
          "xsd:documentation": "Language of documentation for this Credit Profile"
        },
        attribute: false,
        ns: "WL5G3N1"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    CreditLimitAmount: {
      type: "TypeAmountType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N1:CreditLimitAmount",
        type: "WL5G3N2:AmountType",
        "xsd:annotation": {
          "xsd:documentation": "The total amount that the customer is allowed to spend on purchases before the system sends a workflow message"
        },
        attribute: false,
        ns: "WL5G3N1"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    CreditTolerancePercent: {
      type: "TypePercentType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N1:CreditTolerancePercent",
        type: "WL5G3N2:PercentType",
        "xsd:annotation": {
          "xsd:documentation": "Percentage over credit limit that this customer can exceed before action is taken"
        },
        attribute: false,
        ns: "WL5G3N1"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    MaximumOrderAmount: {
      type: "TypeAmountType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N1:MaximumOrderAmount",
        type: "WL5G3N2:AmountType",
        "xsd:annotation": {
          "xsd:documentation": "Maximum Order Amount"
        },
        attribute: false,
        ns: "WL5G3N1"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    CreditCheckBacklogPeriod: {
      type: "TypeDurationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N1:CreditCheckBacklogPeriod",
        type: "WL5G3N2:DurationType",
        "xsd:annotation": {
          "xsd:documentation": "Number of days in the past included in the Credit check"
        },
        attribute: false,
        ns: "WL5G3N1"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    LastCreditReviewDate: {
      type: "TypeDateType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N1:LastCreditReviewDate",
        type: "WL5G3N2:DateType",
        "xsd:annotation": {
          "xsd:documentation": "Date of last credit profile data review"
        },
        attribute: false,
        ns: "WL5G3N1"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    NextCreditReviewDate: {
      type: "TypeDateType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N1:NextCreditReviewDate",
        type: "WL5G3N2:DateType",
        "xsd:annotation": {
          "xsd:documentation": "The next date that credit will be reviewed"
        },
        attribute: false,
        ns: "WL5G3N1"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    CreditCheckRequiredIndicator: {
      type: "TypeIndicatorType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N1:CreditCheckRequiredIndicator",
        type: "WL5G3N2:IndicatorType",
        "xsd:annotation": {
          "xsd:documentation": "Indicates whether a credit check is to be carried out"
        },
        attribute: false,
        ns: "WL5G3N1"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    DiscountTermIndicator: {
      type: "TypeIndicatorType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N1:DiscountTermIndicator",
        type: "WL5G3N2:IndicatorType",
        "xsd:annotation": {
          "xsd:documentation": "Indicates if discount terms exist."
        },
        attribute: false,
        ns: "WL5G3N1"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    PaymentTermOverrideAllowedIndicator: {
      type: "TypeIndicatorType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N1:PaymentTermOverrideAllowedIndicator",
        type: "WL5G3N2:IndicatorType",
        "xsd:annotation": {
          "xsd:documentation": "Indicates if user can override standard payment terms."
        },
        attribute: false,
        ns: "WL5G3N1"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    InterestChargeEnabledIndicator: {
      type: "TypeIndicatorType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N1:InterestChargeEnabledIndicator",
        type: "WL5G3N2:IndicatorType",
        "xsd:annotation": {
          "xsd:documentation": "Indicates if this customer is charged interest."
        },
        attribute: false,
        ns: "WL5G3N1"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    FinanceChargeAccrualIndicator: {
      type: "TypeIndicatorType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N1:FinanceChargeAccrualIndicator",
        type: "WL5G3N2:IndicatorType",
        "xsd:annotation": {
          "xsd:documentation": "Indicates if finance charges are charged on existing finance charge balances."
        },
        attribute: false,
        ns: "WL5G3N1"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    CreditHoldIndicator: {
      type: "TypeIndicatorType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N1:CreditHoldIndicator",
        type: "WL5G3N2:IndicatorType",
        "xsd:annotation": {
          "xsd:documentation": "Indicates if a credit hold exists on this account."
        },
        attribute: false,
        ns: "WL5G3N1"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    StatementDeliveryIndicator: {
      type: "TypeIndicatorType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N1:StatementDeliveryIndicator",
        type: "WL5G3N2:IndicatorType",
        "xsd:annotation": {
          "xsd:documentation": "Indicates if statements are sent to this customer."
        },
        attribute: false,
        ns: "WL5G3N1"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    CreditBalanceStatementDeliveryIndicator: {
      type: "TypeIndicatorType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N1:CreditBalanceStatementDeliveryIndicator",
        type: "WL5G3N2:IndicatorType",
        "xsd:annotation": {
          "xsd:documentation": "Indicates if customers credit balances receive statements."
        },
        attribute: false,
        ns: "WL5G3N1"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    DunningLetterDeliveryIndicator: {
      type: "TypeIndicatorType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N1:DunningLetterDeliveryIndicator",
        type: "WL5G3N2:IndicatorType",
        "xsd:annotation": {
          "xsd:documentation": "Indicates if dunning letters are sent to this customer when invoices, debit memos or chargebacks become past due."
        },
        attribute: false,
        ns: "WL5G3N1"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    InterestPeriod: {
      type: "TypeDurationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N1:InterestPeriod",
        type: "WL5G3N2:DurationType",
        "xsd:annotation": {
          "xsd:documentation": "Number of days that the interest rate refers to"
        },
        attribute: false,
        ns: "WL5G3N1"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    PaymentGracePeriod: {
      type: "TypeDurationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N1:PaymentGracePeriod",
        type: "WL5G3N2:DurationType",
        "xsd:annotation": {
          "xsd:documentation": "Maximum number of overdue days allowed before action is taken"
        },
        attribute: false,
        ns: "WL5G3N1"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    DiscountGracePeriod: {
      type: "TypeDurationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N1:DiscountGracePeriod",
        type: "WL5G3N2:DurationType",
        "xsd:annotation": {
          "xsd:documentation": "Number of days after discount term date that this customer can take discounts"
        },
        attribute: false,
        ns: "WL5G3N1"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    CorporateCreditLimitOverTolerancePercent: {
      type: "TypePercentType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N1:CorporateCreditLimitOverTolerancePercent",
        type: "WL5G3N2:PercentType",
        "xsd:annotation": {
          "xsd:documentation": "Percent Over corporate credit Limit when the credit profile is for the Customer as part of a corporation"
        },
        attribute: false,
        ns: "WL5G3N1"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    CorporateCreditLimitAmount: {
      type: "TypeAmountType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N1:CorporateCreditLimitAmount",
        type: "WL5G3N2:AmountType",
        "xsd:annotation": {
          "xsd:documentation": "Corporate Credit Limit when the credit profile is for the Customer as part of a corporation"
        },
        attribute: false,
        ns: "WL5G3N1"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    CorporateCreditLimitDate: {
      type: "TypeDateType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N1:CorporateCreditLimitDate",
        type: "WL5G3N2:DateType",
        "xsd:annotation": {
          "xsd:documentation": "Corporate Credit Limit Date when the credit profile is for the Customer as part of a corporation"
        },
        attribute: false,
        ns: "WL5G3N1"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    CreditScore: {
      type: "TypeNumericType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N1:CreditScore",
        type: "WL5G3N2:NumericType",
        "xsd:annotation": {
          "xsd:documentation": "Indicates the credit score of the customer. Ex. 4, 7, 10,8 etc."
        },
        attribute: false,
        ns: "WL5G3N1"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    RiskCategoryCode: {
      type: "TypeCodeType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N1:RiskCategoryCode",
        type: "WL5G3N2:CodeType",
        "xsd:annotation": {
          "xsd:documentation": "indicates the risk category of the customer. Ex. Moderate Risk, Significant Risk , Management Attention etc."
        },
        attribute: false,
        ns: "WL5G3N1"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    TotalUtilizedLineOfCreditAmount: {
      type: "TypeAmountType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N1:TotalUtilizedLineOfCreditAmount",
        type: "WL5G3N2:AmountType",
        "xsd:annotation": {
          "xsd:documentation": "Indicates the total utilization amount for the Credit Lines"
        },
        attribute: false,
        ns: "WL5G3N1"
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
          "xsd:documentation": "Effective Period of this Credit Profile"
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
          "xsd:documentation": "Status as of Effective Date"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Note: {
      type: "TypeNoteType",
      wsdlDefinition: {
        maxOccurs: "unbounded",
        minOccurs: "0",
        name: "WL5G3N2:Note",
        type: "NoteType",
        "xsd:annotation": {
          "xsd:documentation": "Note"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    },
    CollectionStatus: {
      type: "TypeStatusType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:CollectionStatus",
        type: "StatusType",
        "xsd:annotation": {
          "xsd:documentation": "Collection Status that also includes Collection Date"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    PaymentTerm: {
      type: "TypePaymentTermType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:PaymentTerm",
        type: "PaymentTermType",
        "xsd:annotation": {
          "xsd:documentation": "The Payment Term associated with this credit profile"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    CreditAnalystContact: {
      type: "TypeContactType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:CreditAnalystContact",
        type: "ContactType",
        "xsd:annotation": {
          "xsd:documentation": "Identifier of the credit analyst associated with this customer profile"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    CustomerPartyLineOfCredit: {
      type: "TypeCustomerPartyLineOfCreditType",
      wsdlDefinition: {
        maxOccurs: "unbounded",
        minOccurs: "0",
        name: "WL5G3N1:CustomerPartyLineOfCredit",
        type: "CustomerPartyLineOfCreditType",
        "xsd:annotation": {
          "xsd:documentation": "The credit allowed to the customer"
        },
        attribute: false,
        ns: "WL5G3N1"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    },
    Custom: {
      type: "TypeCustomCustomerPartyCreditProfileType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N1:Custom",
        type: "corecustomerpartycust:CustomCustomerPartyCreditProfileType",
        attribute: false,
        ns: "WL5G3N1"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    actionCode: {
      type: "TypeActionCodeType",
      wsdlDefinition: {
        name: "actionCode",
        type: "WL5G3N2:ActionCodeType",
        use: "optional",
        attribute: true
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCustomerPartyCreditProfileType;
Modeler.register(TypeCustomerPartyCreditProfileType, "TypeCustomerPartyCreditProfileType");
