var Modeler = require("../Modeler.js");
var className = 'ElementRecipeIdentification';

var ElementRecipeIdentification = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  RecipeIdentification: {
      type: "TypeRecipeIdentificationType",
      wsdlDefinition: {
        name: "RecipeIdentification",
        type: "RecipeIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Unique identification of a recipe in process manufacturing"
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
	  RecipeIdentification: {
      type: "TypeRecipeIdentificationType",
      wsdlDefinition: {
        name: "RecipeIdentification",
        type: "RecipeIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Unique identification of a recipe in process manufacturing"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementRecipeIdentification;
Modeler.register(ElementRecipeIdentification, "ElementRecipeIdentification");
