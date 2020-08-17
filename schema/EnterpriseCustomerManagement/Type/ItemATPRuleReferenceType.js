var Modeler = require("../Modeler.js");
var className = 'TypeItemATPRuleReferenceType';

var TypeItemATPRuleReferenceType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  ItemATPRuleIdentification: {
      type: "TypeItemATPRuleIdentificationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:ItemATPRuleIdentification",
        type: "ItemATPRuleIdentificationType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Custom: {
      type: "TypeCustomItemATPRuleReferenceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Custom",
        type: "corecomcust:CustomItemATPRuleReferenceType",
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
	  ItemATPRuleIdentification: {
      type: "TypeItemATPRuleIdentificationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:ItemATPRuleIdentification",
        type: "ItemATPRuleIdentificationType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Custom: {
      type: "TypeCustomItemATPRuleReferenceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Custom",
        type: "corecomcust:CustomItemATPRuleReferenceType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeItemATPRuleReferenceType;
Modeler.register(TypeItemATPRuleReferenceType, "TypeItemATPRuleReferenceType");
