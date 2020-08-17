var Modeler = require("../Modeler.js");
var className = 'TypeShipmentReceiptTransactionReferenceType';

var TypeShipmentReceiptTransactionReferenceType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  ShipmentReceiptIdentification: {
      type: "TypeShipmentReceiptIdentificationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:ShipmentReceiptIdentification",
        type: "ShipmentReceiptIdentificationType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    ShipmentReceiptLineIdentification: {
      type: "TypeShipmentReceiptLineIdentificationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:ShipmentReceiptLineIdentification",
        type: "ShipmentReceiptLineIdentificationType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    ShipmentReceiptTransactionIdentification: {
      type: "TypeShipmentReceiptTransactionIdentificationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:ShipmentReceiptTransactionIdentification",
        type: "ShipmentReceiptTransactionIdentificationType",
        attribute: false,
        ns: "WL5G3N2"
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
	  ShipmentReceiptIdentification: {
      type: "TypeShipmentReceiptIdentificationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:ShipmentReceiptIdentification",
        type: "ShipmentReceiptIdentificationType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    ShipmentReceiptLineIdentification: {
      type: "TypeShipmentReceiptLineIdentificationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:ShipmentReceiptLineIdentification",
        type: "ShipmentReceiptLineIdentificationType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    ShipmentReceiptTransactionIdentification: {
      type: "TypeShipmentReceiptTransactionIdentificationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:ShipmentReceiptTransactionIdentification",
        type: "ShipmentReceiptTransactionIdentificationType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeShipmentReceiptTransactionReferenceType;
Modeler.register(TypeShipmentReceiptTransactionReferenceType, "TypeShipmentReceiptTransactionReferenceType");
