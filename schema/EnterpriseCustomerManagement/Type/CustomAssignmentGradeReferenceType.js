var Modeler = require("../Modeler.js");
var className = 'TypeCustomAssignmentGradeReferenceType';

var TypeCustomAssignmentGradeReferenceType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomAssignmentGradeReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomAssignmentGradeReferenceType",
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
	  CustomAssignmentGradeReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomAssignmentGradeReferenceType",
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCustomAssignmentGradeReferenceType;
Modeler.register(TypeCustomAssignmentGradeReferenceType, "TypeCustomAssignmentGradeReferenceType");
