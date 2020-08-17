var Modeler = require("../Modeler.js");
var className = 'TypeInventoryTransactionReferenceType';

var TypeInventoryTransactionReferenceType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  InventoryTransactionIdentification: {
      type: "TypeInventoryTransactionIdentificationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:InventoryTransactionIdentification",
        type: "InventoryTransactionIdentificationType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Custom: {
      type: "TypeCustomInventoryTransactionReferenceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Custom",
        type: "corecomcust:CustomInventoryTransactionReferenceType",
        attribute: false,
        ns: "WL5G3N2"
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
        minOccurs: "0",
        name: "WL5G3N2:InventoryTransactionIdentification",
        type: "InventoryTransactionIdentificationType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Custom: {
      type: "TypeCustomInventoryTransactionReferenceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Custom",
        type: "corecomcust:CustomInventoryTransactionReferenceType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeInventoryTransactionReferenceType;
Modeler.register(TypeInventoryTransactionReferenceType, "TypeInventoryTransactionReferenceType");
