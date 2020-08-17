var Modeler = require("../Modeler.js");
var className = 'ElementPurchaseOrderShipmentReference';

var ElementPurchaseOrderShipmentReference = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  PurchaseOrderShipmentReference: {
      type: "TypePurchaseOrderShipmentReferenceType",
      wsdlDefinition: {
        name: "PurchaseOrderShipmentReference",
        type: "PurchaseOrderShipmentReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Reference to a shipment line on a purchase order"
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
	  PurchaseOrderShipmentReference: {
      type: "TypePurchaseOrderShipmentReferenceType",
      wsdlDefinition: {
        name: "PurchaseOrderShipmentReference",
        type: "PurchaseOrderShipmentReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Reference to a shipment line on a purchase order"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementPurchaseOrderShipmentReference;
Modeler.register(ElementPurchaseOrderShipmentReference, "ElementPurchaseOrderShipmentReference");
