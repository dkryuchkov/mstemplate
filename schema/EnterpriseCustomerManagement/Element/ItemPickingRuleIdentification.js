var Modeler = require("../Modeler.js");
var className = 'ElementItemPickingRuleIdentification';

var ElementItemPickingRuleIdentification = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  ItemPickingRuleIdentification: {
      type: "TypeItemPickingRuleIdentificationType",
      wsdlDefinition: {
        name: "ItemPickingRuleIdentification",
        type: "ItemPickingRuleIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Unique identification of an item picking rule"
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
	  ItemPickingRuleIdentification: {
      type: "TypeItemPickingRuleIdentificationType",
      wsdlDefinition: {
        name: "ItemPickingRuleIdentification",
        type: "ItemPickingRuleIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Unique identification of an item picking rule"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementItemPickingRuleIdentification;
Modeler.register(ElementItemPickingRuleIdentification, "ElementItemPickingRuleIdentification");
