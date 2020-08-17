var Modeler = require("../Modeler.js");
var className = 'ElementManufacturingRoutingOperationReference';

var ElementManufacturingRoutingOperationReference = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  ManufacturingRoutingOperationReference: {
      type: "TypeManufacturingRoutingOperationReferenceType",
      wsdlDefinition: {
        name: "ManufacturingRoutingOperationReference",
        type: "ManufacturingRoutingOperationReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Reference to an operation within a manufacturing routing"
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
	  ManufacturingRoutingOperationReference: {
      type: "TypeManufacturingRoutingOperationReferenceType",
      wsdlDefinition: {
        name: "ManufacturingRoutingOperationReference",
        type: "ManufacturingRoutingOperationReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Reference to an operation within a manufacturing routing"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementManufacturingRoutingOperationReference;
Modeler.register(ElementManufacturingRoutingOperationReference, "ElementManufacturingRoutingOperationReference");
