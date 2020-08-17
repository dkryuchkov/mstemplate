var Modeler = require("../Modeler.js");
var className = 'ElementSupervisorEmploymentAssignmentReference';

var ElementSupervisorEmploymentAssignmentReference = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  SupervisorEmploymentAssignmentReference: {
      type: "TypeEmploymentAssignmentReferenceType",
      wsdlDefinition: {
        name: "SupervisorEmploymentAssignmentReference",
        type: "EmploymentAssignmentReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Identifies the supervisor's \nemployemt assignment."
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
	  SupervisorEmploymentAssignmentReference: {
      type: "TypeEmploymentAssignmentReferenceType",
      wsdlDefinition: {
        name: "SupervisorEmploymentAssignmentReference",
        type: "EmploymentAssignmentReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Identifies the supervisor's \nemployemt assignment."
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementSupervisorEmploymentAssignmentReference;
Modeler.register(ElementSupervisorEmploymentAssignmentReference, "ElementSupervisorEmploymentAssignmentReference");
