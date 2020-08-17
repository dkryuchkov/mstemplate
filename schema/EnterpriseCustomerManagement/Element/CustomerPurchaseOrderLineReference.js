var Modeler = require("../Modeler.js");
var className = 'ElementCustomerPurchaseOrderLineReference';

var ElementCustomerPurchaseOrderLineReference = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomerPurchaseOrderLineReference: {
      type: "TypePurchaseOrderLineReferenceType",
      wsdlDefinition: {
        name: "CustomerPurchaseOrderLineReference",
        type: "PurchaseOrderLineReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Reference to a Line on a Customer Purchase Order"
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
	  CustomerPurchaseOrderLineReference: {
      type: "TypePurchaseOrderLineReferenceType",
      wsdlDefinition: {
        name: "CustomerPurchaseOrderLineReference",
        type: "PurchaseOrderLineReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Reference to a Line on a Customer Purchase Order"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementCustomerPurchaseOrderLineReference;
Modeler.register(ElementCustomerPurchaseOrderLineReference, "ElementCustomerPurchaseOrderLineReference");
