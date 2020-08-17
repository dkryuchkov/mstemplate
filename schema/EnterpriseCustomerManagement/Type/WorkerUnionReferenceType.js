var Modeler = require("../Modeler.js");
var className = 'TypeWorkerUnionReferenceType';

var TypeWorkerUnionReferenceType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  WorkerUnionIdentification: {
      type: "TypeWorkerUnionIdentificationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:WorkerUnionIdentification",
        type: "WorkerUnionIdentificationType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Custom: {
      type: "TypeCustomWorkerUnionReferenceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Custom",
        type: "corecomcust:CustomWorkerUnionReferenceType",
        attribute: false,
        ns: "WL5G3N2"
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
        minOccurs: "0",
        name: "WL5G3N2:WorkerUnionIdentification",
        type: "WorkerUnionIdentificationType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Custom: {
      type: "TypeCustomWorkerUnionReferenceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Custom",
        type: "corecomcust:CustomWorkerUnionReferenceType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeWorkerUnionReferenceType;
Modeler.register(TypeWorkerUnionReferenceType, "TypeWorkerUnionReferenceType");
