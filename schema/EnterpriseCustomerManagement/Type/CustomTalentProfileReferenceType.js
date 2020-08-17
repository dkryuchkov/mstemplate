var Modeler = require("../Modeler.js");
var className = 'TypeCustomTalentProfileReferenceType';

var TypeCustomTalentProfileReferenceType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomTalentProfileReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomTalentProfileReferenceType",
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
	  CustomTalentProfileReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomTalentProfileReferenceType",
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCustomTalentProfileReferenceType;
Modeler.register(TypeCustomTalentProfileReferenceType, "TypeCustomTalentProfileReferenceType");
