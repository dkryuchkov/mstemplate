var Modeler = require("../Modeler.js");
var className = 'ElementTerminationAcceptedWorkerReference';

var ElementTerminationAcceptedWorkerReference = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  TerminationAcceptedWorkerReference: {
      type: "TypeWorkerReferenceType",
      wsdlDefinition: {
        name: "TerminationAcceptedWorkerReference",
        type: "WorkerReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Worker who accepted employment \ntermination."
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
	  TerminationAcceptedWorkerReference: {
      type: "TypeWorkerReferenceType",
      wsdlDefinition: {
        name: "TerminationAcceptedWorkerReference",
        type: "WorkerReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Worker who accepted employment \ntermination."
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementTerminationAcceptedWorkerReference;
Modeler.register(ElementTerminationAcceptedWorkerReference, "ElementTerminationAcceptedWorkerReference");
