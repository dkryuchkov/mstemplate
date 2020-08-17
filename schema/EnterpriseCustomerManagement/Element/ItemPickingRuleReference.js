var Modeler = require("../Modeler.js");
var className = 'ElementItemPickingRuleReference';

var ElementItemPickingRuleReference = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  ItemPickingRuleReference: {
      type: "TypeItemPickingRuleReferenceType",
      wsdlDefinition: {
        name: "ItemPickingRuleReference",
        type: "ItemPickingRuleReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Refers to a rule which defines the pick criteria. The\npicking criteria consists of the selections of picking preferences\nregarding an item's revision, lot, subinventory and locator."
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
	  ItemPickingRuleReference: {
      type: "TypeItemPickingRuleReferenceType",
      wsdlDefinition: {
        name: "ItemPickingRuleReference",
        type: "ItemPickingRuleReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Refers to a rule which defines the pick criteria. The\npicking criteria consists of the selections of picking preferences\nregarding an item's revision, lot, subinventory and locator."
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementItemPickingRuleReference;
Modeler.register(ElementItemPickingRuleReference, "ElementItemPickingRuleReference");
