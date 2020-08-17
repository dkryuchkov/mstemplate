var Modeler = require("../Modeler.js");
var className = 'TypeCustomEmploymentGradeReferenceType';

var TypeCustomEmploymentGradeReferenceType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomEmploymentGradeReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomEmploymentGradeReferenceType",
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
	  CustomEmploymentGradeReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomEmploymentGradeReferenceType",
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCustomEmploymentGradeReferenceType;
Modeler.register(TypeCustomEmploymentGradeReferenceType, "TypeCustomEmploymentGradeReferenceType");
