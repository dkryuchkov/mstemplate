var Modeler = require("../Modeler.js");
var className = 'ElementItemCatalogIdentification';

var ElementItemCatalogIdentification = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  ItemCatalogIdentification: {
      type: "TypeItemCatalogIdentificationType",
      wsdlDefinition: {
        name: "ItemCatalogIdentification",
        type: "ItemCatalogIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Unique Identification of an Item Catalog"
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
	  ItemCatalogIdentification: {
      type: "TypeItemCatalogIdentificationType",
      wsdlDefinition: {
        name: "ItemCatalogIdentification",
        type: "ItemCatalogIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Unique Identification of an Item Catalog"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementItemCatalogIdentification;
Modeler.register(ElementItemCatalogIdentification, "ElementItemCatalogIdentification");
