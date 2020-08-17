var Modeler = require("../Modeler.js");
var className = 'ElementCustomerPurchaseOrderShipmentReference';

var ElementCustomerPurchaseOrderShipmentReference = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomerPurchaseOrderShipmentReference: {
      type: "TypePurchaseOrderShipmentReferenceType",
      wsdlDefinition: {
        name: "CustomerPurchaseOrderShipmentReference",
        type: "PurchaseOrderShipmentReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Reference to a shipment line on a customer purchase order"
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
	  CustomerPurchaseOrderShipmentReference: {
      type: "TypePurchaseOrderShipmentReferenceType",
      wsdlDefinition: {
        name: "CustomerPurchaseOrderShipmentReference",
        type: "PurchaseOrderShipmentReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Reference to a shipment line on a customer purchase order"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementCustomerPurchaseOrderShipmentReference;
Modeler.register(ElementCustomerPurchaseOrderShipmentReference, "ElementCustomerPurchaseOrderShipmentReference");
