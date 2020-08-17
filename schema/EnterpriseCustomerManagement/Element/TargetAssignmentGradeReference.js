var Modeler = require("../Modeler.js");
var className = 'ElementTargetAssignmentGradeReference';

var ElementTargetAssignmentGradeReference = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  TargetAssignmentGradeReference: {
      type: "TypeAssignmentGradeReferenceType",
      wsdlDefinition: {
        name: "TargetAssignmentGradeReference",
        type: "AssignmentGradeReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Reference to a target Assignment Grade, e.g, for a job."
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
	  TargetAssignmentGradeReference: {
      type: "TypeAssignmentGradeReferenceType",
      wsdlDefinition: {
        name: "TargetAssignmentGradeReference",
        type: "AssignmentGradeReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Reference to a target Assignment Grade, e.g, for a job."
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementTargetAssignmentGradeReference;
Modeler.register(ElementTargetAssignmentGradeReference, "ElementTargetAssignmentGradeReference");
