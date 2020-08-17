var Modeler = require("../Modeler.js");
var className = 'TypeObjectKeyType';

var TypeObjectKeyType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  ID: {
      type: "TypeIdentifierType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:ID",
        type: "IdentifierType",
        "xsd:annotation": {
          "xsd:documentation": "Key Identifier"
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
          "xsd:documentation": "Key Qualifiers"
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
	  ID: {
      type: "TypeIdentifierType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:ID",
        type: "IdentifierType",
        "xsd:annotation": {
          "xsd:documentation": "Key Identifier"
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
          "xsd:documentation": "Key Qualifiers"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeObjectKeyType;
Modeler.register(TypeObjectKeyType, "TypeObjectKeyType");
