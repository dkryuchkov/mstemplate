var Modeler = require("../Modeler.js");
var className = 'TypeCustomTalentProfileContentTypePropertyReferenceType';

var TypeCustomTalentProfileContentTypePropertyReferenceType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomTalentProfileContentTypePropertyReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomTalentProfileContentTypePropertyReferenceType",
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
	  CustomTalentProfileContentTypePropertyReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomTalentProfileContentTypePropertyReferenceType",
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCustomTalentProfileContentTypePropertyReferenceType;
Modeler.register(TypeCustomTalentProfileContentTypePropertyReferenceType, "TypeCustomTalentProfileContentTypePropertyReferenceType");
