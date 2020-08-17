var Modeler = require("../Modeler.js");
var className = 'ElementSubmittedToWorkerReference';

var ElementSubmittedToWorkerReference = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  SubmittedToWorkerReference: {
      type: "TypeWorkerReferenceType",
      wsdlDefinition: {
        name: "SubmittedToWorkerReference",
        type: "WorkerReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Reference to a worker to whom the component in context is sumbitted,\nsupervisor"
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
	  SubmittedToWorkerReference: {
      type: "TypeWorkerReferenceType",
      wsdlDefinition: {
        name: "SubmittedToWorkerReference",
        type: "WorkerReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Reference to a worker to whom the component in context is sumbitted,\nsupervisor"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementSubmittedToWorkerReference;
Modeler.register(ElementSubmittedToWorkerReference, "ElementSubmittedToWorkerReference");
