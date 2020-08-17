var Modeler = require("../Modeler.js");
var className = 'TypeItemInstanceGenealogyType';

var TypeItemInstanceGenealogyType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  ItemInstance: {
      type: "TypeItemInstanceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:ItemInstance",
        type: "ItemInstanceType",
        "xsd:annotation": {
          "xsd:documentation": "Identification of a unique instance of an item including serial number, RFID and lot properties. The parent Item Instance Genealogy is the genealogy of this Item Instance."
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    ItemInstanceGenealogyComposition: {
      type: "TypeItemInstanceGenealogyCompositionType",
      wsdlDefinition: {
        maxOccurs: "unbounded",
        minOccurs: "0",
        name: "WL5G3N2:ItemInstanceGenealogyComposition",
        type: "ItemInstanceGenealogyCompositionType",
        "xsd:annotation": {
          "xsd:documentation": "This component allows for a hierarchy of Item Instances (or lower level sealable units) that make up an Item Instance Genealogy to be specified."
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    }
	};
	
	if(parentObj === 'getWsdlDefinition')
	{
		return data;
	}
	
	// Class property definitions here:
	Modeler.extend(className, {
	  ItemInstance: {
      type: "TypeItemInstanceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:ItemInstance",
        type: "ItemInstanceType",
        "xsd:annotation": {
          "xsd:documentation": "Identification of a unique instance of an item including serial number, RFID and lot properties. The parent Item Instance Genealogy is the genealogy of this Item Instance."
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    ItemInstanceGenealogyComposition: {
      type: "TypeItemInstanceGenealogyCompositionType",
      wsdlDefinition: {
        maxOccurs: "unbounded",
        minOccurs: "0",
        name: "WL5G3N2:ItemInstanceGenealogyComposition",
        type: "ItemInstanceGenealogyCompositionType",
        "xsd:annotation": {
          "xsd:documentation": "This component allows for a hierarchy of Item Instances (or lower level sealable units) that make up an Item Instance Genealogy to be specified."
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeItemInstanceGenealogyType;
Modeler.register(TypeItemInstanceGenealogyType, "TypeItemInstanceGenealogyType");
