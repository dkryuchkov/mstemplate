var Modeler = require("../Modeler.js");
var className = 'ElementCustomerPurchaseOrderReference';

var ElementCustomerPurchaseOrderReference = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomerPurchaseOrderReference: {
      type: "TypePurchaseOrderReferenceType",
      wsdlDefinition: {
        name: "CustomerPurchaseOrderReference",
        type: "PurchaseOrderReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Reference to the customer's purchase order. Typically used by other order processing and billing applications such as Sales Order, Invoicing etc"
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
	  CustomerPurchaseOrderReference: {
      type: "TypePurchaseOrderReferenceType",
      wsdlDefinition: {
        name: "CustomerPurchaseOrderReference",
        type: "PurchaseOrderReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Reference to the customer's purchase order. Typically used by other order processing and billing applications such as Sales Order, Invoicing etc"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementCustomerPurchaseOrderReference;
Modeler.register(ElementCustomerPurchaseOrderReference, "ElementCustomerPurchaseOrderReference");
