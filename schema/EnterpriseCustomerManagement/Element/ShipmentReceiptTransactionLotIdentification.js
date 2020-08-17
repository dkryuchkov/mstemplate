var Modeler = require("../Modeler.js");
var className = 'ElementShipmentReceiptTransactionLotIdentification';

var ElementShipmentReceiptTransactionLotIdentification = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  ShipmentReceiptTransactionLotIdentification: {
      type: "TypeShipmentReceiptTransactionLotIdentificationType",
      wsdlDefinition: {
        name: "ShipmentReceiptTransactionLotIdentification",
        type: "ShipmentReceiptTransactionLotIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Unique identification to a ShipmentReceiptTransactionLot within the ShipmentReceipt object."
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
	  ShipmentReceiptTransactionLotIdentification: {
      type: "TypeShipmentReceiptTransactionLotIdentificationType",
      wsdlDefinition: {
        name: "ShipmentReceiptTransactionLotIdentification",
        type: "ShipmentReceiptTransactionLotIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Unique identification to a ShipmentReceiptTransactionLot within the ShipmentReceipt object."
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementShipmentReceiptTransactionLotIdentification;
Modeler.register(ElementShipmentReceiptTransactionLotIdentification, "ElementShipmentReceiptTransactionLotIdentification");
