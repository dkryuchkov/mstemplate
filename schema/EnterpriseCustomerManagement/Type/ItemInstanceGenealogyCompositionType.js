var Modeler = require("../Modeler.js");
var className = 'TypeItemInstanceGenealogyCompositionType';

var TypeItemInstanceGenealogyCompositionType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  Identification: {
      type: "TypeIdentificationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Identification",
        type: "IdentificationType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    ItemReference: {
      type: "TypeItemReferenceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:ItemReference",
        type: "ItemReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Reference to an item that is the definition of the sibling ItemInstance element."
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    ItemInstance: {
      type: "TypeItemInstanceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:ItemInstance",
        type: "ItemInstanceType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    ParentItemInstanceGenealogyCompositionIdentification: {
      type: "TypeItemInstanceGenealogyCompositionIdentificationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:ParentItemInstanceGenealogyCompositionIdentification",
        type: "ItemInstanceGenealogyCompositionIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Identification of the genealogy item instance's parent.  This parent ID is used to define the hierarchy of item instances within the genealogy."
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Custom: {
      type: "TypeCustomItemInstanceGenealogyCompositionType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Custom",
        type: "corecomcust:CustomItemInstanceGenealogyCompositionType",
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
	  Identification: {
      type: "TypeIdentificationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Identification",
        type: "IdentificationType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    ItemReference: {
      type: "TypeItemReferenceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:ItemReference",
        type: "ItemReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Reference to an item that is the definition of the sibling ItemInstance element."
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    ItemInstance: {
      type: "TypeItemInstanceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:ItemInstance",
        type: "ItemInstanceType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    ParentItemInstanceGenealogyCompositionIdentification: {
      type: "TypeItemInstanceGenealogyCompositionIdentificationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:ParentItemInstanceGenealogyCompositionIdentification",
        type: "ItemInstanceGenealogyCompositionIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Identification of the genealogy item instance's parent.  This parent ID is used to define the hierarchy of item instances within the genealogy."
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Custom: {
      type: "TypeCustomItemInstanceGenealogyCompositionType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Custom",
        type: "corecomcust:CustomItemInstanceGenealogyCompositionType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeItemInstanceGenealogyCompositionType;
Modeler.register(TypeItemInstanceGenealogyCompositionType, "TypeItemInstanceGenealogyCompositionType");
