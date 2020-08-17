var Modeler = require("../Modeler.js");
var className = 'ElementSupervisorWorkerReference';

var ElementSupervisorWorkerReference = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  SupervisorWorkerReference: {
      type: "TypeWorkerReferenceType",
      wsdlDefinition: {
        name: "SupervisorWorkerReference",
        type: "WorkerReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Reference to a worker in the role of a supervisor. A supervisor is different from a manager in that it used in the context of a reporting structure within a specific project or assignment. It is also often called operational manager."
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
	  SupervisorWorkerReference: {
      type: "TypeWorkerReferenceType",
      wsdlDefinition: {
        name: "SupervisorWorkerReference",
        type: "WorkerReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Reference to a worker in the role of a supervisor. A supervisor is different from a manager in that it used in the context of a reporting structure within a specific project or assignment. It is also often called operational manager."
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementSupervisorWorkerReference;
Modeler.register(ElementSupervisorWorkerReference, "ElementSupervisorWorkerReference");
