var Modeler = require("../Modeler.js");
var className = 'ElementInventoryTransactionIdentification';

var ElementInventoryTransactionIdentification = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  InventoryTransactionIdentification: {
      type: "TypeInventoryTransactionIdentificationType",
      wsdlDefinition: {
        name: "InventoryTransactionIdentification",
        type: "InventoryTransactionIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Unique identification of an Item Structure Component Item"
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
	  InventoryTransactionIdentification: {
      type: "TypeInventoryTransactionIdentificationType",
      wsdlDefinition: {
        name: "InventoryTransactionIdentification",
        type: "InventoryTransactionIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Unique identification of an Item Structure Component Item"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementInventoryTransactionIdentification;
Modeler.register(ElementInventoryTransactionIdentification, "ElementInventoryTransactionIdentification");
