var Modeler = require("../Modeler.js");
var className = 'TypeFinancialTransactionScheduleType';

var TypeFinancialTransactionScheduleType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  FinancialTransactionScheduleID: {
      type: "TypeIdentifierType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:FinancialTransactionScheduleID",
        type: "IdentifierType",
        "xsd:annotation": {
          "xsd:documentation": "Unique identifier of a financial transaction schedule"
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
          "xsd:documentation": "Description of the financial transaction schedule"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    },
    TypeCode: {
      type: "TypeCodeType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:TypeCode",
        type: "CodeType",
        "xsd:annotation": {
          "xsd:documentation": "This attribute represents the type of the financial transaction schedule. Example values are Standing Instruction (SI) or Payment and collections Instructions (PC) etc."
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    ComponentTypeCode: {
      type: "TypeCodeType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:ComponentTypeCode",
        type: "CodeType",
        "xsd:annotation": {
          "xsd:documentation": "Indicates the component which is part of the transaciton schedule. E.g. Principal, Interest etc."
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
          "xsd:documentation": "This is the status of the instruction. Examples: Approved, In Progress, Complete etc."
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    NextTransactionDate: {
      type: "TypeDateType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:NextTransactionDate",
        type: "DateType",
        "xsd:annotation": {
          "xsd:documentation": "The next date on which the instruction will be executed."
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    RemainingScheduledTransactionCount: {
      type: "TypeNonNegativeIntegerType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:RemainingScheduledTransactionCount",
        type: "NonNegativeIntegerType",
        "xsd:annotation": {
          "xsd:documentation": "This indicates the total number of instructions /scheduled transactions remaining."
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    EffectiveTimePeriod: {
      type: "TypeTimePeriodType",
      wsdlDefinition: {
        maxOccurs: "unbounded",
        minOccurs: "0",
        name: "WL5G3N2:EffectiveTimePeriod",
        type: "TimePeriodType",
        "xsd:annotation": {
          "xsd:documentation": "The standing instructions start date and end date."
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    },
    FinancialTransactionScheduleLine: {
      type: "TypeFinancialTransactionScheduleLineType",
      wsdlDefinition: {
        maxOccurs: "unbounded",
        minOccurs: "0",
        name: "WL5G3N2:FinancialTransactionScheduleLine",
        type: "FinancialTransactionScheduleLineType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    },
    Custom: {
      type: "TypeCustomFinancialTransactionScheduleType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Custom",
        type: "corecomcust:CustomFinancialTransactionScheduleType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    FrequencyUnitCode: {
      type: "TypeCodeType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:FrequencyUnitCode",
        type: "CodeType",
        "xsd:annotation": {
          "xsd:documentation": "This is the unit of frequency of the schedule.. For Example: Day, Week, Fortnight, Month"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    FrequencyValue: {
      type: "TypePositiveIntegerType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:FrequencyValue",
        type: "PositiveIntegerType",
        "xsd:annotation": {
          "xsd:documentation": "This is the count of the units from the start of the schedule or from the last transaction date of the schedule."
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    CycleDayIncrement: {
      type: "TypeNonNegativeIntegerType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:CycleDayIncrement",
        type: "NonNegativeIntegerType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    CycleMonthIncrement: {
      type: "TypeNonNegativeIntegerType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:CycleMonthIncrement",
        type: "NonNegativeIntegerType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    CycleYearIncrement: {
      type: "TypeNonNegativeIntegerType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:CycleYearIncrement",
        type: "NonNegativeIntegerType",
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
	  FinancialTransactionScheduleID: {
      type: "TypeIdentifierType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:FinancialTransactionScheduleID",
        type: "IdentifierType",
        "xsd:annotation": {
          "xsd:documentation": "Unique identifier of a financial transaction schedule"
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
          "xsd:documentation": "Description of the financial transaction schedule"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    },
    TypeCode: {
      type: "TypeCodeType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:TypeCode",
        type: "CodeType",
        "xsd:annotation": {
          "xsd:documentation": "This attribute represents the type of the financial transaction schedule. Example values are Standing Instruction (SI) or Payment and collections Instructions (PC) etc."
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    ComponentTypeCode: {
      type: "TypeCodeType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:ComponentTypeCode",
        type: "CodeType",
        "xsd:annotation": {
          "xsd:documentation": "Indicates the component which is part of the transaciton schedule. E.g. Principal, Interest etc."
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
          "xsd:documentation": "This is the status of the instruction. Examples: Approved, In Progress, Complete etc."
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    NextTransactionDate: {
      type: "TypeDateType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:NextTransactionDate",
        type: "DateType",
        "xsd:annotation": {
          "xsd:documentation": "The next date on which the instruction will be executed."
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    RemainingScheduledTransactionCount: {
      type: "TypeNonNegativeIntegerType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:RemainingScheduledTransactionCount",
        type: "NonNegativeIntegerType",
        "xsd:annotation": {
          "xsd:documentation": "This indicates the total number of instructions /scheduled transactions remaining."
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    EffectiveTimePeriod: {
      type: "TypeTimePeriodType",
      wsdlDefinition: {
        maxOccurs: "unbounded",
        minOccurs: "0",
        name: "WL5G3N2:EffectiveTimePeriod",
        type: "TimePeriodType",
        "xsd:annotation": {
          "xsd:documentation": "The standing instructions start date and end date."
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    },
    FinancialTransactionScheduleLine: {
      type: "TypeFinancialTransactionScheduleLineType",
      wsdlDefinition: {
        maxOccurs: "unbounded",
        minOccurs: "0",
        name: "WL5G3N2:FinancialTransactionScheduleLine",
        type: "FinancialTransactionScheduleLineType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    },
    Custom: {
      type: "TypeCustomFinancialTransactionScheduleType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Custom",
        type: "corecomcust:CustomFinancialTransactionScheduleType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    FrequencyUnitCode: {
      type: "TypeCodeType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:FrequencyUnitCode",
        type: "CodeType",
        "xsd:annotation": {
          "xsd:documentation": "This is the unit of frequency of the schedule.. For Example: Day, Week, Fortnight, Month"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    FrequencyValue: {
      type: "TypePositiveIntegerType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:FrequencyValue",
        type: "PositiveIntegerType",
        "xsd:annotation": {
          "xsd:documentation": "This is the count of the units from the start of the schedule or from the last transaction date of the schedule."
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    CycleDayIncrement: {
      type: "TypeNonNegativeIntegerType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:CycleDayIncrement",
        type: "NonNegativeIntegerType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    CycleMonthIncrement: {
      type: "TypeNonNegativeIntegerType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:CycleMonthIncrement",
        type: "NonNegativeIntegerType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    CycleYearIncrement: {
      type: "TypeNonNegativeIntegerType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:CycleYearIncrement",
        type: "NonNegativeIntegerType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeFinancialTransactionScheduleType;
Modeler.register(TypeFinancialTransactionScheduleType, "TypeFinancialTransactionScheduleType");
