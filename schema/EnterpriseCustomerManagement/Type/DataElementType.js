var Modeler = require("../Modeler.js");
var className = 'TypeDataElementType';

var TypeDataElementType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  Name: {
      type: "TypeNameType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Name",
        type: "NameType",
        "xsd:annotation": {
          "xsd:documentation": "Name of the data element"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    DataTypeCode: {
      type: "TypeCodeType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:DataTypeCode",
        type: "CodeType",
        "xsd:annotation": {
          "xsd:documentation": "Code indicating data type of the Value, e.g., Integer, Numeric, String"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Value: {
      type: "TypeStringType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Value",
        type: "StringType",
        "xsd:annotation": {
          "xsd:documentation": "Value of the the data element"
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
	  Name: {
      type: "TypeNameType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Name",
        type: "NameType",
        "xsd:annotation": {
          "xsd:documentation": "Name of the data element"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    DataTypeCode: {
      type: "TypeCodeType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:DataTypeCode",
        type: "CodeType",
        "xsd:annotation": {
          "xsd:documentation": "Code indicating data type of the Value, e.g., Integer, Numeric, String"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Value: {
      type: "TypeStringType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Value",
        type: "StringType",
        "xsd:annotation": {
          "xsd:documentation": "Value of the the data element"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeDataElementType;
Modeler.register(TypeDataElementType, "TypeDataElementType");
