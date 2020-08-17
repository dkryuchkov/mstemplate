var Modeler = require("../Modeler.js");
var className = 'TypeCustomTalentProfileInstanceQualifierReferenceType';

var TypeCustomTalentProfileInstanceQualifierReferenceType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomTalentProfileInstanceQualifierReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomTalentProfileInstanceQualifierReferenceType",
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
	  CustomTalentProfileInstanceQualifierReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomTalentProfileInstanceQualifierReferenceType",
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCustomTalentProfileInstanceQualifierReferenceType;
Modeler.register(TypeCustomTalentProfileInstanceQualifierReferenceType, "TypeCustomTalentProfileInstanceQualifierReferenceType");
