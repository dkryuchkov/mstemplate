var Modeler = require("../Modeler.js");
var className = 'TypeCurrencyExchangeType';

var TypeCurrencyExchangeType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  SourceCurrencyCode: {
      type: "TypeCodeType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:SourceCurrencyCode",
        type: "CodeType",
        "xsd:annotation": {
          "xsd:documentation": "The code specifying the source currency of a currency conversion"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    SourceUnitBase: {
      type: "TypeNumericType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:SourceUnitBase",
        type: "NumericType",
        "xsd:annotation": {
          "xsd:documentation": "The numeric unit basis of the source currency used in the currency exchange rate calculation"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    TargetCurrencyCode: {
      type: "TypeCodeType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:TargetCurrencyCode",
        type: "CodeType",
        "xsd:annotation": {
          "xsd:documentation": "The code specifying the target currency of a currency conversion"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    TargetUnitBase: {
      type: "TypeNumericType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:TargetUnitBase",
        type: "NumericType",
        "xsd:annotation": {
          "xsd:documentation": "The numeric unit basis of the target currency used in the currency exchange rate calculation"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    ConversionRate: {
      type: "TypeRateType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:ConversionRate",
        type: "RateType",
        "xsd:annotation": {
          "xsd:documentation": "The rate factor used for conversion from the source currency to the target currency"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    RoundingFactor: {
      type: "TypeNumericType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:RoundingFactor",
        type: "NumericType",
        "xsd:annotation": {
          "xsd:documentation": "Rounding Factor used in the calculation"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    ConversionTypeCode: {
      type: "TypeCodeType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:ConversionTypeCode",
        type: "CodeType",
        "xsd:annotation": {
          "xsd:documentation": "Defines currency conversion rate types, such as Corporate or Reporting, that is used to categorize currency conversion rates. E.g., Corporate, Spot, Reporting, and user-defined rate types are used for different types of transaction"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    ConversionRateDateTime: {
      type: "TypeDateTimeType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:ConversionRateDateTime",
        type: "DateTimeType",
        "xsd:annotation": {
          "xsd:documentation": "The date, time, date time or other date time value of the conversion rate for this currency exchange"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    SourceCode: {
      type: "TypeCodeType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:SourceCode",
        type: "CodeType",
        "xsd:annotation": {
          "xsd:documentation": "Identifies the source from where this exchange rate was obtained"
        },
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
	  SourceCurrencyCode: {
      type: "TypeCodeType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:SourceCurrencyCode",
        type: "CodeType",
        "xsd:annotation": {
          "xsd:documentation": "The code specifying the source currency of a currency conversion"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    SourceUnitBase: {
      type: "TypeNumericType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:SourceUnitBase",
        type: "NumericType",
        "xsd:annotation": {
          "xsd:documentation": "The numeric unit basis of the source currency used in the currency exchange rate calculation"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    TargetCurrencyCode: {
      type: "TypeCodeType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:TargetCurrencyCode",
        type: "CodeType",
        "xsd:annotation": {
          "xsd:documentation": "The code specifying the target currency of a currency conversion"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    TargetUnitBase: {
      type: "TypeNumericType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:TargetUnitBase",
        type: "NumericType",
        "xsd:annotation": {
          "xsd:documentation": "The numeric unit basis of the target currency used in the currency exchange rate calculation"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    ConversionRate: {
      type: "TypeRateType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:ConversionRate",
        type: "RateType",
        "xsd:annotation": {
          "xsd:documentation": "The rate factor used for conversion from the source currency to the target currency"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    RoundingFactor: {
      type: "TypeNumericType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:RoundingFactor",
        type: "NumericType",
        "xsd:annotation": {
          "xsd:documentation": "Rounding Factor used in the calculation"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    ConversionTypeCode: {
      type: "TypeCodeType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:ConversionTypeCode",
        type: "CodeType",
        "xsd:annotation": {
          "xsd:documentation": "Defines currency conversion rate types, such as Corporate or Reporting, that is used to categorize currency conversion rates. E.g., Corporate, Spot, Reporting, and user-defined rate types are used for different types of transaction"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    ConversionRateDateTime: {
      type: "TypeDateTimeType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:ConversionRateDateTime",
        type: "DateTimeType",
        "xsd:annotation": {
          "xsd:documentation": "The date, time, date time or other date time value of the conversion rate for this currency exchange"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    SourceCode: {
      type: "TypeCodeType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:SourceCode",
        type: "CodeType",
        "xsd:annotation": {
          "xsd:documentation": "Identifies the source from where this exchange rate was obtained"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCurrencyExchangeType;
Modeler.register(TypeCurrencyExchangeType, "TypeCurrencyExchangeType");
