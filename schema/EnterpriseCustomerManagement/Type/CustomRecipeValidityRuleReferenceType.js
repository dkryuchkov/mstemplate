var Modeler = require("../Modeler.js");
var className = 'TypeCustomRecipeValidityRuleReferenceType';

var TypeCustomRecipeValidityRuleReferenceType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomRecipeValidityRuleReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomRecipeValidityRuleReferenceType",
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
	  CustomRecipeValidityRuleReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomRecipeValidityRuleReferenceType",
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCustomRecipeValidityRuleReferenceType;
Modeler.register(TypeCustomRecipeValidityRuleReferenceType, "TypeCustomRecipeValidityRuleReferenceType");
