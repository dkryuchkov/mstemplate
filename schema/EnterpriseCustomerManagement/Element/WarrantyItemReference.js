var Modeler = require("../Modeler.js");
var className = 'ElementWarrantyItemReference';

var ElementWarrantyItemReference = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  WarrantyItemReference: {
      type: "TypeWarrantyItemReferenceType",
      wsdlDefinition: {
        name: "WarrantyItemReference",
        type: "WarrantyItemReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Reference to an item which is a warranty, e.g., it is used within a definition of an item to indicates a corresponding warrany item"
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
	  WarrantyItemReference: {
      type: "TypeWarrantyItemReferenceType",
      wsdlDefinition: {
        name: "WarrantyItemReference",
        type: "WarrantyItemReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Reference to an item which is a warranty, e.g., it is used within a definition of an item to indicates a corresponding warrany item"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementWarrantyItemReference;
Modeler.register(ElementWarrantyItemReference, "ElementWarrantyItemReference");
