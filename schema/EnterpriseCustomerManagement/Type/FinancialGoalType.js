var Modeler = require("../Modeler.js");
var className = 'TypeFinancialGoalType';

var TypeFinancialGoalType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  TypeCode: {
      type: "TypeCodeType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:TypeCode",
        type: "CodeType",
        "xsd:annotation": {
          "xsd:documentation": "The type of the goal, for example House, Car, Education, Tour, Marriage."
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Description: {
      type: "TypeTextType",
      wsdlDefinition: {
        maxOccurs: "unbounded",
        minOccurs: "0",
        name: "WL5G3N2:Description",
        type: "TextType",
        "xsd:annotation": {
          "xsd:documentation": "Description of the goal"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    },
    PlannedFinancedIndicator: {
      type: "TypeIndicatorType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:PlannedFinancedIndicator",
        type: "IndicatorType",
        "xsd:annotation": {
          "xsd:documentation": "Indicate whether the goal is planned to be achieved via financed."
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Amount: {
      type: "TypeAmountType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Amount",
        type: "AmountType",
        "xsd:annotation": {
          "xsd:documentation": "The monetary value of this goal. The actual amount may be different if financed."
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    TimePeriod: {
      type: "TypeTimePeriodType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:TimePeriod",
        type: "TimePeriodType",
        "xsd:annotation": {
          "xsd:documentation": "Time period in which the goal is planned to be achieved. For example, buying a Ferrari within 3 years."
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Custom: {
      type: "TypeCustomFinancialGoalType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Custom",
        type: "corecomcust:CustomFinancialGoalType",
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
	  TypeCode: {
      type: "TypeCodeType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:TypeCode",
        type: "CodeType",
        "xsd:annotation": {
          "xsd:documentation": "The type of the goal, for example House, Car, Education, Tour, Marriage."
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Description: {
      type: "TypeTextType",
      wsdlDefinition: {
        maxOccurs: "unbounded",
        minOccurs: "0",
        name: "WL5G3N2:Description",
        type: "TextType",
        "xsd:annotation": {
          "xsd:documentation": "Description of the goal"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    },
    PlannedFinancedIndicator: {
      type: "TypeIndicatorType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:PlannedFinancedIndicator",
        type: "IndicatorType",
        "xsd:annotation": {
          "xsd:documentation": "Indicate whether the goal is planned to be achieved via financed."
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Amount: {
      type: "TypeAmountType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Amount",
        type: "AmountType",
        "xsd:annotation": {
          "xsd:documentation": "The monetary value of this goal. The actual amount may be different if financed."
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    TimePeriod: {
      type: "TypeTimePeriodType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:TimePeriod",
        type: "TimePeriodType",
        "xsd:annotation": {
          "xsd:documentation": "Time period in which the goal is planned to be achieved. For example, buying a Ferrari within 3 years."
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Custom: {
      type: "TypeCustomFinancialGoalType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Custom",
        type: "corecomcust:CustomFinancialGoalType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeFinancialGoalType;
Modeler.register(TypeFinancialGoalType, "TypeFinancialGoalType");
