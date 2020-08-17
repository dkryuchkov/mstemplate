var Modeler = require("../Modeler.js");
var className = 'ElementPurchaseOrderLineIdentification';

var ElementPurchaseOrderLineIdentification = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  PurchaseOrderLineIdentification: {
      type: "TypePurchaseOrderLineIdentificationType",
      wsdlDefinition: {
        name: "PurchaseOrderLineIdentification",
        type: "PurchaseOrderLineIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Unique Identification of a Purchase Order Line"
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
	  PurchaseOrderLineIdentification: {
      type: "TypePurchaseOrderLineIdentificationType",
      wsdlDefinition: {
        name: "PurchaseOrderLineIdentification",
        type: "PurchaseOrderLineIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Unique Identification of a Purchase Order Line"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementPurchaseOrderLineIdentification;
Modeler.register(ElementPurchaseOrderLineIdentification, "ElementPurchaseOrderLineIdentification");
