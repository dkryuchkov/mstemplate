var Modeler = require("../Modeler.js");
var className = 'ElementCeilingAssignmentGradeReference';

var ElementCeilingAssignmentGradeReference = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CeilingAssignmentGradeReference: {
      type: "TypeAssignmentGradeReferenceType",
      wsdlDefinition: {
        name: "CeilingAssignmentGradeReference",
        type: "AssignmentGradeReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Reference to the ceiling Assignment Grade, e.g, for a position."
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
	  CeilingAssignmentGradeReference: {
      type: "TypeAssignmentGradeReferenceType",
      wsdlDefinition: {
        name: "CeilingAssignmentGradeReference",
        type: "AssignmentGradeReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Reference to the ceiling Assignment Grade, e.g, for a position."
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementCeilingAssignmentGradeReference;
Modeler.register(ElementCeilingAssignmentGradeReference, "ElementCeilingAssignmentGradeReference");
