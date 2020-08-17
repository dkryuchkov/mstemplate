var Modeler = require("../Modeler.js");
var className = 'TypeCustomTalentProfileContentTypeReferenceType';

var TypeCustomTalentProfileContentTypeReferenceType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomTalentProfileContentTypeReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomTalentProfileContentTypeReferenceType",
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
	  CustomTalentProfileContentTypeReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomTalentProfileContentTypeReferenceType",
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCustomTalentProfileContentTypeReferenceType;
Modeler.register(TypeCustomTalentProfileContentTypeReferenceType, "TypeCustomTalentProfileContentTypeReferenceType");
