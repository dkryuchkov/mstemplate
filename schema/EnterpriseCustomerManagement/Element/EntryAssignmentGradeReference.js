var Modeler = require("../Modeler.js");
var className = 'ElementEntryAssignmentGradeReference';

var ElementEntryAssignmentGradeReference = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  EntryAssignmentGradeReference: {
      type: "TypeAssignmentGradeReferenceType",
      wsdlDefinition: {
        name: "EntryAssignmentGradeReference",
        type: "AssignmentGradeReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Reference to the entry Assignment Grade, e.g., for a position."
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
	  EntryAssignmentGradeReference: {
      type: "TypeAssignmentGradeReferenceType",
      wsdlDefinition: {
        name: "EntryAssignmentGradeReference",
        type: "AssignmentGradeReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Reference to the entry Assignment Grade, e.g., for a position."
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementEntryAssignmentGradeReference;
Modeler.register(ElementEntryAssignmentGradeReference, "ElementEntryAssignmentGradeReference");
