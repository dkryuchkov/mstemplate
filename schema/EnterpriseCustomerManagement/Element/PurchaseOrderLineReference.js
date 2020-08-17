var Modeler = require("../Modeler.js");
var className = 'ElementPurchaseOrderLineReference';

var ElementPurchaseOrderLineReference = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  PurchaseOrderLineReference: {
      type: "TypePurchaseOrderLineReferenceType",
      wsdlDefinition: {
        name: "PurchaseOrderLineReference",
        type: "PurchaseOrderLineReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Reference to a Line on a Purchase Order"
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
	  PurchaseOrderLineReference: {
      type: "TypePurchaseOrderLineReferenceType",
      wsdlDefinition: {
        name: "PurchaseOrderLineReference",
        type: "PurchaseOrderLineReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Reference to a Line on a Purchase Order"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementPurchaseOrderLineReference;
Modeler.register(ElementPurchaseOrderLineReference, "ElementPurchaseOrderLineReference");
