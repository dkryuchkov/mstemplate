var Modeler = require("../Modeler.js");
var className = 'TypeFailureRiskType';

var TypeFailureRiskType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  Score: {
      type: "TypeNumericType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Score",
        type: "NumericType",
        "xsd:annotation": {
          "xsd:documentation": "For US, the Failure Risk Class, 1 through 5. For Canada ,the Stability Score that indicates risk of business closure, 1 through 10. For Australia, the percentile failure score"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Age: {
      type: "TypePositiveIntegerType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Age",
        type: "PositiveIntegerType",
        "xsd:annotation": {
          "xsd:documentation": "Failure score age in months"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    ClassificationCode: {
      type: "TypeCodeType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:ClassificationCode",
        type: "CodeType",
        "xsd:annotation": {
          "xsd:documentation": "1 through 5 to indicate risk of financial stress for a customer account. 1 for a business with greatest risk, and 5 for a business with least risk"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    CalculationDate: {
      type: "TypeDateType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:CalculationDate",
        type: "DateType",
        "xsd:annotation": {
          "xsd:documentation": "Date that the failure score was calculated"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    ScoreRangeFailureProbabilityPercent: {
      type: "TypePercentType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:ScoreRangeFailureProbabilityPercent",
        type: "PercentType",
        "xsd:annotation": {
          "xsd:documentation": "Probability, in percentage, of failure for score range of class"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    NationalPercentile: {
      type: "TypeNumericType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:NationalPercentile",
        type: "NumericType",
        "xsd:annotation": {
          "xsd:documentation": "National percentile that reflects the relative ranking of a company among all scorable companies in the local country database"
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
          "xsd:documentation": "In Europe, code for the reason for variance between the D and B Rating and the Failure Score. In the US, code for the reason why no score was calculated, or why the score is 0"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    GlobalScore: {
      type: "TypeNumericType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:GlobalScore",
        type: "NumericType",
        "xsd:annotation": {
          "xsd:documentation": "Global score for risk of business default"
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
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    },
    Custom: {
      type: "TypeCustomFailureRiskType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Custom",
        type: "corecomcust:CustomFailureRiskType",
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
          "xsd:documentation": "For US, the Failure Risk Class, 1 through 5. For Canada ,the Stability Score that indicates risk of business closure, 1 through 10. For Australia, the percentile failure score"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Age: {
      type: "TypePositiveIntegerType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Age",
        type: "PositiveIntegerType",
        "xsd:annotation": {
          "xsd:documentation": "Failure score age in months"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    ClassificationCode: {
      type: "TypeCodeType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:ClassificationCode",
        type: "CodeType",
        "xsd:annotation": {
          "xsd:documentation": "1 through 5 to indicate risk of financial stress for a customer account. 1 for a business with greatest risk, and 5 for a business with least risk"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    CalculationDate: {
      type: "TypeDateType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:CalculationDate",
        type: "DateType",
        "xsd:annotation": {
          "xsd:documentation": "Date that the failure score was calculated"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    ScoreRangeFailureProbabilityPercent: {
      type: "TypePercentType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:ScoreRangeFailureProbabilityPercent",
        type: "PercentType",
        "xsd:annotation": {
          "xsd:documentation": "Probability, in percentage, of failure for score range of class"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    NationalPercentile: {
      type: "TypeNumericType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:NationalPercentile",
        type: "NumericType",
        "xsd:annotation": {
          "xsd:documentation": "National percentile that reflects the relative ranking of a company among all scorable companies in the local country database"
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
          "xsd:documentation": "In Europe, code for the reason for variance between the D and B Rating and the Failure Score. In the US, code for the reason why no score was calculated, or why the score is 0"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    GlobalScore: {
      type: "TypeNumericType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:GlobalScore",
        type: "NumericType",
        "xsd:annotation": {
          "xsd:documentation": "Global score for risk of business default"
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
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    },
    Custom: {
      type: "TypeCustomFailureRiskType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Custom",
        type: "corecomcust:CustomFailureRiskType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeFailureRiskType;
Modeler.register(TypeFailureRiskType, "TypeFailureRiskType");
