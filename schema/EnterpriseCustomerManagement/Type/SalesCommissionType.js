var Modeler = require("../Modeler.js");
var className = 'TypeSalesCommissionType';

var TypeSalesCommissionType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  TypeCode: {
      type: "TypeCodeType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:TypeCode",
        type: "CodeType",
        "xsd:annotation": {
          "xsd:documentation": "Type of Commission. For instance, Bonus, Commission or SPIF aka Special Performance Incentive Fund or Sales Performance Incentive Fund - a special fund (money pool) allocated to provide sales personnel with specific (typically financial) incentives, gears at supporting tactical or strategic goals."
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Percentage: {
      type: "TypePercentType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Percentage",
        type: "PercentType",
        "xsd:annotation": {
          "xsd:documentation": "Percentage used to calculate the commission amount"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Quantity: {
      type: "TypeQuantityType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Quantity",
        type: "QuantityType",
        "xsd:annotation": {
          "xsd:documentation": "Commission quantity which could be in monetary, points, etc."
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
          "xsd:documentation": "Commission amount, this field is deprecated in FP2.5 in order to be consistent with other related concepts such as SalesQuota which uses a quantity field to capture the commission or quota either it is in monetary amount, points, or others."
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    QuotaCreditQuantity: {
      type: "TypeQuantityType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:QuotaCreditQuantity",
        type: "QuantityType",
        "xsd:annotation": {
          "xsd:documentation": "Quantity of quota relief or quota credit calculated in the processing currency, points, etc."
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    SalespersonPartyReference: {
      type: "TypeSalespersonPartyReferenceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:SalespersonPartyReference",
        type: "SalespersonPartyReferenceType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    IncentiveCompensationPlanComponentReference: {
      type: "TypeIncentiveCompensationPlanComponentReferenceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:IncentiveCompensationPlanComponentReference",
        type: "IncentiveCompensationPlanComponentReferenceType",
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
          "xsd:documentation": "Type of Commission. For instance, Bonus, Commission or SPIF aka Special Performance Incentive Fund or Sales Performance Incentive Fund - a special fund (money pool) allocated to provide sales personnel with specific (typically financial) incentives, gears at supporting tactical or strategic goals."
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Percentage: {
      type: "TypePercentType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Percentage",
        type: "PercentType",
        "xsd:annotation": {
          "xsd:documentation": "Percentage used to calculate the commission amount"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Quantity: {
      type: "TypeQuantityType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Quantity",
        type: "QuantityType",
        "xsd:annotation": {
          "xsd:documentation": "Commission quantity which could be in monetary, points, etc."
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
          "xsd:documentation": "Commission amount, this field is deprecated in FP2.5 in order to be consistent with other related concepts such as SalesQuota which uses a quantity field to capture the commission or quota either it is in monetary amount, points, or others."
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    QuotaCreditQuantity: {
      type: "TypeQuantityType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:QuotaCreditQuantity",
        type: "QuantityType",
        "xsd:annotation": {
          "xsd:documentation": "Quantity of quota relief or quota credit calculated in the processing currency, points, etc."
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    SalespersonPartyReference: {
      type: "TypeSalespersonPartyReferenceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:SalespersonPartyReference",
        type: "SalespersonPartyReferenceType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    IncentiveCompensationPlanComponentReference: {
      type: "TypeIncentiveCompensationPlanComponentReferenceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:IncentiveCompensationPlanComponentReference",
        type: "IncentiveCompensationPlanComponentReferenceType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeSalesCommissionType;
Modeler.register(TypeSalesCommissionType, "TypeSalesCommissionType");
