var Modeler = require("../Modeler.js");
var className = 'ElementShipmentReceiptItemInstanceRangeIdentification';

var ElementShipmentReceiptItemInstanceRangeIdentification = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  ShipmentReceiptItemInstanceRangeIdentification: {
      type: "TypeShipmentReceiptItemInstanceRangeIdentificationType",
      wsdlDefinition: {
        name: "ShipmentReceiptItemInstanceRangeIdentification",
        type: "ShipmentReceiptItemInstanceRangeIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Unique identification to a ShipmentReceiptItemInstanceRange within the ShipmentReceipt object."
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
	  ShipmentReceiptItemInstanceRangeIdentification: {
      type: "TypeShipmentReceiptItemInstanceRangeIdentificationType",
      wsdlDefinition: {
        name: "ShipmentReceiptItemInstanceRangeIdentification",
        type: "ShipmentReceiptItemInstanceRangeIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Unique identification to a ShipmentReceiptItemInstanceRange within the ShipmentReceipt object."
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementShipmentReceiptItemInstanceRangeIdentification;
Modeler.register(ElementShipmentReceiptItemInstanceRangeIdentification, "ElementShipmentReceiptItemInstanceRangeIdentification");
