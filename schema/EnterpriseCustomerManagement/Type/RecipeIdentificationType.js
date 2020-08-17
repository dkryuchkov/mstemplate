var Modeler = require("../Modeler.js");
var className = 'TypeRecipeIdentificationType';

var TypeRecipeIdentificationType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  BusinessComponentID: {
      type: "TypeIdentifierType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:BusinessComponentID",
        type: "IdentifierType",
        "xsd:annotation": {
          "xsd:documentation": "Unique Key for the application\nagnostic representation of the objectinstance. Business Documents generated\nby AIA applications will have the\nBusinessComponentID necessarily populated.\n\nThe BusinessComponentID will be generated using the API provided by AIA Infrastructure"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    ID: {
      type: "TypeIdentifierType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:ID",
        type: "IdentifierType",
        "xsd:annotation": {
          "xsd:documentation": "Business Friendly Identifier found in the participating application for this object instance. Business documents generated by AIA applications will have these populated wherever they are applicable. PO Number, Order Number are some of the examples"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    ContextID: {
      type: "TypeIdentifierType",
      wsdlDefinition: {
        maxOccurs: "unbounded",
        minOccurs: "0",
        name: "WL5G3N2:ContextID",
        type: "IdentifierType",
        "xsd:annotation": {
          "xsd:documentation": "Optional element to identify additional qualifiers for the ID. Used in the case of multi-part keys - for example if an Item is unique within a set, then the Item Number would be the ID and the Set ID value would be a ContextID value"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    },
    ApplicationObjectKey: {
      type: "TypeObjectKeyType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:ApplicationObjectKey",
        type: "ObjectKeyType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    AlternateObjectKey: {
      type: "TypeObjectKeyType",
      wsdlDefinition: {
        maxOccurs: "unbounded",
        minOccurs: "0",
        name: "WL5G3N2:AlternateObjectKey",
        type: "ObjectKeyType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    },
    Revision: {
      type: "TypeRevisionType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Revision",
        type: "RevisionType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    undefined: {
      type: "string",
      wsdlDefinition: {
        base: "IdentificationType",
        attribute: false,
        type: "xsd:string"
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
	  BusinessComponentID: {
      type: "TypeIdentifierType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:BusinessComponentID",
        type: "IdentifierType",
        "xsd:annotation": {
          "xsd:documentation": "Unique Key for the application\nagnostic representation of the objectinstance. Business Documents generated\nby AIA applications will have the\nBusinessComponentID necessarily populated.\n\nThe BusinessComponentID will be generated using the API provided by AIA Infrastructure"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    ID: {
      type: "TypeIdentifierType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:ID",
        type: "IdentifierType",
        "xsd:annotation": {
          "xsd:documentation": "Business Friendly Identifier found in the participating application for this object instance. Business documents generated by AIA applications will have these populated wherever they are applicable. PO Number, Order Number are some of the examples"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    ContextID: {
      type: "TypeIdentifierType",
      wsdlDefinition: {
        maxOccurs: "unbounded",
        minOccurs: "0",
        name: "WL5G3N2:ContextID",
        type: "IdentifierType",
        "xsd:annotation": {
          "xsd:documentation": "Optional element to identify additional qualifiers for the ID. Used in the case of multi-part keys - for example if an Item is unique within a set, then the Item Number would be the ID and the Set ID value would be a ContextID value"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    },
    ApplicationObjectKey: {
      type: "TypeObjectKeyType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:ApplicationObjectKey",
        type: "ObjectKeyType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    AlternateObjectKey: {
      type: "TypeObjectKeyType",
      wsdlDefinition: {
        maxOccurs: "unbounded",
        minOccurs: "0",
        name: "WL5G3N2:AlternateObjectKey",
        type: "ObjectKeyType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    },
    Revision: {
      type: "TypeRevisionType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Revision",
        type: "RevisionType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    undefined: {
      type: "string",
      wsdlDefinition: {
        base: "IdentificationType",
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeRecipeIdentificationType;
Modeler.register(TypeRecipeIdentificationType, "TypeRecipeIdentificationType");
