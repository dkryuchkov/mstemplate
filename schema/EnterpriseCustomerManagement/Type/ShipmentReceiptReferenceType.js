var Modeler = require("../Modeler.js");
var className = 'TypeShipmentReceiptReferenceType';

var TypeShipmentReceiptReferenceType = function(json, parentObj) {
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
    }
	}, parentObj, json);
};

module.exports = TypeShipmentReceiptReferenceType;
Modeler.register(TypeShipmentReceiptReferenceType, "TypeShipmentReceiptReferenceType");
