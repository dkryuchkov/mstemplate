var Modeler = require("../Modeler.js");
var className = 'ElementMessageBatch';

var ElementMessageBatch = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  MessageBatch: {
      type: "TypeMessageBatchType",
      wsdlDefinition: {
        name: "MessageBatch",
        type: "MessageBatchType",
        "xsd:annotation": {
          "xsd:documentation": "This provides a mechanism to capture the batch concept. A batch is a collection of instances which is treated as one entity or processed as a group and has its own identifier and additional information."
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
	  MessageBatch: {
      type: "TypeMessageBatchType",
      wsdlDefinition: {
        name: "MessageBatch",
        type: "MessageBatchType",
        "xsd:annotation": {
          "xsd:documentation": "This provides a mechanism to capture the batch concept. A batch is a collection of instances which is treated as one entity or processed as a group and has its own identifier and additional information."
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementMessageBatch;
Modeler.register(ElementMessageBatch, "ElementMessageBatch");
