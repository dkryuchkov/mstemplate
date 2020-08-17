var Modeler = require("../Modeler.js");
var className = 'ElementRecipeValidityRuleReference';

var ElementRecipeValidityRuleReference = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  RecipeValidityRuleReference: {
      type: "TypeRecipeValidityRuleReferenceType",
      wsdlDefinition: {
        name: "RecipeValidityRuleReference",
        type: "RecipeValidityRuleReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Reference to the Recipe Validity Rule"
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
	  RecipeValidityRuleReference: {
      type: "TypeRecipeValidityRuleReferenceType",
      wsdlDefinition: {
        name: "RecipeValidityRuleReference",
        type: "RecipeValidityRuleReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Reference to the Recipe Validity Rule"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementRecipeValidityRuleReference;
Modeler.register(ElementRecipeValidityRuleReference, "ElementRecipeValidityRuleReference");
