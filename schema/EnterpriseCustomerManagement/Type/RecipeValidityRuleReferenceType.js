var Modeler = require("../Modeler.js");
var className = 'TypeRecipeValidityRuleReferenceType';

var TypeRecipeValidityRuleReferenceType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  RecipeValidityRuleIdentification: {
      type: "TypeRecipeValidityRuleIdentificationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:RecipeValidityRuleIdentification",
        type: "RecipeValidityRuleIdentificationType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Custom: {
      type: "TypeCustomRecipeValidityRuleReferenceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Custom",
        type: "corecomcust:CustomRecipeValidityRuleReferenceType",
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
	  RecipeValidityRuleIdentification: {
      type: "TypeRecipeValidityRuleIdentificationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:RecipeValidityRuleIdentification",
        type: "RecipeValidityRuleIdentificationType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Custom: {
      type: "TypeCustomRecipeValidityRuleReferenceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Custom",
        type: "corecomcust:CustomRecipeValidityRuleReferenceType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeRecipeValidityRuleReferenceType;
Modeler.register(TypeRecipeValidityRuleReferenceType, "TypeRecipeValidityRuleReferenceType");
