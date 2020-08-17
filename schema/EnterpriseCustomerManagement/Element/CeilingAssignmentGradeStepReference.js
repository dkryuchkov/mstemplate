var Modeler = require("../Modeler.js");
var className = 'ElementCeilingAssignmentGradeStepReference';

var ElementCeilingAssignmentGradeStepReference = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CeilingAssignmentGradeStepReference: {
      type: "TypeAssignmentGradeStepReferenceType",
      wsdlDefinition: {
        name: "CeilingAssignmentGradeStepReference",
        type: "AssignmentGradeStepReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "The Ceiling step number that indicates the rank of the step in the Ceiling Assignment Grade"
        },
        ns: "WL5G3N2",
        attribute: false
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
	  CeilingAssignmentGradeStepReference: {
      type: "TypeAssignmentGradeStepReferenceType",
      wsdlDefinition: {
        name: "CeilingAssignmentGradeStepReference",
        type: "AssignmentGradeStepReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "The Ceiling step number that indicates the rank of the step in the Ceiling Assignment Grade"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementCeilingAssignmentGradeStepReference;
Modeler.register(ElementCeilingAssignmentGradeStepReference, "ElementCeilingAssignmentGradeStepReference");
