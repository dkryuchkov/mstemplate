var Modeler = require("../Modeler.js");
var className = 'ElementEmergencyPurchaseOrderReference';

var ElementEmergencyPurchaseOrderReference = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  EmergencyPurchaseOrderReference: {
      type: "TypePurchaseOrderReferenceType",
      wsdlDefinition: {
        name: "EmergencyPurchaseOrderReference",
        type: "PurchaseOrderReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Reference to an Emergency Purchase Order. An Emergency Purchase Order is a document that does not go through the standard Purchase Order processing flow"
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
	  EmergencyPurchaseOrderReference: {
      type: "TypePurchaseOrderReferenceType",
      wsdlDefinition: {
        name: "EmergencyPurchaseOrderReference",
        type: "PurchaseOrderReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Reference to an Emergency Purchase Order. An Emergency Purchase Order is a document that does not go through the standard Purchase Order processing flow"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementEmergencyPurchaseOrderReference;
Modeler.register(ElementEmergencyPurchaseOrderReference, "ElementEmergencyPurchaseOrderReference");
