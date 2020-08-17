var Modeler = require("../Modeler.js");
var className = 'ElementEntryAssignmentGradeStepReference';

var ElementEntryAssignmentGradeStepReference = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  EntryAssignmentGradeStepReference: {
      type: "TypeAssignmentGradeStepReferenceType",
      wsdlDefinition: {
        name: "EntryAssignmentGradeStepReference",
        type: "AssignmentGradeStepReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "The entry step number that indicates the rank of the step in the entry Assignment Grade"
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
	  EntryAssignmentGradeStepReference: {
      type: "TypeAssignmentGradeStepReferenceType",
      wsdlDefinition: {
        name: "EntryAssignmentGradeStepReference",
        type: "AssignmentGradeStepReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "The entry step number that indicates the rank of the step in the entry Assignment Grade"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementEntryAssignmentGradeStepReference;
Modeler.register(ElementEntryAssignmentGradeStepReference, "ElementEntryAssignmentGradeStepReference");
