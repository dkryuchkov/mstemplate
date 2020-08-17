var Modeler = require("../Modeler.js");
var className = 'TypeCustomEducationalInstitutionReferenceType';

var TypeCustomEducationalInstitutionReferenceType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomEducationalInstitutionReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomEducationalInstitutionReferenceType",
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
	  CustomEducationalInstitutionReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomEducationalInstitutionReferenceType",
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCustomEducationalInstitutionReferenceType;
Modeler.register(TypeCustomEducationalInstitutionReferenceType, "TypeCustomEducationalInstitutionReferenceType");
