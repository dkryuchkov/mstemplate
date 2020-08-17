var Modeler = require("../Modeler.js");
var className = 'ElementWorkerUnionIdentification';

var ElementWorkerUnionIdentification = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  WorkerUnionIdentification: {
      type: "TypeWorkerUnionIdentificationType",
      wsdlDefinition: {
        name: "WorkerUnionIdentification",
        type: "WorkerUnionIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Identifies a Worker Union object"
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
	  WorkerUnionIdentification: {
      type: "TypeWorkerUnionIdentificationType",
      wsdlDefinition: {
        name: "WorkerUnionIdentification",
        type: "WorkerUnionIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Identifies a Worker Union object"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementWorkerUnionIdentification;
Modeler.register(ElementWorkerUnionIdentification, "ElementWorkerUnionIdentification");
