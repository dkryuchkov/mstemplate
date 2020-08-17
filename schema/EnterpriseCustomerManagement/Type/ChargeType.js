var Modeler = require("../Modeler.js");
var className = 'TypeChargeType';

var TypeChargeType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  TypeCode: {
      type: "TypeCodeType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:TypeCode",
        type: "CodeType",
        "xsd:annotation": {
          "xsd:documentation": "Type of Charge"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    ChargeFrequencyCode: {
      type: "TypeCodeType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:ChargeFrequencyCode",
        type: "CodeType",
        "xsd:annotation": {
          "xsd:documentation": "Frequency of Charge. Example monthly,yearly,quarterly"
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
          "xsd:documentation": "Charge Amount in the transactional currency"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    ReasonCode: {
      type: "TypeCodeType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:ReasonCode",
        type: "CodeType",
        "xsd:annotation": {
          "xsd:documentation": "Reason for applying the charge, if any"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    CurrencyExchange: {
      type: "TypeCurrencyExchangeType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:CurrencyExchange",
        type: "CurrencyExchangeType",
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
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    PrePaidIndicator: {
      type: "TypeIndicatorType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:PrePaidIndicator",
        type: "IndicatorType",
        "xsd:annotation": {
          "xsd:documentation": "An indication of whether or not the allowance is prepaid"
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
          "xsd:documentation": "Description of the charge"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    },
    UnitListPrice: {
      type: "TypePriceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:UnitListPrice",
        type: "PriceType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    UnitSalePrice: {
      type: "TypePriceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:UnitSalePrice",
        type: "PriceType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    DiscountMethodCode: {
      type: "TypeCodeType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:DiscountMethodCode",
        type: "CodeType",
        "xsd:annotation": {
          "xsd:documentation": "The type of Discount Method. Example Amount or Percent"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    BasisAmount: {
      type: "TypeAmountType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:BasisAmount",
        type: "AmountType",
        "xsd:annotation": {
          "xsd:documentation": "The amount on which the charge is calculated. This may be different from the line amount"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    BasisQuantity: {
      type: "TypeQuantityType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:BasisQuantity",
        type: "QuantityType",
        "xsd:annotation": {
          "xsd:documentation": "The quantity used for calculating the charge. This may be different from the line quantity"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    CalculationPercent: {
      type: "TypePercentType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:CalculationPercent",
        type: "PercentType",
        "xsd:annotation": {
          "xsd:documentation": "The percentage applied to the Basis Amount or Basis Quantity to calculate the charge. Either the CalculationPercent or the CalculationNumericRate can be specified"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Calculation: {
      type: "TypeTextType",
      wsdlDefinition: {
        maxOccurs: "unbounded",
        minOccurs: "0",
        name: "WL5G3N2:Calculation",
        type: "TextType",
        "xsd:annotation": {
          "xsd:documentation": "Formula used to calculate the charge described as text"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    },
    DiscountAmount: {
      type: "TypeAmountType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:DiscountAmount",
        type: "AmountType",
        "xsd:annotation": {
          "xsd:documentation": "The Amount by which the price is discounted"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    DiscountPercent: {
      type: "TypePercentType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:DiscountPercent",
        type: "PercentType",
        "xsd:annotation": {
          "xsd:documentation": "The percentage by which the price is discounted"
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
	  TypeCode: {
      type: "TypeCodeType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:TypeCode",
        type: "CodeType",
        "xsd:annotation": {
          "xsd:documentation": "Type of Charge"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    ChargeFrequencyCode: {
      type: "TypeCodeType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:ChargeFrequencyCode",
        type: "CodeType",
        "xsd:annotation": {
          "xsd:documentation": "Frequency of Charge. Example monthly,yearly,quarterly"
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
          "xsd:documentation": "Charge Amount in the transactional currency"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    ReasonCode: {
      type: "TypeCodeType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:ReasonCode",
        type: "CodeType",
        "xsd:annotation": {
          "xsd:documentation": "Reason for applying the charge, if any"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    CurrencyExchange: {
      type: "TypeCurrencyExchangeType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:CurrencyExchange",
        type: "CurrencyExchangeType",
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
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    PrePaidIndicator: {
      type: "TypeIndicatorType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:PrePaidIndicator",
        type: "IndicatorType",
        "xsd:annotation": {
          "xsd:documentation": "An indication of whether or not the allowance is prepaid"
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
          "xsd:documentation": "Description of the charge"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    },
    UnitListPrice: {
      type: "TypePriceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:UnitListPrice",
        type: "PriceType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    UnitSalePrice: {
      type: "TypePriceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:UnitSalePrice",
        type: "PriceType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    DiscountMethodCode: {
      type: "TypeCodeType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:DiscountMethodCode",
        type: "CodeType",
        "xsd:annotation": {
          "xsd:documentation": "The type of Discount Method. Example Amount or Percent"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    BasisAmount: {
      type: "TypeAmountType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:BasisAmount",
        type: "AmountType",
        "xsd:annotation": {
          "xsd:documentation": "The amount on which the charge is calculated. This may be different from the line amount"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    BasisQuantity: {
      type: "TypeQuantityType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:BasisQuantity",
        type: "QuantityType",
        "xsd:annotation": {
          "xsd:documentation": "The quantity used for calculating the charge. This may be different from the line quantity"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    CalculationPercent: {
      type: "TypePercentType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:CalculationPercent",
        type: "PercentType",
        "xsd:annotation": {
          "xsd:documentation": "The percentage applied to the Basis Amount or Basis Quantity to calculate the charge. Either the CalculationPercent or the CalculationNumericRate can be specified"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Calculation: {
      type: "TypeTextType",
      wsdlDefinition: {
        maxOccurs: "unbounded",
        minOccurs: "0",
        name: "WL5G3N2:Calculation",
        type: "TextType",
        "xsd:annotation": {
          "xsd:documentation": "Formula used to calculate the charge described as text"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    },
    DiscountAmount: {
      type: "TypeAmountType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:DiscountAmount",
        type: "AmountType",
        "xsd:annotation": {
          "xsd:documentation": "The Amount by which the price is discounted"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    DiscountPercent: {
      type: "TypePercentType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:DiscountPercent",
        type: "PercentType",
        "xsd:annotation": {
          "xsd:documentation": "The percentage by which the price is discounted"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeChargeType;
Modeler.register(TypeChargeType, "TypeChargeType");
