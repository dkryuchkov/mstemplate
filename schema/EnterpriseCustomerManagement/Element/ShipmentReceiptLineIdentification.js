var Modeler = require("../Modeler.js");
var className = 'ElementShipmentReceiptLineIdentification';

var ElementShipmentReceiptLineIdentification = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  ShipmentReceiptLineIdentification: {
      type: "TypeShipmentReceiptLineIdentificationType",
      wsdlDefinition: {
        name: "ShipmentReceiptLineIdentification",
        type: "ShipmentReceiptLineIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Unique identification of the Shipment Receipt Line component in the Shipment Receipt object."
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
	  ShipmentReceiptLineIdentification: {
      type: "TypeShipmentReceiptLineIdentificationType",
      wsdlDefinition: {
        name: "ShipmentReceiptLineIdentification",
        type: "ShipmentReceiptLineIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Unique identification of the Shipment Receipt Line component in the Shipment Receipt object."
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementShipmentReceiptLineIdentification;
Modeler.register(ElementShipmentReceiptLineIdentification, "ElementShipmentReceiptLineIdentification");
