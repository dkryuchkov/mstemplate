var Modeler = require("../Modeler.js");
var className = 'TypeSalesCreditType';

var TypeSalesCreditType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  RevenueTypeCode: {
      type: "TypeCodeType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:RevenueTypeCode",
        type: "CodeType",
        "xsd:annotation": {
          "xsd:documentation": "Type of Revenue for example Revenue or Non-Revenue."
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    SplitPercent: {
      type: "TypePercentType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:SplitPercent",
        type: "PercentType",
        "xsd:annotation": {
          "xsd:documentation": "Split percentage on a SalesOpportunityLine for salespersons representing their contributions to the sale."
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    PostSplitQuantity: {
      type: "TypeQuantityType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:PostSplitQuantity",
        type: "QuantityType",
        "xsd:annotation": {
          "xsd:documentation": "Post split quantity of opportunity line."
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    PostSplitRevenueAmount: {
      type: "TypeAmountType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:PostSplitRevenueAmount",
        type: "AmountType",
        "xsd:annotation": {
          "xsd:documentation": "Post split revenue value of opportunity line."
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
	  RevenueTypeCode: {
      type: "TypeCodeType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:RevenueTypeCode",
        type: "CodeType",
        "xsd:annotation": {
          "xsd:documentation": "Type of Revenue for example Revenue or Non-Revenue."
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    SplitPercent: {
      type: "TypePercentType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:SplitPercent",
        type: "PercentType",
        "xsd:annotation": {
          "xsd:documentation": "Split percentage on a SalesOpportunityLine for salespersons representing their contributions to the sale."
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    PostSplitQuantity: {
      type: "TypeQuantityType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:PostSplitQuantity",
        type: "QuantityType",
        "xsd:annotation": {
          "xsd:documentation": "Post split quantity of opportunity line."
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    PostSplitRevenueAmount: {
      type: "TypeAmountType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:PostSplitRevenueAmount",
        type: "AmountType",
        "xsd:annotation": {
          "xsd:documentation": "Post split revenue value of opportunity line."
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeSalesCreditType;
Modeler.register(TypeSalesCreditType, "TypeSalesCreditType");
