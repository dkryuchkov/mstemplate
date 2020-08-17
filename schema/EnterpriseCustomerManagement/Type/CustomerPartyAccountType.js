var Modeler = require("../Modeler.js");
var className = 'TypeCustomerPartyAccountType';

var TypeCustomerPartyAccountType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  Identification: {
      type: "TypeIdentificationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Identification",
        type: "IdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Customer Account unique identifier"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    CreationDateTime: {
      type: "TypeDateTimeType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N1:CreationDateTime",
        type: "WL5G3N2:DateTimeType",
        "xsd:annotation": {
          "xsd:documentation": "Date when the customer account was originally established"
        },
        attribute: false,
        ns: "WL5G3N1"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    CoterminateDateTime: {
      type: "TypeDateTimeType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N1:CoterminateDateTime",
        type: "WL5G3N2:DateTimeType",
        "xsd:annotation": {
          "xsd:documentation": "Identifies the date when services ordered by the customer will end."
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
          "xsd:documentation": "Default Billing Currency for this Customer Account"
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
          "xsd:documentation": "Classifications that this Customer Party Account has been classified into."
        },
        attribute: false,
        ns: "WL5G3N1"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Name: {
      type: "TypeNameType",
      wsdlDefinition: {
        maxOccurs: "unbounded",
        minOccurs: "0",
        name: "WL5G3N1:Name",
        type: "WL5G3N2:NameType",
        "xsd:annotation": {
          "xsd:documentation": "Descriptive Name of the Account"
        },
        attribute: false,
        ns: "WL5G3N1"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    },
    Status: {
      type: "TypeStatusType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Status",
        type: "StatusType",
        "xsd:annotation": {
          "xsd:documentation": "Customer Account status"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    BillingProfileIdentification: {
      type: "TypeBillingProfileIdentificationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:BillingProfileIdentification",
        type: "BillingProfileIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Billing preferences applicable for creating bills or invoices for this Customer"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    ShippingProfileIdentification: {
      type: "TypeShippingProfileIdentificationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:ShippingProfileIdentification",
        type: "ShippingProfileIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Shipping preferences applicable for Shipping to this Customer"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    SellingProfileIdentification: {
      type: "TypeSellingProfileIdentificationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:SellingProfileIdentification",
        type: "SellingProfileIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Selling preferences applicable for Selling to or creating Sales Order for this customer"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    PaymentProfileIdentification: {
      type: "TypePaymentProfileIdentificationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:PaymentProfileIdentification",
        type: "PaymentProfileIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Payment preferences that this customer uses to make payments to the deploying company"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    CreditProfileIdentification: {
      type: "TypeCreditProfileIdentificationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:CreditProfileIdentification",
        type: "CreditProfileIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Credit preferences and classifications including credit limit , credit risk etc. for this Customer"
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
    ParentCustomerPartyAccountIdentification: {
      type: "TypeCustomerPartyAccountIdentificationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:ParentCustomerPartyAccountIdentification",
        type: "CustomerPartyAccountIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Parent of this Customer Party Account  in the Account  hierarchy"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    CustomerPartyAccountSite: {
      type: "TypeCustomerPartyAccountSiteType",
      wsdlDefinition: {
        maxOccurs: "unbounded",
        minOccurs: "0",
        name: "WL5G3N1:CustomerPartyAccountSite",
        type: "CustomerPartyAccountSiteType",
        "xsd:annotation": {
          "xsd:documentation": "Sites where this Customer Party does business"
        },
        attribute: false,
        ns: "WL5G3N1"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    },
    CustomerPartyAccountContact: {
      type: "TypeCustomerPartyAccountContactType",
      wsdlDefinition: {
        maxOccurs: "unbounded",
        minOccurs: "0",
        name: "WL5G3N1:CustomerPartyAccountContact",
        type: "CustomerPartyAccountContactType",
        "xsd:annotation": {
          "xsd:documentation": "Contact persons on behalf of this customer Party"
        },
        attribute: false,
        ns: "WL5G3N1"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    },
    RelatedCustomerPartyAccount: {
      type: "TypeRelatedCustomerPartyAccountType",
      wsdlDefinition: {
        maxOccurs: "unbounded",
        minOccurs: "0",
        name: "WL5G3N1:RelatedCustomerPartyAccount",
        type: "RelatedCustomerPartyAccountType",
        "xsd:annotation": {
          "xsd:documentation": "Other Customer Party accounts that are related to this Customer Party account and hence can act as proxy for this Customer Party account."
        },
        attribute: false,
        ns: "WL5G3N1"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    },
    CustomerPartyAccountUsage: {
      type: "TypeCustomerPartyAccountUsageType",
      wsdlDefinition: {
        maxOccurs: "unbounded",
        minOccurs: "0",
        name: "WL5G3N1:CustomerPartyAccountUsage",
        type: "CustomerPartyAccountUsageType",
        "xsd:annotation": {
          "xsd:documentation": "Usages or Roles that this Customer Party can be assigned. Some example values are: ShipTo, BillTo, Broker, SoldTo etc."
        },
        attribute: false,
        ns: "WL5G3N1"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    },
    CustomerPartyAccountAttachment: {
      type: "TypeCustomerPartyAccountAttachmentType",
      wsdlDefinition: {
        maxOccurs: "unbounded",
        minOccurs: "0",
        name: "WL5G3N1:CustomerPartyAccountAttachment",
        type: "CustomerPartyAccountAttachmentType",
        "xsd:annotation": {
          "xsd:documentation": "Attachment"
        },
        attribute: false,
        ns: "WL5G3N1"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    },
    AccountBalanceSummary: {
      type: "TypeAccountBalanceSummaryType",
      wsdlDefinition: {
        maxOccurs: "unbounded",
        minOccurs: "0",
        name: "WL5G3N1:AccountBalanceSummary",
        type: "AccountBalanceSummaryType",
        "xsd:annotation": {
          "xsd:documentation": "Capture Account Balance Information for the CustomerPartyAccount."
        },
        attribute: false,
        ns: "WL5G3N1"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    },
    CustomerPartyOverdueCollectionRule: {
      type: "TypeCustomerPartyOverdueCollectionRuleType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N1:CustomerPartyOverdueCollectionRule",
        type: "CustomerPartyOverdueCollectionRuleType",
        "xsd:annotation": {
          "xsd:documentation": "This is a business reference component for the OverdueCollectionRuleReference. It represents the Overdue Collection Rule which controls how the account 's debt is compared against collection criteria to determine if an overdue process should be started and which specific overdue process is applicable to this account."
        },
        attribute: false,
        ns: "WL5G3N1"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Custom: {
      type: "TypeCustomCustomerPartyAccountType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N1:Custom",
        type: "corecustomerpartycust:CustomCustomerPartyAccountType",
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
          "xsd:documentation": "Customer Account unique identifier"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    CreationDateTime: {
      type: "TypeDateTimeType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N1:CreationDateTime",
        type: "WL5G3N2:DateTimeType",
        "xsd:annotation": {
          "xsd:documentation": "Date when the customer account was originally established"
        },
        attribute: false,
        ns: "WL5G3N1"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    CoterminateDateTime: {
      type: "TypeDateTimeType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N1:CoterminateDateTime",
        type: "WL5G3N2:DateTimeType",
        "xsd:annotation": {
          "xsd:documentation": "Identifies the date when services ordered by the customer will end."
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
          "xsd:documentation": "Default Billing Currency for this Customer Account"
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
          "xsd:documentation": "Classifications that this Customer Party Account has been classified into."
        },
        attribute: false,
        ns: "WL5G3N1"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Name: {
      type: "TypeNameType",
      wsdlDefinition: {
        maxOccurs: "unbounded",
        minOccurs: "0",
        name: "WL5G3N1:Name",
        type: "WL5G3N2:NameType",
        "xsd:annotation": {
          "xsd:documentation": "Descriptive Name of the Account"
        },
        attribute: false,
        ns: "WL5G3N1"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    },
    Status: {
      type: "TypeStatusType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Status",
        type: "StatusType",
        "xsd:annotation": {
          "xsd:documentation": "Customer Account status"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    BillingProfileIdentification: {
      type: "TypeBillingProfileIdentificationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:BillingProfileIdentification",
        type: "BillingProfileIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Billing preferences applicable for creating bills or invoices for this Customer"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    ShippingProfileIdentification: {
      type: "TypeShippingProfileIdentificationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:ShippingProfileIdentification",
        type: "ShippingProfileIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Shipping preferences applicable for Shipping to this Customer"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    SellingProfileIdentification: {
      type: "TypeSellingProfileIdentificationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:SellingProfileIdentification",
        type: "SellingProfileIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Selling preferences applicable for Selling to or creating Sales Order for this customer"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    PaymentProfileIdentification: {
      type: "TypePaymentProfileIdentificationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:PaymentProfileIdentification",
        type: "PaymentProfileIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Payment preferences that this customer uses to make payments to the deploying company"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    CreditProfileIdentification: {
      type: "TypeCreditProfileIdentificationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:CreditProfileIdentification",
        type: "CreditProfileIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Credit preferences and classifications including credit limit , credit risk etc. for this Customer"
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
    ParentCustomerPartyAccountIdentification: {
      type: "TypeCustomerPartyAccountIdentificationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:ParentCustomerPartyAccountIdentification",
        type: "CustomerPartyAccountIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Parent of this Customer Party Account  in the Account  hierarchy"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    CustomerPartyAccountSite: {
      type: "TypeCustomerPartyAccountSiteType",
      wsdlDefinition: {
        maxOccurs: "unbounded",
        minOccurs: "0",
        name: "WL5G3N1:CustomerPartyAccountSite",
        type: "CustomerPartyAccountSiteType",
        "xsd:annotation": {
          "xsd:documentation": "Sites where this Customer Party does business"
        },
        attribute: false,
        ns: "WL5G3N1"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    },
    CustomerPartyAccountContact: {
      type: "TypeCustomerPartyAccountContactType",
      wsdlDefinition: {
        maxOccurs: "unbounded",
        minOccurs: "0",
        name: "WL5G3N1:CustomerPartyAccountContact",
        type: "CustomerPartyAccountContactType",
        "xsd:annotation": {
          "xsd:documentation": "Contact persons on behalf of this customer Party"
        },
        attribute: false,
        ns: "WL5G3N1"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    },
    RelatedCustomerPartyAccount: {
      type: "TypeRelatedCustomerPartyAccountType",
      wsdlDefinition: {
        maxOccurs: "unbounded",
        minOccurs: "0",
        name: "WL5G3N1:RelatedCustomerPartyAccount",
        type: "RelatedCustomerPartyAccountType",
        "xsd:annotation": {
          "xsd:documentation": "Other Customer Party accounts that are related to this Customer Party account and hence can act as proxy for this Customer Party account."
        },
        attribute: false,
        ns: "WL5G3N1"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    },
    CustomerPartyAccountUsage: {
      type: "TypeCustomerPartyAccountUsageType",
      wsdlDefinition: {
        maxOccurs: "unbounded",
        minOccurs: "0",
        name: "WL5G3N1:CustomerPartyAccountUsage",
        type: "CustomerPartyAccountUsageType",
        "xsd:annotation": {
          "xsd:documentation": "Usages or Roles that this Customer Party can be assigned. Some example values are: ShipTo, BillTo, Broker, SoldTo etc."
        },
        attribute: false,
        ns: "WL5G3N1"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    },
    CustomerPartyAccountAttachment: {
      type: "TypeCustomerPartyAccountAttachmentType",
      wsdlDefinition: {
        maxOccurs: "unbounded",
        minOccurs: "0",
        name: "WL5G3N1:CustomerPartyAccountAttachment",
        type: "CustomerPartyAccountAttachmentType",
        "xsd:annotation": {
          "xsd:documentation": "Attachment"
        },
        attribute: false,
        ns: "WL5G3N1"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    },
    AccountBalanceSummary: {
      type: "TypeAccountBalanceSummaryType",
      wsdlDefinition: {
        maxOccurs: "unbounded",
        minOccurs: "0",
        name: "WL5G3N1:AccountBalanceSummary",
        type: "AccountBalanceSummaryType",
        "xsd:annotation": {
          "xsd:documentation": "Capture Account Balance Information for the CustomerPartyAccount."
        },
        attribute: false,
        ns: "WL5G3N1"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    },
    CustomerPartyOverdueCollectionRule: {
      type: "TypeCustomerPartyOverdueCollectionRuleType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N1:CustomerPartyOverdueCollectionRule",
        type: "CustomerPartyOverdueCollectionRuleType",
        "xsd:annotation": {
          "xsd:documentation": "This is a business reference component for the OverdueCollectionRuleReference. It represents the Overdue Collection Rule which controls how the account 's debt is compared against collection criteria to determine if an overdue process should be started and which specific overdue process is applicable to this account."
        },
        attribute: false,
        ns: "WL5G3N1"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Custom: {
      type: "TypeCustomCustomerPartyAccountType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N1:Custom",
        type: "corecustomerpartycust:CustomCustomerPartyAccountType",
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

module.exports = TypeCustomerPartyAccountType;
Modeler.register(TypeCustomerPartyAccountType, "TypeCustomerPartyAccountType");
