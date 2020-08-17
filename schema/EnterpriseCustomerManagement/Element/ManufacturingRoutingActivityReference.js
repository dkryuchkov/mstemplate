var Modeler = require("../Modeler.js");
var className = 'ElementManufacturingRoutingActivityReference';

var ElementManufacturingRoutingActivityReference = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  ManufacturingRoutingActivityReference: {
      type: "TypeManufacturingRoutingActivityReferenceType",
      wsdlDefinition: {
        name: "ManufacturingRoutingActivityReference",
        type: "ManufacturingRoutingActivityReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Reference to an activity within an operation of a manufacturing routing"
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
	  ManufacturingRoutingActivityReference: {
      type: "TypeManufacturingRoutingActivityReferenceType",
      wsdlDefinition: {
        name: "ManufacturingRoutingActivityReference",
        type: "ManufacturingRoutingActivityReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Reference to an activity within an operation of a manufacturing routing"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementManufacturingRoutingActivityReference;
Modeler.register(ElementManufacturingRoutingActivityReference, "ElementManufacturingRoutingActivityReference");
