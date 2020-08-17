var Modeler = require("../Modeler.js");
var className = 'ElementRecipeValidityRuleIdentification';

var ElementRecipeValidityRuleIdentification = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  RecipeValidityRuleIdentification: {
      type: "TypeRecipeValidityRuleIdentificationType",
      wsdlDefinition: {
        name: "RecipeValidityRuleIdentification",
        type: "RecipeValidityRuleIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Unique identification of a recipe validity rule"
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
	  RecipeValidityRuleIdentification: {
      type: "TypeRecipeValidityRuleIdentificationType",
      wsdlDefinition: {
        name: "RecipeValidityRuleIdentification",
        type: "RecipeValidityRuleIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Unique identification of a recipe validity rule"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementRecipeValidityRuleIdentification;
Modeler.register(ElementRecipeValidityRuleIdentification, "ElementRecipeValidityRuleIdentification");
