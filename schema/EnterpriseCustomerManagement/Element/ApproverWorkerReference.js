var Modeler = require("../Modeler.js");
var className = 'ElementApproverWorkerReference';

var ElementApproverWorkerReference = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  ApproverWorkerReference: {
      type: "TypeWorkerReferenceType",
      wsdlDefinition: {
        name: "ApproverWorkerReference",
        type: "WorkerReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Reference to a worker who approves the subject/component in context.\n ."
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
	  ApproverWorkerReference: {
      type: "TypeWorkerReferenceType",
      wsdlDefinition: {
        name: "ApproverWorkerReference",
        type: "WorkerReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Reference to a worker who approves the subject/component in context.\n ."
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementApproverWorkerReference;
Modeler.register(ElementApproverWorkerReference, "ElementApproverWorkerReference");
