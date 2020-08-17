var Modeler = require("../Modeler.js");
var className = 'ElementWarrantySupplierPartyReference';

var ElementWarrantySupplierPartyReference = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  WarrantySupplierPartyReference: {
      type: "TypeWarrantySupplierPartyReferenceType",
      wsdlDefinition: {
        name: "WarrantySupplierPartyReference",
        type: "WarrantySupplierPartyReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Refers to a party which provides warranty service, e.g., it is used in the Item object to refers to the party which will provide warranty service for the item."
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
	  WarrantySupplierPartyReference: {
      type: "TypeWarrantySupplierPartyReferenceType",
      wsdlDefinition: {
        name: "WarrantySupplierPartyReference",
        type: "WarrantySupplierPartyReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Refers to a party which provides warranty service, e.g., it is used in the Item object to refers to the party which will provide warranty service for the item."
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementWarrantySupplierPartyReference;
Modeler.register(ElementWarrantySupplierPartyReference, "ElementWarrantySupplierPartyReference");
