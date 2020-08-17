var Modeler = require("../Modeler.js");
var className = 'ElementTaskReference';

var ElementTaskReference = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  TaskReference: {
      type: "TypeTaskReferenceType",
      wsdlDefinition: {
        name: "TaskReference",
        type: "TaskReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Refers to a Task object. Task object represents the need for human attention on a specific subject, for example to follow up on customer contact, to approve a refund. A typical  application associated with task is the reminder or notification when the task is created or has reached or near the due date."
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
	  TaskReference: {
      type: "TypeTaskReferenceType",
      wsdlDefinition: {
        name: "TaskReference",
        type: "TaskReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Refers to a Task object. Task object represents the need for human attention on a specific subject, for example to follow up on customer contact, to approve a refund. A typical  application associated with task is the reminder or notification when the task is created or has reached or near the due date."
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementTaskReference;
Modeler.register(ElementTaskReference, "ElementTaskReference");
