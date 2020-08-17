var Modeler = require("../Modeler.js");
var className = 'ElementOperationReference';

var ElementOperationReference = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  OperationReference: {
      type: "TypeOperationReferenceType",
      wsdlDefinition: {
        name: "OperationReference",
        type: "OperationReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Reference to an operation which typically is a group of activities to perform"
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
	  OperationReference: {
      type: "TypeOperationReferenceType",
      wsdlDefinition: {
        name: "OperationReference",
        type: "OperationReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Reference to an operation which typically is a group of activities to perform"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementOperationReference;
Modeler.register(ElementOperationReference, "ElementOperationReference");
