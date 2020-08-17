var Modeler = require("../Modeler.js");
var className = 'TypeUnitPriceType';

var TypeUnitPriceType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  Amount: {
      type: "TypeAmountType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Amount",
        type: "AmountType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    PerQuantity: {
      type: "TypeQuantityType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:PerQuantity",
        type: "QuantityType",
        "xsd:annotation": {
          "xsd:documentation": "Indicates the PerQuantity side of this Amount. Typically, this value is 1 with a uom of each, meaning that, e.g., a UnitPrice with the Amount 1.29 would be the price per each or simply $1.29 each. For pricing wire, the UnitPrice Amount might be $7.00 with a  PerQuantity of 100 and a uom of LinearFeet, meaning the unit price would be $7 per 100 linear feet."
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    undefined: {
      type: "string",
      wsdlDefinition: {
        base: "PriceType",
        attribute: false,
        type: "xsd:string"
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
	  Amount: {
      type: "TypeAmountType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Amount",
        type: "AmountType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    PerQuantity: {
      type: "TypeQuantityType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:PerQuantity",
        type: "QuantityType",
        "xsd:annotation": {
          "xsd:documentation": "Indicates the PerQuantity side of this Amount. Typically, this value is 1 with a uom of each, meaning that, e.g., a UnitPrice with the Amount 1.29 would be the price per each or simply $1.29 each. For pricing wire, the UnitPrice Amount might be $7.00 with a  PerQuantity of 100 and a uom of LinearFeet, meaning the unit price would be $7 per 100 linear feet."
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    undefined: {
      type: "string",
      wsdlDefinition: {
        base: "PriceType",
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeUnitPriceType;
Modeler.register(TypeUnitPriceType, "TypeUnitPriceType");
