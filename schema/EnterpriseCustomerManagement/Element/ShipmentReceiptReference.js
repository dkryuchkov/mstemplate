var Modeler = require("../Modeler.js");
var className = 'ElementShipmentReceiptReference';

var ElementShipmentReceiptReference = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  ShipmentReceiptReference: {
      type: "TypeShipmentReceiptReferenceType",
      wsdlDefinition: {
        name: "ShipmentReceiptReference",
        type: "ShipmentReceiptReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Refer to an instance of the ShipmentReceipt object."
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
	  ShipmentReceiptReference: {
      type: "TypeShipmentReceiptReferenceType",
      wsdlDefinition: {
        name: "ShipmentReceiptReference",
        type: "ShipmentReceiptReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Refer to an instance of the ShipmentReceipt object."
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementShipmentReceiptReference;
Modeler.register(ElementShipmentReceiptReference, "ElementShipmentReceiptReference");
