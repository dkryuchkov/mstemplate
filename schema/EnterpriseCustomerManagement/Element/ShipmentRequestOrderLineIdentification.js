var Modeler = require("../Modeler.js");
var className = 'ElementShipmentRequestOrderLineIdentification';

var ElementShipmentRequestOrderLineIdentification = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  ShipmentRequestOrderLineIdentification: {
      type: "TypeShipmentRequestOrderLineIdentificationType",
      wsdlDefinition: {
        name: "ShipmentRequestOrderLineIdentification",
        type: "ShipmentRequestOrderLineIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Unique identification of a Shipment Request Order Line within a Shipment Request object"
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
	  ShipmentRequestOrderLineIdentification: {
      type: "TypeShipmentRequestOrderLineIdentificationType",
      wsdlDefinition: {
        name: "ShipmentRequestOrderLineIdentification",
        type: "ShipmentRequestOrderLineIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Unique identification of a Shipment Request Order Line within a Shipment Request object"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementShipmentRequestOrderLineIdentification;
Modeler.register(ElementShipmentRequestOrderLineIdentification, "ElementShipmentRequestOrderLineIdentification");
