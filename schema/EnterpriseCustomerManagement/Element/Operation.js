var Modeler = require("../Modeler.js");
var className = 'ElementOperation';

var ElementOperation = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  Operation: {
      type: "TypeOperationType",
      wsdlDefinition: {
        name: "Operation",
        type: "OperationType",
        "xsd:annotation": {
          "xsd:documentation": "This component represents an aggregation of Activities into coarser grain unit of work. In manufacturing, for example, the activities are aggregated based on work stations. Note that this component was initially created to replace the OperationReference with the design intent that the Operation entity is always passed by content."
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
	  Operation: {
      type: "TypeOperationType",
      wsdlDefinition: {
        name: "Operation",
        type: "OperationType",
        "xsd:annotation": {
          "xsd:documentation": "This component represents an aggregation of Activities into coarser grain unit of work. In manufacturing, for example, the activities are aggregated based on work stations. Note that this component was initially created to replace the OperationReference with the design intent that the Operation entity is always passed by content."
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementOperation;
Modeler.register(ElementOperation, "ElementOperation");
