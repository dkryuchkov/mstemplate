var Modeler = require("../Modeler.js");
var className = 'TypeCustomAssignmentGradeStepReferenceType';

var TypeCustomAssignmentGradeStepReferenceType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomAssignmentGradeStepReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomAssignmentGradeStepReferenceType",
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
	  CustomAssignmentGradeStepReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomAssignmentGradeStepReferenceType",
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCustomAssignmentGradeStepReferenceType;
Modeler.register(TypeCustomAssignmentGradeStepReferenceType, "TypeCustomAssignmentGradeStepReferenceType");
