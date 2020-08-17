var Modeler = require("../Modeler.js");
var className = 'ElementRecipeReference';

var ElementRecipeReference = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  RecipeReference: {
      type: "TypeRecipeReferenceType",
      wsdlDefinition: {
        name: "RecipeReference",
        type: "RecipeReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Reference to a recipe in process manufacturing"
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
	  RecipeReference: {
      type: "TypeRecipeReferenceType",
      wsdlDefinition: {
        name: "RecipeReference",
        type: "RecipeReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Reference to a recipe in process manufacturing"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementRecipeReference;
Modeler.register(ElementRecipeReference, "ElementRecipeReference");
