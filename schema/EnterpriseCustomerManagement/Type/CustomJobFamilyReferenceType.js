var Modeler = require("../Modeler.js");
var className = 'TypeCustomJobFamilyReferenceType';

var TypeCustomJobFamilyReferenceType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomJobFamilyReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomJobFamilyReferenceType",
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
	  CustomJobFamilyReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomJobFamilyReferenceType",
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCustomJobFamilyReferenceType;
Modeler.register(TypeCustomJobFamilyReferenceType, "TypeCustomJobFamilyReferenceType");
