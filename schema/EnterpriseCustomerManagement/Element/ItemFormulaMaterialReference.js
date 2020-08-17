var Modeler = require("../Modeler.js");
var className = 'ElementItemFormulaMaterialReference';

var ElementItemFormulaMaterialReference = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  ItemFormulaMaterialReference: {
      type: "TypeItemFormulaMaterialReferenceType",
      wsdlDefinition: {
        name: "ItemFormulaMaterialReference",
        type: "ItemFormulaMaterialReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Reference to a material within an item formula"
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
	  ItemFormulaMaterialReference: {
      type: "TypeItemFormulaMaterialReferenceType",
      wsdlDefinition: {
        name: "ItemFormulaMaterialReference",
        type: "ItemFormulaMaterialReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Reference to a material within an item formula"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementItemFormulaMaterialReference;
Modeler.register(ElementItemFormulaMaterialReference, "ElementItemFormulaMaterialReference");
