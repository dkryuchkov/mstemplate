var Modeler = require("../Modeler.js");
var className = 'TypeGLElementType';

var TypeGLElementType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  SequenceNumber: {
      type: "TypeNumericType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:SequenceNumber",
        type: "NumericType",
        "xsd:annotation": {
          "xsd:documentation": "Sequence in which the GL Element appears in the Account Code Combination"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    GLElement: {
      type: "TypeStringType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:GLElement",
        type: "StringType",
        "xsd:annotation": {
          "xsd:documentation": "The GL Element value - e.g. Account Number"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    GLElementCode: {
      type: "TypeCodeType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:GLElementCode",
        type: "CodeType",
        "xsd:annotation": {
          "xsd:documentation": "Code describing the GL Element e.g. Account, Cost Center etc"
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
	  SequenceNumber: {
      type: "TypeNumericType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:SequenceNumber",
        type: "NumericType",
        "xsd:annotation": {
          "xsd:documentation": "Sequence in which the GL Element appears in the Account Code Combination"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    GLElement: {
      type: "TypeStringType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:GLElement",
        type: "StringType",
        "xsd:annotation": {
          "xsd:documentation": "The GL Element value - e.g. Account Number"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    GLElementCode: {
      type: "TypeCodeType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:GLElementCode",
        type: "CodeType",
        "xsd:annotation": {
          "xsd:documentation": "Code describing the GL Element e.g. Account, Cost Center etc"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeGLElementType;
Modeler.register(TypeGLElementType, "TypeGLElementType");
