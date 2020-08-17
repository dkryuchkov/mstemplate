var Modeler = require("../Modeler.js");
var className = 'ElementShipmentRequestOrderIdentification';

var ElementShipmentRequestOrderIdentification = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  ShipmentRequestOrderIdentification: {
      type: "TypeShipmentRequestOrderIdentificationType",
      wsdlDefinition: {
        name: "ShipmentRequestOrderIdentification",
        type: "ShipmentRequestOrderIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Unique identification of a Shipment Request Order within a Shipment Request object"
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
	  ShipmentRequestOrderIdentification: {
      type: "TypeShipmentRequestOrderIdentificationType",
      wsdlDefinition: {
        name: "ShipmentRequestOrderIdentification",
        type: "ShipmentRequestOrderIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Unique identification of a Shipment Request Order within a Shipment Request object"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementShipmentRequestOrderIdentification;
Modeler.register(ElementShipmentRequestOrderIdentification, "ElementShipmentRequestOrderIdentification");
