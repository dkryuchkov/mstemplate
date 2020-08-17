var Modeler = require("../Modeler.js");
var className = 'ElementShipmentReceiptIdentification';

var ElementShipmentReceiptIdentification = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  ShipmentReceiptIdentification: {
      type: "TypeShipmentReceiptIdentificationType",
      wsdlDefinition: {
        name: "ShipmentReceiptIdentification",
        type: "ShipmentReceiptIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Unique identification of the Shipment Receipt object."
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
	  ShipmentReceiptIdentification: {
      type: "TypeShipmentReceiptIdentificationType",
      wsdlDefinition: {
        name: "ShipmentReceiptIdentification",
        type: "ShipmentReceiptIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Unique identification of the Shipment Receipt object."
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementShipmentReceiptIdentification;
Modeler.register(ElementShipmentReceiptIdentification, "ElementShipmentReceiptIdentification");
