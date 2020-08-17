var Modeler = require("../Modeler.js");
var className = 'ElementAssignedWorkerReference';

var ElementAssignedWorkerReference = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  AssignedWorkerReference: {
      type: "TypeWorkerReferenceType",
      wsdlDefinition: {
        name: "AssignedWorkerReference",
        type: "WorkerReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Refer to a worker that has been assigned to the containing object, e.g., assigned to an activity, a job, etc."
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
	  AssignedWorkerReference: {
      type: "TypeWorkerReferenceType",
      wsdlDefinition: {
        name: "AssignedWorkerReference",
        type: "WorkerReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Refer to a worker that has been assigned to the containing object, e.g., assigned to an activity, a job, etc."
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementAssignedWorkerReference;
Modeler.register(ElementAssignedWorkerReference, "ElementAssignedWorkerReference");
