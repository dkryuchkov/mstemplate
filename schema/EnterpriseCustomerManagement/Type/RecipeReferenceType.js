var Modeler = require("../Modeler.js");
var className = 'TypeRecipeReferenceType';

var TypeRecipeReferenceType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  RecipeIdentification: {
      type: "TypeRecipeIdentificationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:RecipeIdentification",
        type: "RecipeIdentificationType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Custom: {
      type: "TypeCustomRecipeReferenceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Custom",
        type: "corecomcust:CustomRecipeReferenceType",
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
	  RecipeIdentification: {
      type: "TypeRecipeIdentificationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:RecipeIdentification",
        type: "RecipeIdentificationType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Custom: {
      type: "TypeCustomRecipeReferenceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Custom",
        type: "corecomcust:CustomRecipeReferenceType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeRecipeReferenceType;
Modeler.register(TypeRecipeReferenceType, "TypeRecipeReferenceType");
