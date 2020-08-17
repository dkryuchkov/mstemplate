var Modeler = require("../Modeler.js");
var className = 'TypeCustomTalentProfileTypeReferenceType';

var TypeCustomTalentProfileTypeReferenceType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomTalentProfileTypeReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomTalentProfileTypeReferenceType",
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
	  CustomTalentProfileTypeReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomTalentProfileTypeReferenceType",
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCustomTalentProfileTypeReferenceType;
Modeler.register(TypeCustomTalentProfileTypeReferenceType, "TypeCustomTalentProfileTypeReferenceType");
