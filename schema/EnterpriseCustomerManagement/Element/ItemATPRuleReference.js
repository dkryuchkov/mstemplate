var Modeler = require("../Modeler.js");
var className = 'ElementItemATPRuleReference';

var ElementItemATPRuleReference = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  ItemATPRuleReference: {
      type: "TypeItemATPRuleReferenceType",
      wsdlDefinition: {
        name: "ItemATPRuleReference",
        type: "ItemATPRuleReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Refers to a rule or option which are used in Available To\n Promise, ATP for short, computation. It specifies how the global order promising system should evaluate which supplies to match with incoming demand. E.g. include/ exclude internal orders to satisfy a sales order or include/exclude supplies before a cut-off time to satisfy a sales order, etc."
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
	  ItemATPRuleReference: {
      type: "TypeItemATPRuleReferenceType",
      wsdlDefinition: {
        name: "ItemATPRuleReference",
        type: "ItemATPRuleReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Refers to a rule or option which are used in Available To\n Promise, ATP for short, computation. It specifies how the global order promising system should evaluate which supplies to match with incoming demand. E.g. include/ exclude internal orders to satisfy a sales order or include/exclude supplies before a cut-off time to satisfy a sales order, etc."
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementItemATPRuleReference;
Modeler.register(ElementItemATPRuleReference, "ElementItemATPRuleReference");
