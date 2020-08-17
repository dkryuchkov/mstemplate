var Modeler = require("../Modeler.js");
var className = 'TypeCustomTalentProfileInstanceQualifierSetReferenceType';

var TypeCustomTalentProfileInstanceQualifierSetReferenceType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomTalentProfileInstanceQualifierSetReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomTalentProfileInstanceQualifierSetReferenceType",
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
	  CustomTalentProfileInstanceQualifierSetReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomTalentProfileInstanceQualifierSetReferenceType",
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCustomTalentProfileInstanceQualifierSetReferenceType;
Modeler.register(TypeCustomTalentProfileInstanceQualifierSetReferenceType, "TypeCustomTalentProfileInstanceQualifierSetReferenceType");
