var Modeler = require("../Modeler.js");
var className = 'ElementWorkerUnionReference';

var ElementWorkerUnionReference = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  WorkerUnionReference: {
      type: "TypeWorkerUnionReferenceType",
      wsdlDefinition: {
        name: "WorkerUnionReference",
        type: "WorkerUnionReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Refers to a trade, labor, or worker union"
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
	  WorkerUnionReference: {
      type: "TypeWorkerUnionReferenceType",
      wsdlDefinition: {
        name: "WorkerUnionReference",
        type: "WorkerUnionReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Refers to a trade, labor, or worker union"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementWorkerUnionReference;
Modeler.register(ElementWorkerUnionReference, "ElementWorkerUnionReference");
