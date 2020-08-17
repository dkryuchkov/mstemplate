var Modeler = require("../Modeler.js");
var className = 'ElementUnitBuildCost';

var ElementUnitBuildCost = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  UnitBuildCost: {
      type: "TypeCostType",
      wsdlDefinition: {
        name: "UnitBuildCost",
        type: "CostType",
        "xsd:annotation": {
          "xsd:documentation": "The cost of building a unit of the item, expressed per quantity"
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
	  UnitBuildCost: {
      type: "TypeCostType",
      wsdlDefinition: {
        name: "UnitBuildCost",
        type: "CostType",
        "xsd:annotation": {
          "xsd:documentation": "The cost of building a unit of the item, expressed per quantity"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementUnitBuildCost;
Modeler.register(ElementUnitBuildCost, "ElementUnitBuildCost");
