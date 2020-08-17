var Modeler = require("../Modeler.js");
var className = 'TypeCustomRecipeReferenceType';

var TypeCustomRecipeReferenceType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomRecipeReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomRecipeReferenceType",
        attribute: false,
        type: "xsd:string"
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
	  CustomRecipeReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomRecipeReferenceType",
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCustomRecipeReferenceType;
Modeler.register(TypeCustomRecipeReferenceType, "TypeCustomRecipeReferenceType");
