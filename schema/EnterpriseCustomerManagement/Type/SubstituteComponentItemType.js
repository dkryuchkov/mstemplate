var Modeler = require("../Modeler.js");
var className = 'TypeSubstituteComponentItemType';

var TypeSubstituteComponentItemType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  Identification: {
      type: "TypeIdentificationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Identification",
        type: "IdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Unique identifier for the substitute component item"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Quantity: {
      type: "TypeQuantityType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Quantity",
        type: "QuantityType",
        "xsd:annotation": {
          "xsd:documentation": "Substitute component quantity"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    FractionAllowedIndicator: {
      type: "TypeIndicatorType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:FractionAllowedIndicator",
        type: "IndicatorType",
        "xsd:annotation": {
          "xsd:documentation": "Indicates whether the substitute component quantity could be a fraction or needs to be a whole number"
        },
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
          "xsd:documentation": "Refers to the item that serves as a substitute for the component item"
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
          "xsd:documentation": "Unique identifier for the substitute component item"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Quantity: {
      type: "TypeQuantityType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Quantity",
        type: "QuantityType",
        "xsd:annotation": {
          "xsd:documentation": "Substitute component quantity"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    FractionAllowedIndicator: {
      type: "TypeIndicatorType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:FractionAllowedIndicator",
        type: "IndicatorType",
        "xsd:annotation": {
          "xsd:documentation": "Indicates whether the substitute component quantity could be a fraction or needs to be a whole number"
        },
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
          "xsd:documentation": "Refers to the item that serves as a substitute for the component item"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeSubstituteComponentItemType;
Modeler.register(TypeSubstituteComponentItemType, "TypeSubstituteComponentItemType");
