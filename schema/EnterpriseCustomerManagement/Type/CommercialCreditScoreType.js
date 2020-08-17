var Modeler = require("../Modeler.js");
var className = 'TypeCommercialCreditScoreType';

var TypeCommercialCreditScoreType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  Score: {
      type: "TypeNumericType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Score",
        type: "NumericType",
        "xsd:annotation": {
          "xsd:documentation": "Indicates the risk of delinquent payments"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    ScoreExplanation: {
      type: "TypeTextType",
      wsdlDefinition: {
        maxOccurs: "unbounded",
        minOccurs: "0",
        name: "WL5G3N2:ScoreExplanation",
        type: "TextType",
        "xsd:annotation": {
          "xsd:documentation": "Explanation for the credit score"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    },
    CalculationDate: {
      type: "TypeDateType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:CalculationDate",
        type: "DateType",
        "xsd:annotation": {
          "xsd:documentation": "Provides the date when the credit score was calculated"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    ClassExplanation: {
      type: "TypeTextType",
      wsdlDefinition: {
        maxOccurs: "unbounded",
        minOccurs: "0",
        name: "WL5G3N2:ClassExplanation",
        type: "TextType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    },
    Percentile: {
      type: "TypePercentType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Percentile",
        type: "PercentType",
        "xsd:annotation": {
          "xsd:documentation": "Indicates the relative credit rating of a business compared to all businesses whose credit ratings are included in the local country database"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    MonthDuration: {
      type: "TypeMonthType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:MonthDuration",
        type: "MonthType",
        "xsd:annotation": {
          "xsd:documentation": "Indicate the age of the credit score, expressed in months"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    AverageHighCreditAmount: {
      type: "TypeAmountType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:AverageHighCreditAmount",
        type: "AmountType",
        "xsd:annotation": {
          "xsd:documentation": "Average of all of the high credit experiences"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    HighestCreditAmount: {
      type: "TypeAmountType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:HighestCreditAmount",
        type: "AmountType",
        "xsd:annotation": {
          "xsd:documentation": "Maximum credit ever extended to this organization"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    MaximumRecommendedCreditAmount: {
      type: "TypeAmountType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:MaximumRecommendedCreditAmount",
        type: "AmountType",
        "xsd:annotation": {
          "xsd:documentation": "Maximum credit limit recommended"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    TradeExperienceCount: {
      type: "TypePositiveIntegerType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:TradeExperienceCount",
        type: "PositiveIntegerType",
        "xsd:annotation": {
          "xsd:documentation": "Number of trade experiences"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    OverrideCode: {
      type: "TypeCodeType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:OverrideCode",
        type: "CodeType",
        "xsd:annotation": {
          "xsd:documentation": "In the US, indicates why no score was calculated, or why score equals zero"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    EstimatedDelinquentPaymentIncidence: {
      type: "TypeEstimatedDelinquentPaymentIncidenceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:EstimatedDelinquentPaymentIncidence",
        type: "EstimatedDelinquentPaymentIncidenceType",
        "xsd:annotation": {
          "xsd:documentation": "Delinquent Payment incidence details"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    CreditScoreCommentary: {
      type: "TypeCreditScoreCommentaryType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:CreditScoreCommentary",
        type: "CreditScoreCommentaryType",
        "xsd:annotation": {
          "xsd:documentation": "Credit score commentary details"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Custom: {
      type: "TypeCustomCommercialCreditScoreType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Custom",
        type: "corecomcust:CustomCommercialCreditScoreType",
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
	  Score: {
      type: "TypeNumericType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Score",
        type: "NumericType",
        "xsd:annotation": {
          "xsd:documentation": "Indicates the risk of delinquent payments"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    ScoreExplanation: {
      type: "TypeTextType",
      wsdlDefinition: {
        maxOccurs: "unbounded",
        minOccurs: "0",
        name: "WL5G3N2:ScoreExplanation",
        type: "TextType",
        "xsd:annotation": {
          "xsd:documentation": "Explanation for the credit score"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    },
    CalculationDate: {
      type: "TypeDateType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:CalculationDate",
        type: "DateType",
        "xsd:annotation": {
          "xsd:documentation": "Provides the date when the credit score was calculated"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    ClassExplanation: {
      type: "TypeTextType",
      wsdlDefinition: {
        maxOccurs: "unbounded",
        minOccurs: "0",
        name: "WL5G3N2:ClassExplanation",
        type: "TextType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    },
    Percentile: {
      type: "TypePercentType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Percentile",
        type: "PercentType",
        "xsd:annotation": {
          "xsd:documentation": "Indicates the relative credit rating of a business compared to all businesses whose credit ratings are included in the local country database"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    MonthDuration: {
      type: "TypeMonthType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:MonthDuration",
        type: "MonthType",
        "xsd:annotation": {
          "xsd:documentation": "Indicate the age of the credit score, expressed in months"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    AverageHighCreditAmount: {
      type: "TypeAmountType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:AverageHighCreditAmount",
        type: "AmountType",
        "xsd:annotation": {
          "xsd:documentation": "Average of all of the high credit experiences"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    HighestCreditAmount: {
      type: "TypeAmountType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:HighestCreditAmount",
        type: "AmountType",
        "xsd:annotation": {
          "xsd:documentation": "Maximum credit ever extended to this organization"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    MaximumRecommendedCreditAmount: {
      type: "TypeAmountType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:MaximumRecommendedCreditAmount",
        type: "AmountType",
        "xsd:annotation": {
          "xsd:documentation": "Maximum credit limit recommended"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    TradeExperienceCount: {
      type: "TypePositiveIntegerType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:TradeExperienceCount",
        type: "PositiveIntegerType",
        "xsd:annotation": {
          "xsd:documentation": "Number of trade experiences"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    OverrideCode: {
      type: "TypeCodeType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:OverrideCode",
        type: "CodeType",
        "xsd:annotation": {
          "xsd:documentation": "In the US, indicates why no score was calculated, or why score equals zero"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    EstimatedDelinquentPaymentIncidence: {
      type: "TypeEstimatedDelinquentPaymentIncidenceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:EstimatedDelinquentPaymentIncidence",
        type: "EstimatedDelinquentPaymentIncidenceType",
        "xsd:annotation": {
          "xsd:documentation": "Delinquent Payment incidence details"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    CreditScoreCommentary: {
      type: "TypeCreditScoreCommentaryType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:CreditScoreCommentary",
        type: "CreditScoreCommentaryType",
        "xsd:annotation": {
          "xsd:documentation": "Credit score commentary details"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Custom: {
      type: "TypeCustomCommercialCreditScoreType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Custom",
        type: "corecomcust:CustomCommercialCreditScoreType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCommercialCreditScoreType;
Modeler.register(TypeCommercialCreditScoreType, "TypeCommercialCreditScoreType");
