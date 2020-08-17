var Modeler = require("../Modeler.js");
var className = 'TypeItemPickingRuleReferenceType';

var TypeItemPickingRuleReferenceType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  ItemPickingRuleIdentification: {
      type: "TypeItemPickingRuleIdentificationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:ItemPickingRuleIdentification",
        type: "ItemPickingRuleIdentificationType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Custom: {
      type: "TypeCustomItemPickingRuleReferenceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Custom",
        type: "corecomcust:CustomItemPickingRuleReferenceType",
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
	  ItemPickingRuleIdentification: {
      type: "TypeItemPickingRuleIdentificationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:ItemPickingRuleIdentification",
        type: "ItemPickingRuleIdentificationType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Custom: {
      type: "TypeCustomItemPickingRuleReferenceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Custom",
        type: "corecomcust:CustomItemPickingRuleReferenceType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeItemPickingRuleReferenceType;
Modeler.register(TypeItemPickingRuleReferenceType, "TypeItemPickingRuleReferenceType");
