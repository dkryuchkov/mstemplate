var Modeler = require("../Modeler.js");
var className = 'ElementCost';

var ElementCost = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  Cost: {
      type: "TypeCostType",
      wsdlDefinition: {
        name: "Cost",
        type: "CostType",
        "xsd:annotation": {
          "xsd:documentation": "The cost of an item expressed in multiples of a quantity"
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
	  Cost: {
      type: "TypeCostType",
      wsdlDefinition: {
        name: "Cost",
        type: "CostType",
        "xsd:annotation": {
          "xsd:documentation": "The cost of an item expressed in multiples of a quantity"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementCost;
Modeler.register(ElementCost, "ElementCost");
