var Modeler = require("../Modeler.js");
var className = 'TypeCustomTalentProfileContentItemReferenceType';

var TypeCustomTalentProfileContentItemReferenceType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomTalentProfileContentItemReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomTalentProfileContentItemReferenceType",
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
	  CustomTalentProfileContentItemReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomTalentProfileContentItemReferenceType",
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCustomTalentProfileContentItemReferenceType;
Modeler.register(TypeCustomTalentProfileContentItemReferenceType, "TypeCustomTalentProfileContentItemReferenceType");
