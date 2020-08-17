var Modeler = require("../Modeler.js");
var className = 'ElementShipmentRequestOrderLineReference';

var ElementShipmentRequestOrderLineReference = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  ShipmentRequestOrderLineReference: {
      type: "TypeShipmentRequestOrderLineReferenceType",
      wsdlDefinition: {
        name: "ShipmentRequestOrderLineReference",
        type: "ShipmentRequestOrderLineReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Reference to a Shipment Request Order Line in a Shipment Request object"
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
	  ShipmentRequestOrderLineReference: {
      type: "TypeShipmentRequestOrderLineReferenceType",
      wsdlDefinition: {
        name: "ShipmentRequestOrderLineReference",
        type: "ShipmentRequestOrderLineReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Reference to a Shipment Request Order Line in a Shipment Request object"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementShipmentRequestOrderLineReference;
Modeler.register(ElementShipmentRequestOrderLineReference, "ElementShipmentRequestOrderLineReference");
