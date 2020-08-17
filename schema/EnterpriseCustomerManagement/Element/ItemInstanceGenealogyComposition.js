var Modeler = require("../Modeler.js");
var className = 'ElementItemInstanceGenealogyComposition';

var ElementItemInstanceGenealogyComposition = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  ItemInstanceGenealogyComposition: {
      type: "TypeItemInstanceGenealogyCompositionType",
      wsdlDefinition: {
        name: "ItemInstanceGenealogyComposition",
        type: "ItemInstanceGenealogyCompositionType",
        "xsd:annotation": {
          "xsd:documentation": "This component allows for a hierarchy of Item Instances (or lower level sealable units) that make up an Item Instance Genealogy to be specified."
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
	  ItemInstanceGenealogyComposition: {
      type: "TypeItemInstanceGenealogyCompositionType",
      wsdlDefinition: {
        name: "ItemInstanceGenealogyComposition",
        type: "ItemInstanceGenealogyCompositionType",
        "xsd:annotation": {
          "xsd:documentation": "This component allows for a hierarchy of Item Instances (or lower level sealable units) that make up an Item Instance Genealogy to be specified."
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementItemInstanceGenealogyComposition;
Modeler.register(ElementItemInstanceGenealogyComposition, "ElementItemInstanceGenealogyComposition");
