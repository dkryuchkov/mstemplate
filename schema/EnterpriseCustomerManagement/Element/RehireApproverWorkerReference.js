var Modeler = require("../Modeler.js");
var className = 'ElementRehireApproverWorkerReference';

var ElementRehireApproverWorkerReference = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  RehireApproverWorkerReference: {
      type: "TypeWorkerReferenceType",
      wsdlDefinition: {
        name: "RehireApproverWorkerReference",
        type: "WorkerReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Worker person who authorized the rehire\n ."
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
	  RehireApproverWorkerReference: {
      type: "TypeWorkerReferenceType",
      wsdlDefinition: {
        name: "RehireApproverWorkerReference",
        type: "WorkerReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Worker person who authorized the rehire\n ."
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementRehireApproverWorkerReference;
Modeler.register(ElementRehireApproverWorkerReference, "ElementRehireApproverWorkerReference");
