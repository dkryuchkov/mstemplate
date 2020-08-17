var Modeler = require("../Modeler.js");
var className = 'ElementItemCatalogReference';

var ElementItemCatalogReference = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  ItemCatalogReference: {
      type: "TypeItemCatalogReferenceType",
      wsdlDefinition: {
        name: "ItemCatalogReference",
        type: "ItemCatalogReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "An item catalog represents a collection of items"
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
	  ItemCatalogReference: {
      type: "TypeItemCatalogReferenceType",
      wsdlDefinition: {
        name: "ItemCatalogReference",
        type: "ItemCatalogReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "An item catalog represents a collection of items"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementItemCatalogReference;
Modeler.register(ElementItemCatalogReference, "ElementItemCatalogReference");
