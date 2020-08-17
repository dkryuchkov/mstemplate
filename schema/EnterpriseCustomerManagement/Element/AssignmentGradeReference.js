var Modeler = require("../Modeler.js");
var className = 'ElementAssignmentGradeReference';

var ElementAssignmentGradeReference = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  AssignmentGradeReference: {
      type: "TypeAssignmentGradeReferenceType",
      wsdlDefinition: {
        name: "AssignmentGradeReference",
        type: "AssignmentGradeReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Reference to an Assignment Grade object. A grade shows the relative rank/level/status of employment assignment within an enterprise. For Example IC3, M3"
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
	  AssignmentGradeReference: {
      type: "TypeAssignmentGradeReferenceType",
      wsdlDefinition: {
        name: "AssignmentGradeReference",
        type: "AssignmentGradeReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Reference to an Assignment Grade object. A grade shows the relative rank/level/status of employment assignment within an enterprise. For Example IC3, M3"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementAssignmentGradeReference;
Modeler.register(ElementAssignmentGradeReference, "ElementAssignmentGradeReference");
