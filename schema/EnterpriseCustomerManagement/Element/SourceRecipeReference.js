var Modeler = require("../Modeler.js");
var className = 'ElementSourceRecipeReference';

var ElementSourceRecipeReference = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  SourceRecipeReference: {
      type: "TypeRecipeReferenceType",
      wsdlDefinition: {
        name: "SourceRecipeReference",
        type: "RecipeReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Reference to the source recipe where the containing recipe was copied from"
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
	  SourceRecipeReference: {
      type: "TypeRecipeReferenceType",
      wsdlDefinition: {
        name: "SourceRecipeReference",
        type: "RecipeReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Reference to the source recipe where the containing recipe was copied from"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementSourceRecipeReference;
Modeler.register(ElementSourceRecipeReference, "ElementSourceRecipeReference");
