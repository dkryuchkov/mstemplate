var Modeler = require("../Modeler.js");
var className = 'TypeCustomerPartyFinancialAccountType';

var TypeCustomerPartyFinancialAccountType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  Identification: {
      type: "TypeIdentificationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Identification",
        type: "IdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Unique Identification"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    MaturityDate: {
      type: "TypeDateType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N1:MaturityDate",
        type: "WL5G3N2:DateType",
        "xsd:annotation": {
          "xsd:documentation": "Indicates the maturity date of a financial account."
        },
        attribute: false,
        ns: "WL5G3N1"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    TenureDuration: {
      type: "TypeDurationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N1:TenureDuration",
        type: "WL5G3N2:DurationType",
        "xsd:annotation": {
          "xsd:documentation": "Indicates the remaining term of a financial account"
        },
        attribute: false,
        ns: "WL5G3N1"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    FinancialAccount: {
      type: "TypeFinancialAccountType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:FinancialAccount",
        type: "FinancialAccountType",
        "xsd:annotation": {
          "xsd:documentation": "Details about the financial accounts of a person or organization"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    InterestSchedule: {
      type: "TypeInterestScheduleType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:InterestSchedule",
        type: "InterestScheduleType",
        "xsd:annotation": {
          "xsd:documentation": "Debit  or Credit  interest  of a  financial account.",
          "xsd:appinfo": {
            "ebocontext:DerivedBusinessContext": {
              "ebocontext:BusinessContext": "BankingAndWealthManagement",
              "ebocontext:DerivationTypeCode": "Extension"
            }
          }
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Preference: {
      type: "TypePreferenceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Preference",
        type: "PreferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Indicates this account is a preferred account."
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    CustomerPartyFinancialAccountBalance: {
      type: "TypeCustomerPartyFinancialAccountBalanceType",
      wsdlDefinition: {
        maxOccurs: "unbounded",
        minOccurs: "0",
        name: "WL5G3N1:CustomerPartyFinancialAccountBalance",
        type: "CustomerPartyFinancialAccountBalanceType",
        "xsd:annotation": {
          "xsd:documentation": "Indicates the different types of balances in the financial accounts."
        },
        attribute: false,
        ns: "WL5G3N1"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    },
    Custom: {
      type: "TypeCustomCustomerPartyFinancialAccountType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N1:Custom",
        type: "corecustomerpartycust:CustomCustomerPartyFinancialAccountType",
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
          "xsd:documentation": "Unique Identification"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    MaturityDate: {
      type: "TypeDateType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N1:MaturityDate",
        type: "WL5G3N2:DateType",
        "xsd:annotation": {
          "xsd:documentation": "Indicates the maturity date of a financial account."
        },
        attribute: false,
        ns: "WL5G3N1"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    TenureDuration: {
      type: "TypeDurationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N1:TenureDuration",
        type: "WL5G3N2:DurationType",
        "xsd:annotation": {
          "xsd:documentation": "Indicates the remaining term of a financial account"
        },
        attribute: false,
        ns: "WL5G3N1"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    FinancialAccount: {
      type: "TypeFinancialAccountType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:FinancialAccount",
        type: "FinancialAccountType",
        "xsd:annotation": {
          "xsd:documentation": "Details about the financial accounts of a person or organization"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    InterestSchedule: {
      type: "TypeInterestScheduleType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:InterestSchedule",
        type: "InterestScheduleType",
        "xsd:annotation": {
          "xsd:documentation": "Debit  or Credit  interest  of a  financial account.",
          "xsd:appinfo": {
            "ebocontext:DerivedBusinessContext": {
              "ebocontext:BusinessContext": "BankingAndWealthManagement",
              "ebocontext:DerivationTypeCode": "Extension"
            }
          }
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Preference: {
      type: "TypePreferenceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Preference",
        type: "PreferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Indicates this account is a preferred account."
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    CustomerPartyFinancialAccountBalance: {
      type: "TypeCustomerPartyFinancialAccountBalanceType",
      wsdlDefinition: {
        maxOccurs: "unbounded",
        minOccurs: "0",
        name: "WL5G3N1:CustomerPartyFinancialAccountBalance",
        type: "CustomerPartyFinancialAccountBalanceType",
        "xsd:annotation": {
          "xsd:documentation": "Indicates the different types of balances in the financial accounts."
        },
        attribute: false,
        ns: "WL5G3N1"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    },
    Custom: {
      type: "TypeCustomCustomerPartyFinancialAccountType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N1:Custom",
        type: "corecustomerpartycust:CustomCustomerPartyFinancialAccountType",
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

module.exports = TypeCustomerPartyFinancialAccountType;
Modeler.register(TypeCustomerPartyFinancialAccountType, "TypeCustomerPartyFinancialAccountType");
