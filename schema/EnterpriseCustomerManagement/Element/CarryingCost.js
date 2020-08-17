var Modeler = require("../Modeler.js");
var className = 'ElementCarryingCost';

var ElementCarryingCost = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CarryingCost: {
      type: "TypeCarryingCostType",
      wsdlDefinition: {
        name: "CarryingCost",
        type: "CarryingCostType",
        "xsd:annotation": {
          "xsd:documentation": "The inventory carrying cost of an item usually express in amount per quanitity and per unit time, e.g., $2 per each item per day."
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
	  CarryingCost: {
      type: "TypeCarryingCostType",
      wsdlDefinition: {
        name: "CarryingCost",
        type: "CarryingCostType",
        "xsd:annotation": {
          "xsd:documentation": "The inventory carrying cost of an item usually express in amount per quanitity and per unit time, e.g., $2 per each item per day."
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementCarryingCost;
Modeler.register(ElementCarryingCost, "ElementCarryingCost");
