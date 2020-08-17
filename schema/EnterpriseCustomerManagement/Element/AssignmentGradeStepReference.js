var Modeler = require("../Modeler.js");
var className = 'ElementAssignmentGradeStepReference';

var ElementAssignmentGradeStepReference = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  AssignmentGradeStepReference: {
      type: "TypeAssignmentGradeStepReferenceType",
      wsdlDefinition: {
        name: "AssignmentGradeStepReference",
        type: "AssignmentGradeStepReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "A reference to the Assignment Grade Step business component within the Assignment Grade object. It represents a level/rank within an Assignment Grade."
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
	  AssignmentGradeStepReference: {
      type: "TypeAssignmentGradeStepReferenceType",
      wsdlDefinition: {
        name: "AssignmentGradeStepReference",
        type: "AssignmentGradeStepReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "A reference to the Assignment Grade Step business component within the Assignment Grade object. It represents a level/rank within an Assignment Grade."
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementAssignmentGradeStepReference;
Modeler.register(ElementAssignmentGradeStepReference, "ElementAssignmentGradeStepReference");
