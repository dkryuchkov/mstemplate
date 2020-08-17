var Modeler = require("../Modeler.js");
var className = 'ElementShipmentReceiptTransactionReference';

var ElementShipmentReceiptTransactionReference = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  ShipmentReceiptTransactionReference: {
      type: "TypeShipmentReceiptTransactionReferenceType",
      wsdlDefinition: {
        name: "ShipmentReceiptTransactionReference",
        type: "ShipmentReceiptTransactionReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Refers to a Shipment Receipt Transaction with the Shipment Receipt object. Shipment Receipt Transaction is a child of the Shipment Receipt Line."
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
	  ShipmentReceiptTransactionReference: {
      type: "TypeShipmentReceiptTransactionReferenceType",
      wsdlDefinition: {
        name: "ShipmentReceiptTransactionReference",
        type: "ShipmentReceiptTransactionReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Refers to a Shipment Receipt Transaction with the Shipment Receipt object. Shipment Receipt Transaction is a child of the Shipment Receipt Line."
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementShipmentReceiptTransactionReference;
Modeler.register(ElementShipmentReceiptTransactionReference, "ElementShipmentReceiptTransactionReference");
