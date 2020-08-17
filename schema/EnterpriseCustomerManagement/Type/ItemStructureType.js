var Modeler = require("../Modeler.js");
var className = 'TypeItemStructureType';

var TypeItemStructureType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  Identification: {
      type: "TypeIdentificationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Identification",
        type: "IdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Represents the unique identification of the item structure"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    TypeCode: {
      type: "TypeCodeType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:TypeCode",
        type: "CodeType",
        "xsd:annotation": {
          "xsd:documentation": "Assembly type for the Item Structure"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Name: {
      type: "TypeNameType",
      wsdlDefinition: {
        maxOccurs: "unbounded",
        minOccurs: "0",
        name: "WL5G3N2:Name",
        type: "NameType",
        "xsd:annotation": {
          "xsd:documentation": "The name assigned to the item structure"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    },
    AttributeOverrideAllowedIndicator: {
      type: "TypeIndicatorType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:AttributeOverrideAllowedIndicator",
        type: "IndicatorType",
        "xsd:annotation": {
          "xsd:documentation": "Indicates whether the attributes of the referenced item structure may be overridden"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    ImplementationDate: {
      type: "TypeDateType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:ImplementationDate",
        type: "DateType",
        "xsd:annotation": {
          "xsd:documentation": "Date of implementation of the item structure"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    EffectivityControlCode: {
      type: "TypeCodeType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:EffectivityControlCode",
        type: "CodeType",
        "xsd:annotation": {
          "xsd:documentation": "Effectivity control code - date / revision / unit"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    PrimaryIndicator: {
      type: "TypeIndicatorType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:PrimaryIndicator",
        type: "IndicatorType",
        "xsd:annotation": {
          "xsd:documentation": "Indicates whether the item structure is the primary one for the item"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Note: {
      type: "TypeNoteType",
      wsdlDefinition: {
        maxOccurs: "unbounded",
        minOccurs: "0",
        name: "WL5G3N2:Note",
        type: "NoteType",
        "xsd:annotation": {
          "xsd:documentation": "The notes applicable to the item"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    },
    ItemReference: {
      type: "TypeItemReferenceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:ItemReference",
        type: "ItemReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Refers to the item for which this item structure is defined"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    CommonItemStructureReference: {
      type: "TypeItemStructureReferenceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:CommonItemStructureReference",
        type: "ItemStructureReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Identifies the item structure whose definition has been inherited by this item structure"
        },
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
        "xsd:annotation": {
          "xsd:documentation": "Represents the unique identification of the item structure"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    TypeCode: {
      type: "TypeCodeType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:TypeCode",
        type: "CodeType",
        "xsd:annotation": {
          "xsd:documentation": "Assembly type for the Item Structure"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Name: {
      type: "TypeNameType",
      wsdlDefinition: {
        maxOccurs: "unbounded",
        minOccurs: "0",
        name: "WL5G3N2:Name",
        type: "NameType",
        "xsd:annotation": {
          "xsd:documentation": "The name assigned to the item structure"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    },
    AttributeOverrideAllowedIndicator: {
      type: "TypeIndicatorType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:AttributeOverrideAllowedIndicator",
        type: "IndicatorType",
        "xsd:annotation": {
          "xsd:documentation": "Indicates whether the attributes of the referenced item structure may be overridden"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    ImplementationDate: {
      type: "TypeDateType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:ImplementationDate",
        type: "DateType",
        "xsd:annotation": {
          "xsd:documentation": "Date of implementation of the item structure"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    EffectivityControlCode: {
      type: "TypeCodeType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:EffectivityControlCode",
        type: "CodeType",
        "xsd:annotation": {
          "xsd:documentation": "Effectivity control code - date / revision / unit"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    PrimaryIndicator: {
      type: "TypeIndicatorType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:PrimaryIndicator",
        type: "IndicatorType",
        "xsd:annotation": {
          "xsd:documentation": "Indicates whether the item structure is the primary one for the item"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Note: {
      type: "TypeNoteType",
      wsdlDefinition: {
        maxOccurs: "unbounded",
        minOccurs: "0",
        name: "WL5G3N2:Note",
        type: "NoteType",
        "xsd:annotation": {
          "xsd:documentation": "The notes applicable to the item"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    },
    ItemReference: {
      type: "TypeItemReferenceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:ItemReference",
        type: "ItemReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Refers to the item for which this item structure is defined"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    CommonItemStructureReference: {
      type: "TypeItemStructureReferenceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:CommonItemStructureReference",
        type: "ItemStructureReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Identifies the item structure whose definition has been inherited by this item structure"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeItemStructureType;
Modeler.register(TypeItemStructureType, "TypeItemStructureType");
