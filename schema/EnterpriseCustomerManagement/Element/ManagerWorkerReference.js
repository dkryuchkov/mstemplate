var Modeler = require("../Modeler.js");
var className = 'ElementManagerWorkerReference';

var ElementManagerWorkerReference = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  ManagerWorkerReference: {
      type: "TypeWorkerReferenceType",
      wsdlDefinition: {
        name: "ManagerWorkerReference",
        type: "WorkerReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Reference to a worker who is a manager. Manager is a worker/employee one reports to from the organizational perspective (i.e., what you would see in an organizational chart). A closely related term is supervisor/supervision. This is used in the context of a reporting structure within a specific project or assignment. It is also often called operational manager."
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
	  ManagerWorkerReference: {
      type: "TypeWorkerReferenceType",
      wsdlDefinition: {
        name: "ManagerWorkerReference",
        type: "WorkerReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Reference to a worker who is a manager. Manager is a worker/employee one reports to from the organizational perspective (i.e., what you would see in an organizational chart). A closely related term is supervisor/supervision. This is used in the context of a reporting structure within a specific project or assignment. It is also often called operational manager."
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementManagerWorkerReference;
Modeler.register(ElementManagerWorkerReference, "ElementManagerWorkerReference");
