var Modeler = require("../Modeler.js");
var className = 'TypeCustomerPartyFinancialServiceProfileType';

var TypeCustomerPartyFinancialServiceProfileType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  PreferredCurrencyCode: {
      type: "TypeCodeType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N1:PreferredCurrencyCode",
        type: "WL5G3N2:CodeType",
        "xsd:annotation": {
          "xsd:documentation": "This field indicates the preferred currency for the Customer. Preferred currency for the customer used in Statements, reports.\nCustomer can invest in different currency. But the report will have the amounts converted to preferred currency."
        },
        attribute: false,
        ns: "WL5G3N1"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    AntiMoneyLaunderingCheckRequiredIndicator: {
      type: "TypeIndicatorType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N1:AntiMoneyLaunderingCheckRequiredIndicator",
        type: "WL5G3N2:IndicatorType",
        "xsd:annotation": {
          "xsd:documentation": "Indicates if the AML check is required or not. This will be set by the bank for the customer."
        },
        attribute: false,
        ns: "WL5G3N1"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    RelationshipPricingAllowedIndicator: {
      type: "TypeIndicatorType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N1:RelationshipPricingAllowedIndicator",
        type: "WL5G3N2:IndicatorType",
        "xsd:annotation": {
          "xsd:documentation": "The ability to offer specific pricing to the customer based on their relationship with the financial institution"
        },
        attribute: false,
        ns: "WL5G3N1"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    RelationshipManagerCustomerNetWorthVisableIndicator: {
      type: "TypeIndicatorType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N1:RelationshipManagerCustomerNetWorthVisableIndicator",
        type: "WL5G3N2:IndicatorType",
        "xsd:annotation": {
          "xsd:documentation": "This field indicates whether the relationship manager can view the networth of the customer"
        },
        attribute: false,
        ns: "WL5G3N1"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    RiskAppetiteScoreCode: {
      type: "TypeCodeType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N1:RiskAppetiteScoreCode",
        type: "WL5G3N2:CodeType",
        "xsd:annotation": {
          "xsd:documentation": "Indicates the risk appetite of the customer. For example: A risk score of 10 could mean Aggressive,  a risk score of 5 could mean conservative etc."
        },
        attribute: false,
        ns: "WL5G3N1"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    RiskScoreEffectiveDate: {
      type: "TypeDateType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N1:RiskScoreEffectiveDate",
        type: "WL5G3N2:DateType",
        "xsd:annotation": {
          "xsd:documentation": "Date that the current risk score was applied to the customers' banking profile"
        },
        attribute: false,
        ns: "WL5G3N1"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    PlannedRiskScoreReviewDate: {
      type: "TypeDateType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N1:PlannedRiskScoreReviewDate",
        type: "WL5G3N2:DateType",
        "xsd:annotation": {
          "xsd:documentation": "This field provides the date on which the customer's risk profile will be reviewed"
        },
        attribute: false,
        ns: "WL5G3N1"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    FinancialCustomerTypeCode: {
      type: "TypeCodeType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N1:FinancialCustomerTypeCode",
        type: "WL5G3N2:CodeType",
        "xsd:annotation": {
          "xsd:documentation": "The classification of the financial customer . Ex. Professional or Non-Professional or user defined value"
        },
        attribute: false,
        ns: "WL5G3N1"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    FinancialServiceAuthorityCustomerCode: {
      type: "TypeCodeType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N1:FinancialServiceAuthorityCustomerCode",
        type: "WL5G3N2:CodeType",
        "xsd:annotation": {
          "xsd:documentation": "Classification of the financial customer based on Regulatory Authority. Ex. Retail, Professional, Eligible CounterParty or User Defined Value"
        },
        attribute: false,
        ns: "WL5G3N1"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    FinancialInstitutionReference: {
      type: "TypeFinancialInstitutionReferenceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:FinancialInstitutionReference",
        type: "FinancialInstitutionReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Identifies the financial institution of the individual."
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    FinancialInstitutionBranchBusinessUnitReference: {
      type: "TypeFinancialInstitutionBranchBusinessUnitReferenceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:FinancialInstitutionBranchBusinessUnitReference",
        type: "FinancialInstitutionBranchBusinessUnitReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Identifies the financial institution's branch  of the individual"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    CustomerPartyFinancialGoal: {
      type: "TypeCustomerPartyFinancialGoalType",
      wsdlDefinition: {
        maxOccurs: "unbounded",
        minOccurs: "0",
        name: "WL5G3N1:CustomerPartyFinancialGoal",
        type: "CustomerPartyFinancialGoalType",
        attribute: false,
        ns: "WL5G3N1"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    },
    CustomerPartyInvestmentRestriction: {
      type: "TypeCustomerPartyInvestmentRestrictionType",
      wsdlDefinition: {
        maxOccurs: "unbounded",
        minOccurs: "0",
        name: "WL5G3N1:CustomerPartyInvestmentRestriction",
        type: "CustomerPartyInvestmentRestrictionType",
        "xsd:annotation": {
          "xsd:documentation": "Investment Restrictions for the Customer Party"
        },
        attribute: false,
        ns: "WL5G3N1"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    },
    Custom: {
      type: "TypeCustomCustomerPartyFinancialServiceProfileType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N1:Custom",
        type: "corecustomerpartycust:CustomCustomerPartyFinancialServiceProfileType",
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
	  PreferredCurrencyCode: {
      type: "TypeCodeType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N1:PreferredCurrencyCode",
        type: "WL5G3N2:CodeType",
        "xsd:annotation": {
          "xsd:documentation": "This field indicates the preferred currency for the Customer. Preferred currency for the customer used in Statements, reports.\nCustomer can invest in different currency. But the report will have the amounts converted to preferred currency."
        },
        attribute: false,
        ns: "WL5G3N1"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    AntiMoneyLaunderingCheckRequiredIndicator: {
      type: "TypeIndicatorType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N1:AntiMoneyLaunderingCheckRequiredIndicator",
        type: "WL5G3N2:IndicatorType",
        "xsd:annotation": {
          "xsd:documentation": "Indicates if the AML check is required or not. This will be set by the bank for the customer."
        },
        attribute: false,
        ns: "WL5G3N1"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    RelationshipPricingAllowedIndicator: {
      type: "TypeIndicatorType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N1:RelationshipPricingAllowedIndicator",
        type: "WL5G3N2:IndicatorType",
        "xsd:annotation": {
          "xsd:documentation": "The ability to offer specific pricing to the customer based on their relationship with the financial institution"
        },
        attribute: false,
        ns: "WL5G3N1"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    RelationshipManagerCustomerNetWorthVisableIndicator: {
      type: "TypeIndicatorType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N1:RelationshipManagerCustomerNetWorthVisableIndicator",
        type: "WL5G3N2:IndicatorType",
        "xsd:annotation": {
          "xsd:documentation": "This field indicates whether the relationship manager can view the networth of the customer"
        },
        attribute: false,
        ns: "WL5G3N1"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    RiskAppetiteScoreCode: {
      type: "TypeCodeType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N1:RiskAppetiteScoreCode",
        type: "WL5G3N2:CodeType",
        "xsd:annotation": {
          "xsd:documentation": "Indicates the risk appetite of the customer. For example: A risk score of 10 could mean Aggressive,  a risk score of 5 could mean conservative etc."
        },
        attribute: false,
        ns: "WL5G3N1"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    RiskScoreEffectiveDate: {
      type: "TypeDateType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N1:RiskScoreEffectiveDate",
        type: "WL5G3N2:DateType",
        "xsd:annotation": {
          "xsd:documentation": "Date that the current risk score was applied to the customers' banking profile"
        },
        attribute: false,
        ns: "WL5G3N1"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    PlannedRiskScoreReviewDate: {
      type: "TypeDateType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N1:PlannedRiskScoreReviewDate",
        type: "WL5G3N2:DateType",
        "xsd:annotation": {
          "xsd:documentation": "This field provides the date on which the customer's risk profile will be reviewed"
        },
        attribute: false,
        ns: "WL5G3N1"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    FinancialCustomerTypeCode: {
      type: "TypeCodeType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N1:FinancialCustomerTypeCode",
        type: "WL5G3N2:CodeType",
        "xsd:annotation": {
          "xsd:documentation": "The classification of the financial customer . Ex. Professional or Non-Professional or user defined value"
        },
        attribute: false,
        ns: "WL5G3N1"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    FinancialServiceAuthorityCustomerCode: {
      type: "TypeCodeType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N1:FinancialServiceAuthorityCustomerCode",
        type: "WL5G3N2:CodeType",
        "xsd:annotation": {
          "xsd:documentation": "Classification of the financial customer based on Regulatory Authority. Ex. Retail, Professional, Eligible CounterParty or User Defined Value"
        },
        attribute: false,
        ns: "WL5G3N1"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    FinancialInstitutionReference: {
      type: "TypeFinancialInstitutionReferenceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:FinancialInstitutionReference",
        type: "FinancialInstitutionReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Identifies the financial institution of the individual."
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    FinancialInstitutionBranchBusinessUnitReference: {
      type: "TypeFinancialInstitutionBranchBusinessUnitReferenceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:FinancialInstitutionBranchBusinessUnitReference",
        type: "FinancialInstitutionBranchBusinessUnitReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Identifies the financial institution's branch  of the individual"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    CustomerPartyFinancialGoal: {
      type: "TypeCustomerPartyFinancialGoalType",
      wsdlDefinition: {
        maxOccurs: "unbounded",
        minOccurs: "0",
        name: "WL5G3N1:CustomerPartyFinancialGoal",
        type: "CustomerPartyFinancialGoalType",
        attribute: false,
        ns: "WL5G3N1"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    },
    CustomerPartyInvestmentRestriction: {
      type: "TypeCustomerPartyInvestmentRestrictionType",
      wsdlDefinition: {
        maxOccurs: "unbounded",
        minOccurs: "0",
        name: "WL5G3N1:CustomerPartyInvestmentRestriction",
        type: "CustomerPartyInvestmentRestrictionType",
        "xsd:annotation": {
          "xsd:documentation": "Investment Restrictions for the Customer Party"
        },
        attribute: false,
        ns: "WL5G3N1"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    },
    Custom: {
      type: "TypeCustomCustomerPartyFinancialServiceProfileType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N1:Custom",
        type: "corecustomerpartycust:CustomCustomerPartyFinancialServiceProfileType",
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

module.exports = TypeCustomerPartyFinancialServiceProfileType;
Modeler.register(TypeCustomerPartyFinancialServiceProfileType, "TypeCustomerPartyFinancialServiceProfileType");
