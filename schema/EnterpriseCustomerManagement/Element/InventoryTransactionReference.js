var Modeler = require("../Modeler.js");
var className = 'ElementInventoryTransactionReference';

var ElementInventoryTransactionReference = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  InventoryTransactionReference: {
      type: "TypeInventoryTransactionReferenceType",
      wsdlDefinition: {
        name: "InventoryTransactionReference",
        type: "InventoryTransactionReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Reference to an Inventory Transaction"
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
	  InventoryTransactionReference: {
      type: "TypeInventoryTransactionReferenceType",
      wsdlDefinition: {
        name: "InventoryTransactionReference",
        type: "InventoryTransactionReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Reference to an Inventory Transaction"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementInventoryTransactionReference;
Modeler.register(ElementInventoryTransactionReference, "ElementInventoryTransactionReference");
