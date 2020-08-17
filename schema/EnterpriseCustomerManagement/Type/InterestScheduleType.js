var Modeler = require("../Modeler.js");
var className = 'TypeInterestScheduleType';

var TypeInterestScheduleType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  PreviousInterestReviewedDate: {
      type: "TypeDateType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:PreviousInterestReviewedDate",
        type: "DateType",
        "xsd:annotation": {
          "xsd:documentation": "The last review date on the interest rate."
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
        minOccurs: "0",
        name: "WL5G3N2:EffectiveTimePeriod",
        type: "TimePeriodType",
        "xsd:annotation": {
          "xsd:documentation": "The time period in which the interest rate is in effect."
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    InterestRate: {
      type: "TypeRateType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:InterestRate",
        type: "RateType",
        "xsd:annotation": {
          "xsd:documentation": "The Interest rate of a financial account."
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    OutstandingInterestAmount: {
      type: "TypeAmountType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:OutstandingInterestAmount",
        type: "AmountType",
        "xsd:annotation": {
          "xsd:documentation": "The interest amount due. E.g. For a saving account - Interest due to an account, for an overdraft account - interest due from an account"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Custom: {
      type: "TypeCustomInterestScheduleType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Custom",
        type: "corecomcust:CustomInterestScheduleType",
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
	  PreviousInterestReviewedDate: {
      type: "TypeDateType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:PreviousInterestReviewedDate",
        type: "DateType",
        "xsd:annotation": {
          "xsd:documentation": "The last review date on the interest rate."
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
        minOccurs: "0",
        name: "WL5G3N2:EffectiveTimePeriod",
        type: "TimePeriodType",
        "xsd:annotation": {
          "xsd:documentation": "The time period in which the interest rate is in effect."
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    InterestRate: {
      type: "TypeRateType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:InterestRate",
        type: "RateType",
        "xsd:annotation": {
          "xsd:documentation": "The Interest rate of a financial account."
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    OutstandingInterestAmount: {
      type: "TypeAmountType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:OutstandingInterestAmount",
        type: "AmountType",
        "xsd:annotation": {
          "xsd:documentation": "The interest amount due. E.g. For a saving account - Interest due to an account, for an overdraft account - interest due from an account"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Custom: {
      type: "TypeCustomInterestScheduleType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Custom",
        type: "corecomcust:CustomInterestScheduleType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeInterestScheduleType;
Modeler.register(TypeInterestScheduleType, "TypeInterestScheduleType");
