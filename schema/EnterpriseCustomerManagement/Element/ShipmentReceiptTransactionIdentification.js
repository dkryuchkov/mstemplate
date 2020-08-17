var Modeler = require("../Modeler.js");
var className = 'ElementShipmentReceiptTransactionIdentification';

var ElementShipmentReceiptTransactionIdentification = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  ShipmentReceiptTransactionIdentification: {
      type: "TypeShipmentReceiptTransactionIdentificationType",
      wsdlDefinition: {
        name: "ShipmentReceiptTransactionIdentification",
        type: "ShipmentReceiptTransactionIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Unique identification of the Shipment Receipt Transaction component in the Shipment Receipt object"
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
	  ShipmentReceiptTransactionIdentification: {
      type: "TypeShipmentReceiptTransactionIdentificationType",
      wsdlDefinition: {
        name: "ShipmentReceiptTransactionIdentification",
        type: "ShipmentReceiptTransactionIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Unique identification of the Shipment Receipt Transaction component in the Shipment Receipt object"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementShipmentReceiptTransactionIdentification;
Modeler.register(ElementShipmentReceiptTransactionIdentification, "ElementShipmentReceiptTransactionIdentification");
