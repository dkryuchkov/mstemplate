var Modeler = require("../Modeler.js");
var className = 'ElementSuggestedItemCatalogReference';

var ElementSuggestedItemCatalogReference = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  SuggestedItemCatalogReference: {
      type: "TypeItemCatalogReferenceType",
      wsdlDefinition: {
        name: "SuggestedItemCatalogReference",
        type: "ItemCatalogReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Used on a requisition to identify a catalog where  details about the line item can be obtained"
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
	  SuggestedItemCatalogReference: {
      type: "TypeItemCatalogReferenceType",
      wsdlDefinition: {
        name: "SuggestedItemCatalogReference",
        type: "ItemCatalogReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Used on a requisition to identify a catalog where  details about the line item can be obtained"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementSuggestedItemCatalogReference;
Modeler.register(ElementSuggestedItemCatalogReference, "ElementSuggestedItemCatalogReference");
