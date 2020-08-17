var Modeler = require("../Modeler.js");
var className = 'ElementPurchaseOrderReference';

var ElementPurchaseOrderReference = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  PurchaseOrderReference: {
      type: "TypePurchaseOrderReferenceType",
      wsdlDefinition: {
        name: "PurchaseOrderReference",
        type: "PurchaseOrderReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Reference to a Purchase Order. A Purchase Order is a document used to request a vendor to supply a product or service at a specified price,in return for payment and providing specifications and quantities. A Purchase Order becomes a legally binding contract once the supplier accepts it"
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
	  PurchaseOrderReference: {
      type: "TypePurchaseOrderReferenceType",
      wsdlDefinition: {
        name: "PurchaseOrderReference",
        type: "PurchaseOrderReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Reference to a Purchase Order. A Purchase Order is a document used to request a vendor to supply a product or service at a specified price,in return for payment and providing specifications and quantities. A Purchase Order becomes a legally binding contract once the supplier accepts it"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementPurchaseOrderReference;
Modeler.register(ElementPurchaseOrderReference, "ElementPurchaseOrderReference");
