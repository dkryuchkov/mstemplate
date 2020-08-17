var Modeler = require("../Modeler.js");
var className = 'ElementShipmentReceiptItemInstanceIdentification';

var ElementShipmentReceiptItemInstanceIdentification = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  ShipmentReceiptItemInstanceIdentification: {
      type: "TypeShipmentReceiptItemInstanceIdentificationType",
      wsdlDefinition: {
        name: "ShipmentReceiptItemInstanceIdentification",
        type: "ShipmentReceiptItemInstanceIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Unique identification to a ShipmentReceiptItemInstance within the ShipmentReceipt object."
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
	  ShipmentReceiptItemInstanceIdentification: {
      type: "TypeShipmentReceiptItemInstanceIdentificationType",
      wsdlDefinition: {
        name: "ShipmentReceiptItemInstanceIdentification",
        type: "ShipmentReceiptItemInstanceIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Unique identification to a ShipmentReceiptItemInstance within the ShipmentReceipt object."
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementShipmentReceiptItemInstanceIdentification;
Modeler.register(ElementShipmentReceiptItemInstanceIdentification, "ElementShipmentReceiptItemInstanceIdentification");
