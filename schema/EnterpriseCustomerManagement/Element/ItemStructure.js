var Modeler = require("../Modeler.js");
var className = 'ElementItemStructure';

var ElementItemStructure = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  ItemStructure: {
      type: "TypeItemStructureType",
      wsdlDefinition: {
        name: "ItemStructure",
        type: "ItemStructureType",
        "xsd:annotation": {
          "xsd:documentation": "Item Structure EBO is used for describing the composition of different types of item structures such as Sales Kit, Product Bundle etc. It provides a single level of item composition. Thus, the Item Structure EBO gives only the immediate children items but not the composition of the children items. If a child item is a complex item, it will have its own item structure which will provide its composition"
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
	  ItemStructure: {
      type: "TypeItemStructureType",
      wsdlDefinition: {
        name: "ItemStructure",
        type: "ItemStructureType",
        "xsd:annotation": {
          "xsd:documentation": "Item Structure EBO is used for describing the composition of different types of item structures such as Sales Kit, Product Bundle etc. It provides a single level of item composition. Thus, the Item Structure EBO gives only the immediate children items but not the composition of the children items. If a child item is a complex item, it will have its own item structure which will provide its composition"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementItemStructure;
Modeler.register(ElementItemStructure, "ElementItemStructure");
