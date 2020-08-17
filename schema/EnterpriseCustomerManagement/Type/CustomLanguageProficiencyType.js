var Modeler = require("../Modeler.js");
var className = 'TypeCustomLanguageProficiencyType';

var TypeCustomLanguageProficiencyType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomLanguageProficiencyType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomLanguageProficiencyType",
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
	  CustomLanguageProficiencyType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomLanguageProficiencyType",
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCustomLanguageProficiencyType;
Modeler.register(TypeCustomLanguageProficiencyType, "TypeCustomLanguageProficiencyType");
