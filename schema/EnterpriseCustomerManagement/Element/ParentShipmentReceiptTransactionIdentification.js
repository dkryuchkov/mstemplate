var Modeler = require("../Modeler.js");
var className = 'ElementParentShipmentReceiptTransactionIdentification';

var ElementParentShipmentReceiptTransactionIdentification = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  ParentShipmentReceiptTransactionIdentification: {
      type: "TypeShipmentReceiptTransactionIdentificationType",
      wsdlDefinition: {
        name: "ParentShipmentReceiptTransactionIdentification",
        type: "ShipmentReceiptTransactionIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "An identification pointing a parent Shipment Receipt Transaction of the containing Shipment Receipt Transaction."
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
	  ParentShipmentReceiptTransactionIdentification: {
      type: "TypeShipmentReceiptTransactionIdentificationType",
      wsdlDefinition: {
        name: "ParentShipmentReceiptTransactionIdentification",
        type: "ShipmentReceiptTransactionIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "An identification pointing a parent Shipment Receipt Transaction of the containing Shipment Receipt Transaction."
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementParentShipmentReceiptTransactionIdentification;
Modeler.register(ElementParentShipmentReceiptTransactionIdentification, "ElementParentShipmentReceiptTransactionIdentification");
