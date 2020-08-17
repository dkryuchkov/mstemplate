var Modeler = require("../Modeler.js");
var className = 'ElementUnitPurchaseCost';

var ElementUnitPurchaseCost = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  UnitPurchaseCost: {
      type: "TypeCostType",
      wsdlDefinition: {
        name: "UnitPurchaseCost",
        type: "CostType",
        "xsd:annotation": {
          "xsd:documentation": "The unit cost of  a purchased item. THis may be different from the actual purchase price of the item"
        },
        ns: "WL5G3N2",
        attribute: false
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
	  UnitPurchaseCost: {
      type: "TypeCostType",
      wsdlDefinition: {
        name: "UnitPurchaseCost",
        type: "CostType",
        "xsd:annotation": {
          "xsd:documentation": "The unit cost of  a purchased item. THis may be different from the actual purchase price of the item"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementUnitPurchaseCost;
Modeler.register(ElementUnitPurchaseCost, "ElementUnitPurchaseCost");
