var Modeler = require("../Modeler.js");
var className = 'ElementWorkerIdentification';

var ElementWorkerIdentification = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  WorkerIdentification: {
      type: "TypeWorkerIdentificationType",
      wsdlDefinition: {
        name: "WorkerIdentification",
        type: "WorkerIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Identifies a worker in an enterprise"
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
	  WorkerIdentification: {
      type: "TypeWorkerIdentificationType",
      wsdlDefinition: {
        name: "WorkerIdentification",
        type: "WorkerIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Identifies a worker in an enterprise"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementWorkerIdentification;
Modeler.register(ElementWorkerIdentification, "ElementWorkerIdentification");
