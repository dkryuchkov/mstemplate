var Modeler = require("../Modeler.js");
var className = 'TypeUpdateCustomerPartyListResponseType';

var TypeUpdateCustomerPartyListResponseType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  Identification: {
      type: "TypeIdentificationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Identification",
        type: "IdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Unique identification"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    PartyLocation: {
      type: "TypePartyLocationType",
      wsdlDefinition: {
        maxOccurs: "unbounded",
        minOccurs: "0",
        name: "WL5G3N2:PartyLocation",
        type: "PartyLocationType",
        "xsd:annotation": {
          "xsd:documentation": "Locations of the Party"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    },
    PartyContact: {
      type: "TypePartyContactType",
      wsdlDefinition: {
        maxOccurs: "unbounded",
        minOccurs: "0",
        name: "WL5G3N2:PartyContact",
        type: "PartyContactType",
        "xsd:annotation": {
          "xsd:documentation": "Contacts of the Party"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    },
    PartyRelatedParty: {
      type: "TypePartyRelatedPartyType",
      wsdlDefinition: {
        maxOccurs: "unbounded",
        minOccurs: "0",
        name: "WL5G3N2:PartyRelatedParty",
        type: "PartyRelatedPartyType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    },
    Person: {
      type: "TypePersonType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Person",
        type: "PersonType",
        "xsd:annotation": {
          "xsd:documentation": "An individual"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Organization: {
      type: "TypeOrganizationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Organization",
        type: "OrganizationType",
        "xsd:annotation": {
          "xsd:documentation": "An organization"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    LevelCode: {
      type: "TypeCodeType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N1:LevelCode",
        type: "WL5G3N2:CodeType",
        "xsd:annotation": {
          "xsd:documentation": "New customer, prospect, regular,  short term and temporary"
        },
        attribute: false,
        ns: "WL5G3N1"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    TypeCode: {
      type: "TypeCodeType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N1:TypeCode",
        type: "WL5G3N2:CodeType",
        "xsd:annotation": {
          "xsd:documentation": "Type of Customer Account. Some examples are Internal customers, Revenue generating external customers etc."
        },
        attribute: false,
        ns: "WL5G3N1"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    TaxCode: {
      type: "TypeCodeType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N1:TaxCode",
        type: "WL5G3N2:CodeType",
        "xsd:annotation": {
          "xsd:documentation": "Tax Rate or Tax Classification Code that the Customer"
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
          "xsd:documentation": "Classifications that this Customer Party has been classified into. For example : SIC Code"
        },
        attribute: false,
        ns: "WL5G3N1"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    PotentialRevenueAmount: {
      type: "TypeAmountType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N1:PotentialRevenueAmount",
        type: "WL5G3N2:AmountType",
        "xsd:annotation": {
          "xsd:documentation": "Monetary value of the customer to the deploying company over the life of the customer's account with the deploying company"
        },
        attribute: false,
        ns: "WL5G3N1"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    SpeciallyDesignatedNationalIndicator: {
      type: "TypeIndicatorType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N1:SpeciallyDesignatedNationalIndicator",
        type: "WL5G3N2:IndicatorType",
        "xsd:annotation": {
          "xsd:documentation": "Specially Designated Nationals and Blocked Persons (SDNs) are individuals and entities located throughout the world that are blocked pursuant to the various sanctions programs administered by OFAC. SDNs can be front companies, parastatal entities, or individuals determined to be owned or controlled by, or acting for or on behalf of, targeted countries or groups. They also can be specially identified individuals such as terrorists or narcotics traffickers. U.S. persons are prohibited from engaging in any transactions with SDNs and must block any property in their possession or under their control in which an SDN has an interest. Indicates whether the customer is an SDN."
        },
        attribute: false,
        ns: "WL5G3N1"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    ResidentIndicator: {
      type: "TypeIndicatorType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N1:ResidentIndicator",
        type: "WL5G3N2:IndicatorType",
        "xsd:annotation": {
          "xsd:documentation": "Indicates whether the customer is considered to be resident.  Depending on the context of use, this supports one application containing the logic to determine residency based on a set of rules and sharing that determination with other applications in context through the CustomerParty EBO"
        },
        attribute: false,
        ns: "WL5G3N1"
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
    Status: {
      type: "TypeStatusType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Status",
        type: "StatusType",
        "xsd:annotation": {
          "xsd:documentation": "Status of the customer party (e.g., Active, Inactive etc.)"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    ParentCustomerPartyReference: {
      type: "TypeCustomerPartyReferenceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:ParentCustomerPartyReference",
        type: "CustomerPartyReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "ParentCustomerParty"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    CustomerPartyAccount: {
      type: "TypeCustomerPartyAccountType",
      wsdlDefinition: {
        maxOccurs: "unbounded",
        minOccurs: "0",
        name: "WL5G3N1:CustomerPartyAccount",
        type: "CustomerPartyAccountType",
        "xsd:annotation": {
          "xsd:documentation": "Financial arrangement that a person or organization has with deploying company to buy products and services e.g. John's buying account at Amazon, Dell's buying account at Oracle"
        },
        attribute: false,
        ns: "WL5G3N1"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    },
    CustomerPartyBillingProfile: {
      type: "TypeCustomerPartyBillingProfileType",
      wsdlDefinition: {
        maxOccurs: "unbounded",
        minOccurs: "0",
        name: "WL5G3N1:CustomerPartyBillingProfile",
        type: "CustomerPartyBillingProfileType",
        "xsd:annotation": {
          "xsd:documentation": "Options for billing the customer OR creating invoice"
        },
        attribute: false,
        ns: "WL5G3N1"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    },
    CustomerPartyShippingProfile: {
      type: "TypeCustomerPartyShippingProfileType",
      wsdlDefinition: {
        maxOccurs: "unbounded",
        minOccurs: "0",
        name: "WL5G3N1:CustomerPartyShippingProfile",
        type: "CustomerPartyShippingProfileType",
        "xsd:annotation": {
          "xsd:documentation": "Options for shipping to the customer"
        },
        attribute: false,
        ns: "WL5G3N1"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    },
    CustomerPartyPaymentProfile: {
      type: "TypeCustomerPartyPaymentProfileType",
      wsdlDefinition: {
        maxOccurs: "unbounded",
        minOccurs: "0",
        name: "WL5G3N1:CustomerPartyPaymentProfile",
        type: "CustomerPartyPaymentProfileType",
        "xsd:annotation": {
          "xsd:documentation": "Options for receiving payments from this customer Party"
        },
        attribute: false,
        ns: "WL5G3N1"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    },
    CustomerPartyCreditProfile: {
      type: "TypeCustomerPartyCreditProfileType",
      wsdlDefinition: {
        maxOccurs: "unbounded",
        minOccurs: "0",
        name: "WL5G3N1:CustomerPartyCreditProfile",
        type: "CustomerPartyCreditProfileType",
        "xsd:annotation": {
          "xsd:documentation": "Credit Profile of the Customer"
        },
        attribute: false,
        ns: "WL5G3N1"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    },
    CustomerPartySellingProfile: {
      type: "TypeCustomerPartySellingProfileType",
      wsdlDefinition: {
        maxOccurs: "unbounded",
        minOccurs: "0",
        name: "WL5G3N1:CustomerPartySellingProfile",
        type: "CustomerPartySellingProfileType",
        "xsd:annotation": {
          "xsd:documentation": "Options for Sales Order creation"
        },
        attribute: false,
        ns: "WL5G3N1"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    },
    CustomerPartySupportTeam: {
      type: "TypeCustomerPartySupportTeamType",
      wsdlDefinition: {
        maxOccurs: "unbounded",
        minOccurs: "0",
        name: "WL5G3N1:CustomerPartySupportTeam",
        type: "CustomerPartySupportTeamType",
        "xsd:annotation": {
          "xsd:documentation": "Support Team assigned to the Customer"
        },
        attribute: false,
        ns: "WL5G3N1"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    },
    CustomerPartyShippingExceptionConfiguration: {
      type: "TypeCustomerPartyShippingExceptionConfigurationType",
      wsdlDefinition: {
        maxOccurs: "unbounded",
        minOccurs: "0",
        name: "WL5G3N1:CustomerPartyShippingExceptionConfiguration",
        type: "CustomerPartyShippingExceptionConfigurationType",
        "xsd:annotation": {
          "xsd:documentation": "Shipping Exception to this customer party by days of week or by a block of days"
        },
        attribute: false,
        ns: "WL5G3N1"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    },
    CustomerPartyBankAccount: {
      type: "TypeCustomerPartyBankAccountType",
      wsdlDefinition: {
        maxOccurs: "unbounded",
        minOccurs: "0",
        name: "WL5G3N1:CustomerPartyBankAccount",
        type: "CustomerPartyBankAccountType",
        "xsd:annotation": {
          "xsd:documentation": "Bank Accounts owned by this Customer Account"
        },
        attribute: false,
        ns: "WL5G3N1"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    },
    CustomerPartyTaxExemption: {
      type: "TypeCustomerPartyTaxExemptionType",
      wsdlDefinition: {
        maxOccurs: "unbounded",
        minOccurs: "0",
        name: "WL5G3N1:CustomerPartyTaxExemption",
        type: "CustomerPartyTaxExemptionType",
        "xsd:annotation": {
          "xsd:documentation": "Tax Exemptions that this Customer Party is eligible for."
        },
        attribute: false,
        ns: "WL5G3N1"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    },
    CustomerPartyAttachment: {
      type: "TypeCustomerPartyAttachmentType",
      wsdlDefinition: {
        maxOccurs: "unbounded",
        minOccurs: "0",
        name: "WL5G3N1:CustomerPartyAttachment",
        type: "CustomerPartyAttachmentType",
        "xsd:annotation": {
          "xsd:documentation": "Attachment"
        },
        attribute: false,
        ns: "WL5G3N1"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    },
    CustomerPartyPrivacyProfile: {
      type: "TypeCustomerPartyPrivacyProfileType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N1:CustomerPartyPrivacyProfile",
        type: "CustomerPartyPrivacyProfileType",
        "xsd:annotation": {
          "xsd:documentation": "Privacy related settings of the customer"
        },
        attribute: false,
        ns: "WL5G3N1"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    RelatedCustomerParty: {
      type: "TypeRelatedCustomerPartyType",
      wsdlDefinition: {
        maxOccurs: "unbounded",
        minOccurs: "0",
        name: "WL5G3N1:RelatedCustomerParty",
        type: "RelatedCustomerPartyType",
        "xsd:annotation": {
          "xsd:documentation": "Relationship between Customer Party"
        },
        attribute: false,
        ns: "WL5G3N1"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    },
    SpecialNeedProfile: {
      type: "TypeSpecialNeedProfileType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N1:SpecialNeedProfile",
        type: "SpecialNeedProfileType",
        "xsd:annotation": {
          "xsd:documentation": "Capture SpecialNeeds related to the CustomerParty."
        },
        attribute: false,
        ns: "WL5G3N1"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    CustomerPartySpecification: {
      type: "TypeCustomerPartySpecificationType",
      wsdlDefinition: {
        maxOccurs: "unbounded",
        minOccurs: "0",
        name: "WL5G3N1:CustomerPartySpecification",
        type: "CustomerPartySpecificationType",
        "xsd:annotation": {
          "xsd:documentation": "User defined attributes of the customer party"
        },
        attribute: false,
        ns: "WL5G3N1"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    },
    CustomerPartyFinancialServiceProfile: {
      type: "TypeCustomerPartyFinancialServiceProfileType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N1:CustomerPartyFinancialServiceProfile",
        type: "CustomerPartyFinancialServiceProfileType",
        "xsd:annotation": {
          "xsd:documentation": "The profile of the customer's financial service interaction details the defaults and characteristics of their relationship with the institution."
        },
        attribute: false,
        ns: "WL5G3N1"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    CustomerPartyFinancialPortfolio: {
      type: "TypeCustomerPartyFinancialPortfolioType",
      wsdlDefinition: {
        maxOccurs: "unbounded",
        minOccurs: "0",
        name: "WL5G3N1:CustomerPartyFinancialPortfolio",
        type: "CustomerPartyFinancialPortfolioType",
        "xsd:annotation": {
          "xsd:documentation": "A Financial Portfolio of a customer."
        },
        attribute: false,
        ns: "WL5G3N1"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    },
    CustomerPartyFinancialAccount: {
      type: "TypeCustomerPartyFinancialAccountType",
      wsdlDefinition: {
        maxOccurs: "unbounded",
        minOccurs: "0",
        name: "WL5G3N1:CustomerPartyFinancialAccount",
        type: "CustomerPartyFinancialAccountType",
        "xsd:annotation": {
          "xsd:documentation": "Financial Account owned by this customer"
        },
        attribute: false,
        ns: "WL5G3N1"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    },
    CustomerPartyBestVisitationTime: {
      type: "TypeCustomerPartyBestVisitationTimeType",
      wsdlDefinition: {
        maxOccurs: "unbounded",
        minOccurs: "0",
        name: "WL5G3N1:CustomerPartyBestVisitationTime",
        type: "CustomerPartyBestVisitationTimeType",
        "xsd:annotation": {
          "xsd:documentation": "Captures the customer's availability so that the sales representatives can visit them at the most suitable  times"
        },
        attribute: false,
        ns: "WL5G3N1"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    },
    Custom: {
      type: "TypeCustomCustomerPartyEBOType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N1:Custom",
        type: "corecustomerpartycust:CustomCustomerPartyEBOType",
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
    },
    undefined: {
      type: "string",
      wsdlDefinition: {
        base: "CustomerPartyEBMType",
        attribute: false,
        type: "xsd:string"
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
          "xsd:documentation": "Unique identification"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    PartyLocation: {
      type: "TypePartyLocationType",
      wsdlDefinition: {
        maxOccurs: "unbounded",
        minOccurs: "0",
        name: "WL5G3N2:PartyLocation",
        type: "PartyLocationType",
        "xsd:annotation": {
          "xsd:documentation": "Locations of the Party"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    },
    PartyContact: {
      type: "TypePartyContactType",
      wsdlDefinition: {
        maxOccurs: "unbounded",
        minOccurs: "0",
        name: "WL5G3N2:PartyContact",
        type: "PartyContactType",
        "xsd:annotation": {
          "xsd:documentation": "Contacts of the Party"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    },
    PartyRelatedParty: {
      type: "TypePartyRelatedPartyType",
      wsdlDefinition: {
        maxOccurs: "unbounded",
        minOccurs: "0",
        name: "WL5G3N2:PartyRelatedParty",
        type: "PartyRelatedPartyType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    },
    Person: {
      type: "TypePersonType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Person",
        type: "PersonType",
        "xsd:annotation": {
          "xsd:documentation": "An individual"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Organization: {
      type: "TypeOrganizationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Organization",
        type: "OrganizationType",
        "xsd:annotation": {
          "xsd:documentation": "An organization"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    LevelCode: {
      type: "TypeCodeType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N1:LevelCode",
        type: "WL5G3N2:CodeType",
        "xsd:annotation": {
          "xsd:documentation": "New customer, prospect, regular,  short term and temporary"
        },
        attribute: false,
        ns: "WL5G3N1"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    TypeCode: {
      type: "TypeCodeType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N1:TypeCode",
        type: "WL5G3N2:CodeType",
        "xsd:annotation": {
          "xsd:documentation": "Type of Customer Account. Some examples are Internal customers, Revenue generating external customers etc."
        },
        attribute: false,
        ns: "WL5G3N1"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    TaxCode: {
      type: "TypeCodeType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N1:TaxCode",
        type: "WL5G3N2:CodeType",
        "xsd:annotation": {
          "xsd:documentation": "Tax Rate or Tax Classification Code that the Customer"
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
          "xsd:documentation": "Classifications that this Customer Party has been classified into. For example : SIC Code"
        },
        attribute: false,
        ns: "WL5G3N1"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    PotentialRevenueAmount: {
      type: "TypeAmountType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N1:PotentialRevenueAmount",
        type: "WL5G3N2:AmountType",
        "xsd:annotation": {
          "xsd:documentation": "Monetary value of the customer to the deploying company over the life of the customer's account with the deploying company"
        },
        attribute: false,
        ns: "WL5G3N1"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    SpeciallyDesignatedNationalIndicator: {
      type: "TypeIndicatorType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N1:SpeciallyDesignatedNationalIndicator",
        type: "WL5G3N2:IndicatorType",
        "xsd:annotation": {
          "xsd:documentation": "Specially Designated Nationals and Blocked Persons (SDNs) are individuals and entities located throughout the world that are blocked pursuant to the various sanctions programs administered by OFAC. SDNs can be front companies, parastatal entities, or individuals determined to be owned or controlled by, or acting for or on behalf of, targeted countries or groups. They also can be specially identified individuals such as terrorists or narcotics traffickers. U.S. persons are prohibited from engaging in any transactions with SDNs and must block any property in their possession or under their control in which an SDN has an interest. Indicates whether the customer is an SDN."
        },
        attribute: false,
        ns: "WL5G3N1"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    ResidentIndicator: {
      type: "TypeIndicatorType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N1:ResidentIndicator",
        type: "WL5G3N2:IndicatorType",
        "xsd:annotation": {
          "xsd:documentation": "Indicates whether the customer is considered to be resident.  Depending on the context of use, this supports one application containing the logic to determine residency based on a set of rules and sharing that determination with other applications in context through the CustomerParty EBO"
        },
        attribute: false,
        ns: "WL5G3N1"
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
    Status: {
      type: "TypeStatusType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Status",
        type: "StatusType",
        "xsd:annotation": {
          "xsd:documentation": "Status of the customer party (e.g., Active, Inactive etc.)"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    ParentCustomerPartyReference: {
      type: "TypeCustomerPartyReferenceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:ParentCustomerPartyReference",
        type: "CustomerPartyReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "ParentCustomerParty"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    CustomerPartyAccount: {
      type: "TypeCustomerPartyAccountType",
      wsdlDefinition: {
        maxOccurs: "unbounded",
        minOccurs: "0",
        name: "WL5G3N1:CustomerPartyAccount",
        type: "CustomerPartyAccountType",
        "xsd:annotation": {
          "xsd:documentation": "Financial arrangement that a person or organization has with deploying company to buy products and services e.g. John's buying account at Amazon, Dell's buying account at Oracle"
        },
        attribute: false,
        ns: "WL5G3N1"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    },
    CustomerPartyBillingProfile: {
      type: "TypeCustomerPartyBillingProfileType",
      wsdlDefinition: {
        maxOccurs: "unbounded",
        minOccurs: "0",
        name: "WL5G3N1:CustomerPartyBillingProfile",
        type: "CustomerPartyBillingProfileType",
        "xsd:annotation": {
          "xsd:documentation": "Options for billing the customer OR creating invoice"
        },
        attribute: false,
        ns: "WL5G3N1"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    },
    CustomerPartyShippingProfile: {
      type: "TypeCustomerPartyShippingProfileType",
      wsdlDefinition: {
        maxOccurs: "unbounded",
        minOccurs: "0",
        name: "WL5G3N1:CustomerPartyShippingProfile",
        type: "CustomerPartyShippingProfileType",
        "xsd:annotation": {
          "xsd:documentation": "Options for shipping to the customer"
        },
        attribute: false,
        ns: "WL5G3N1"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    },
    CustomerPartyPaymentProfile: {
      type: "TypeCustomerPartyPaymentProfileType",
      wsdlDefinition: {
        maxOccurs: "unbounded",
        minOccurs: "0",
        name: "WL5G3N1:CustomerPartyPaymentProfile",
        type: "CustomerPartyPaymentProfileType",
        "xsd:annotation": {
          "xsd:documentation": "Options for receiving payments from this customer Party"
        },
        attribute: false,
        ns: "WL5G3N1"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    },
    CustomerPartyCreditProfile: {
      type: "TypeCustomerPartyCreditProfileType",
      wsdlDefinition: {
        maxOccurs: "unbounded",
        minOccurs: "0",
        name: "WL5G3N1:CustomerPartyCreditProfile",
        type: "CustomerPartyCreditProfileType",
        "xsd:annotation": {
          "xsd:documentation": "Credit Profile of the Customer"
        },
        attribute: false,
        ns: "WL5G3N1"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    },
    CustomerPartySellingProfile: {
      type: "TypeCustomerPartySellingProfileType",
      wsdlDefinition: {
        maxOccurs: "unbounded",
        minOccurs: "0",
        name: "WL5G3N1:CustomerPartySellingProfile",
        type: "CustomerPartySellingProfileType",
        "xsd:annotation": {
          "xsd:documentation": "Options for Sales Order creation"
        },
        attribute: false,
        ns: "WL5G3N1"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    },
    CustomerPartySupportTeam: {
      type: "TypeCustomerPartySupportTeamType",
      wsdlDefinition: {
        maxOccurs: "unbounded",
        minOccurs: "0",
        name: "WL5G3N1:CustomerPartySupportTeam",
        type: "CustomerPartySupportTeamType",
        "xsd:annotation": {
          "xsd:documentation": "Support Team assigned to the Customer"
        },
        attribute: false,
        ns: "WL5G3N1"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    },
    CustomerPartyShippingExceptionConfiguration: {
      type: "TypeCustomerPartyShippingExceptionConfigurationType",
      wsdlDefinition: {
        maxOccurs: "unbounded",
        minOccurs: "0",
        name: "WL5G3N1:CustomerPartyShippingExceptionConfiguration",
        type: "CustomerPartyShippingExceptionConfigurationType",
        "xsd:annotation": {
          "xsd:documentation": "Shipping Exception to this customer party by days of week or by a block of days"
        },
        attribute: false,
        ns: "WL5G3N1"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    },
    CustomerPartyBankAccount: {
      type: "TypeCustomerPartyBankAccountType",
      wsdlDefinition: {
        maxOccurs: "unbounded",
        minOccurs: "0",
        name: "WL5G3N1:CustomerPartyBankAccount",
        type: "CustomerPartyBankAccountType",
        "xsd:annotation": {
          "xsd:documentation": "Bank Accounts owned by this Customer Account"
        },
        attribute: false,
        ns: "WL5G3N1"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    },
    CustomerPartyTaxExemption: {
      type: "TypeCustomerPartyTaxExemptionType",
      wsdlDefinition: {
        maxOccurs: "unbounded",
        minOccurs: "0",
        name: "WL5G3N1:CustomerPartyTaxExemption",
        type: "CustomerPartyTaxExemptionType",
        "xsd:annotation": {
          "xsd:documentation": "Tax Exemptions that this Customer Party is eligible for."
        },
        attribute: false,
        ns: "WL5G3N1"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    },
    CustomerPartyAttachment: {
      type: "TypeCustomerPartyAttachmentType",
      wsdlDefinition: {
        maxOccurs: "unbounded",
        minOccurs: "0",
        name: "WL5G3N1:CustomerPartyAttachment",
        type: "CustomerPartyAttachmentType",
        "xsd:annotation": {
          "xsd:documentation": "Attachment"
        },
        attribute: false,
        ns: "WL5G3N1"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    },
    CustomerPartyPrivacyProfile: {
      type: "TypeCustomerPartyPrivacyProfileType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N1:CustomerPartyPrivacyProfile",
        type: "CustomerPartyPrivacyProfileType",
        "xsd:annotation": {
          "xsd:documentation": "Privacy related settings of the customer"
        },
        attribute: false,
        ns: "WL5G3N1"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    RelatedCustomerParty: {
      type: "TypeRelatedCustomerPartyType",
      wsdlDefinition: {
        maxOccurs: "unbounded",
        minOccurs: "0",
        name: "WL5G3N1:RelatedCustomerParty",
        type: "RelatedCustomerPartyType",
        "xsd:annotation": {
          "xsd:documentation": "Relationship between Customer Party"
        },
        attribute: false,
        ns: "WL5G3N1"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    },
    SpecialNeedProfile: {
      type: "TypeSpecialNeedProfileType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N1:SpecialNeedProfile",
        type: "SpecialNeedProfileType",
        "xsd:annotation": {
          "xsd:documentation": "Capture SpecialNeeds related to the CustomerParty."
        },
        attribute: false,
        ns: "WL5G3N1"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    CustomerPartySpecification: {
      type: "TypeCustomerPartySpecificationType",
      wsdlDefinition: {
        maxOccurs: "unbounded",
        minOccurs: "0",
        name: "WL5G3N1:CustomerPartySpecification",
        type: "CustomerPartySpecificationType",
        "xsd:annotation": {
          "xsd:documentation": "User defined attributes of the customer party"
        },
        attribute: false,
        ns: "WL5G3N1"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    },
    CustomerPartyFinancialServiceProfile: {
      type: "TypeCustomerPartyFinancialServiceProfileType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N1:CustomerPartyFinancialServiceProfile",
        type: "CustomerPartyFinancialServiceProfileType",
        "xsd:annotation": {
          "xsd:documentation": "The profile of the customer's financial service interaction details the defaults and characteristics of their relationship with the institution."
        },
        attribute: false,
        ns: "WL5G3N1"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    CustomerPartyFinancialPortfolio: {
      type: "TypeCustomerPartyFinancialPortfolioType",
      wsdlDefinition: {
        maxOccurs: "unbounded",
        minOccurs: "0",
        name: "WL5G3N1:CustomerPartyFinancialPortfolio",
        type: "CustomerPartyFinancialPortfolioType",
        "xsd:annotation": {
          "xsd:documentation": "A Financial Portfolio of a customer."
        },
        attribute: false,
        ns: "WL5G3N1"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    },
    CustomerPartyFinancialAccount: {
      type: "TypeCustomerPartyFinancialAccountType",
      wsdlDefinition: {
        maxOccurs: "unbounded",
        minOccurs: "0",
        name: "WL5G3N1:CustomerPartyFinancialAccount",
        type: "CustomerPartyFinancialAccountType",
        "xsd:annotation": {
          "xsd:documentation": "Financial Account owned by this customer"
        },
        attribute: false,
        ns: "WL5G3N1"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    },
    CustomerPartyBestVisitationTime: {
      type: "TypeCustomerPartyBestVisitationTimeType",
      wsdlDefinition: {
        maxOccurs: "unbounded",
        minOccurs: "0",
        name: "WL5G3N1:CustomerPartyBestVisitationTime",
        type: "CustomerPartyBestVisitationTimeType",
        "xsd:annotation": {
          "xsd:documentation": "Captures the customer's availability so that the sales representatives can visit them at the most suitable  times"
        },
        attribute: false,
        ns: "WL5G3N1"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    },
    Custom: {
      type: "TypeCustomCustomerPartyEBOType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N1:Custom",
        type: "corecustomerpartycust:CustomCustomerPartyEBOType",
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
    },
    undefined: {
      type: "string",
      wsdlDefinition: {
        base: "CustomerPartyEBMType",
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeUpdateCustomerPartyListResponseType;
Modeler.register(TypeUpdateCustomerPartyListResponseType, "TypeUpdateCustomerPartyListResponseType");
