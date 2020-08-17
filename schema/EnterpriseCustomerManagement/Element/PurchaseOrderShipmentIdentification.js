var Modeler = require("../Modeler.js");
var className = 'ElementPurchaseOrderShipmentIdentification';

var ElementPurchaseOrderShipmentIdentification = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  PurchaseOrderShipmentIdentification: {
      type: "TypePurchaseOrderShipmentIdentificationType",
      wsdlDefinition: {
        name: "PurchaseOrderShipmentIdentification",
        type: "PurchaseOrderShipmentIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Unique Identification of a Purchase Order Shipment Line"
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
	  PurchaseOrderShipmentIdentification: {
      type: "TypePurchaseOrderShipmentIdentificationType",
      wsdlDefinition: {
        name: "PurchaseOrderShipmentIdentification",
        type: "PurchaseOrderShipmentIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Unique Identification of a Purchase Order Shipment Line"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementPurchaseOrderShipmentIdentification;
Modeler.register(ElementPurchaseOrderShipmentIdentification, "ElementPurchaseOrderShipmentIdentification");
