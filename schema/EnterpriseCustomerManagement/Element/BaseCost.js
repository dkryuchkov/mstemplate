var Modeler = require("../Modeler.js");
var className = 'ElementBaseCost';

var ElementBaseCost = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  BaseCost: {
      type: "TypeBaseCostType",
      wsdlDefinition: {
        name: "BaseCost",
        type: "BaseCostType",
        "xsd:annotation": {
          "xsd:documentation": "Base cost of an item is a cost before other factors. For example, an action cost of a labor hour is typically based on a base cost, whether the time is in a premium shift, the difficulty/skill-level of the job"
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
	  BaseCost: {
      type: "TypeBaseCostType",
      wsdlDefinition: {
        name: "BaseCost",
        type: "BaseCostType",
        "xsd:annotation": {
          "xsd:documentation": "Base cost of an item is a cost before other factors. For example, an action cost of a labor hour is typically based on a base cost, whether the time is in a premium shift, the difficulty/skill-level of the job"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementBaseCost;
Modeler.register(ElementBaseCost, "ElementBaseCost");
