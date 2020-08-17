var Modeler = require("../Modeler.js");
var className = 'ElementWorkerReference';

var ElementWorkerReference = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  WorkerReference: {
      type: "TypeWorkerReferenceType",
      wsdlDefinition: {
        name: "WorkerReference",
        type: "WorkerReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Refers to a worker person\n ."
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
	  WorkerReference: {
      type: "TypeWorkerReferenceType",
      wsdlDefinition: {
        name: "WorkerReference",
        type: "WorkerReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Refers to a worker person\n ."
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementWorkerReference;
Modeler.register(ElementWorkerReference, "ElementWorkerReference");
