var Modeler = require("../Modeler.js");
var className = 'TypeMessageBatchType';

var TypeMessageBatchType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  ID: {
      type: "TypeIdentifierType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:ID",
        type: "IdentifierType",
        "xsd:annotation": {
          "xsd:documentation": "The identifier of the batch"
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
        minOccurs: "0",
        name: "WL5G3N2:Name",
        type: "NameType",
        "xsd:annotation": {
          "xsd:documentation": "Batch name"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    StatusCode: {
      type: "TypeCodeType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:StatusCode",
        type: "CodeType",
        "xsd:annotation": {
          "xsd:documentation": "To indicate the status of the batch"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    ResponseMessage: {
      type: "TypeTextType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:ResponseMessage",
        type: "TextType",
        "xsd:annotation": {
          "xsd:documentation": "A free form message used to capture information or comments in the response"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    BatchParameter: {
      type: "TypeBatchParameterType",
      wsdlDefinition: {
        maxOccurs: "unbounded",
        minOccurs: "0",
        name: "WL5G3N2:BatchParameter",
        type: "BatchParameterType",
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
          "xsd:documentation": "The identifier of the batch"
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
        minOccurs: "0",
        name: "WL5G3N2:Name",
        type: "NameType",
        "xsd:annotation": {
          "xsd:documentation": "Batch name"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    StatusCode: {
      type: "TypeCodeType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:StatusCode",
        type: "CodeType",
        "xsd:annotation": {
          "xsd:documentation": "To indicate the status of the batch"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    ResponseMessage: {
      type: "TypeTextType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:ResponseMessage",
        type: "TextType",
        "xsd:annotation": {
          "xsd:documentation": "A free form message used to capture information or comments in the response"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    BatchParameter: {
      type: "TypeBatchParameterType",
      wsdlDefinition: {
        maxOccurs: "unbounded",
        minOccurs: "0",
        name: "WL5G3N2:BatchParameter",
        type: "BatchParameterType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeMessageBatchType;
Modeler.register(TypeMessageBatchType, "TypeMessageBatchType");
