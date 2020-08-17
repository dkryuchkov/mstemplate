var Modeler = require("../Modeler.js");
var className = 'ElementManufacturingRoutingReference';

var ElementManufacturingRoutingReference = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  ManufacturingRoutingReference: {
      type: "TypeManufacturingRoutingReferenceType",
      wsdlDefinition: {
        name: "ManufacturingRoutingReference",
        type: "ManufacturingRoutingReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Reference to a manufacturing routing"
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
	  ManufacturingRoutingReference: {
      type: "TypeManufacturingRoutingReferenceType",
      wsdlDefinition: {
        name: "ManufacturingRoutingReference",
        type: "ManufacturingRoutingReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Reference to a manufacturing routing"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementManufacturingRoutingReference;
Modeler.register(ElementManufacturingRoutingReference, "ElementManufacturingRoutingReference");
