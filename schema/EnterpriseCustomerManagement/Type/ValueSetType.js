var Modeler = require("../Modeler.js");
var className = 'TypeValueSetType';

var TypeValueSetType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  Identification: {
      type: "TypeIdentificationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Identification",
        type: "IdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Value set unique identifier"
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
          "xsd:documentation": "Name of the value set"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    },
    Description: {
      type: "TypeTextType",
      wsdlDefinition: {
        maxOccurs: "unbounded",
        minOccurs: "0",
        name: "WL5G3N2:Description",
        type: "TextType",
        "xsd:annotation": {
          "xsd:documentation": "Description of the value set"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    },
    DataTypeCode: {
      type: "TypeCodeType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:DataTypeCode",
        type: "CodeType",
        "xsd:annotation": {
          "xsd:documentation": "Indicates the data type of the values in the value set"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    MinimumValue: {
      type: "TypeStringType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:MinimumValue",
        type: "StringType",
        "xsd:annotation": {
          "xsd:documentation": "The minimum allowed value (inclusive)"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    MaximumValue: {
      type: "TypeStringType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:MaximumValue",
        type: "StringType",
        "xsd:annotation": {
          "xsd:documentation": "The maximum allowed value (inclusive)"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    MinimumLength: {
      type: "TypeNonNegativeIntegerType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:MinimumLength",
        type: "NonNegativeIntegerType",
        "xsd:annotation": {
          "xsd:documentation": "This field indicates the minimum number of units of length allowed for the value, where units of length varies depending on the data type (the DataTypeCode) that is being used on."
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    MaximumLength: {
      type: "TypeIntegerType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:MaximumLength",
        type: "IntegerType",
        "xsd:annotation": {
          "xsd:documentation": "This field indicates the maximum number of units of length allowed for the value, where units of length varies depending on the data type (the DataTypeCode) that is being used on."
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    RestrictedValueIndicator: {
      type: "TypeIndicatorType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:RestrictedValueIndicator",
        type: "IndicatorType",
        "xsd:annotation": {
          "xsd:documentation": "Indicates whether or not the values this value set can contain are restricted or enumerated"
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
          "xsd:documentation": "Value set unique identifier"
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
          "xsd:documentation": "Name of the value set"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    },
    Description: {
      type: "TypeTextType",
      wsdlDefinition: {
        maxOccurs: "unbounded",
        minOccurs: "0",
        name: "WL5G3N2:Description",
        type: "TextType",
        "xsd:annotation": {
          "xsd:documentation": "Description of the value set"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    },
    DataTypeCode: {
      type: "TypeCodeType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:DataTypeCode",
        type: "CodeType",
        "xsd:annotation": {
          "xsd:documentation": "Indicates the data type of the values in the value set"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    MinimumValue: {
      type: "TypeStringType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:MinimumValue",
        type: "StringType",
        "xsd:annotation": {
          "xsd:documentation": "The minimum allowed value (inclusive)"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    MaximumValue: {
      type: "TypeStringType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:MaximumValue",
        type: "StringType",
        "xsd:annotation": {
          "xsd:documentation": "The maximum allowed value (inclusive)"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    MinimumLength: {
      type: "TypeNonNegativeIntegerType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:MinimumLength",
        type: "NonNegativeIntegerType",
        "xsd:annotation": {
          "xsd:documentation": "This field indicates the minimum number of units of length allowed for the value, where units of length varies depending on the data type (the DataTypeCode) that is being used on."
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    MaximumLength: {
      type: "TypeIntegerType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:MaximumLength",
        type: "IntegerType",
        "xsd:annotation": {
          "xsd:documentation": "This field indicates the maximum number of units of length allowed for the value, where units of length varies depending on the data type (the DataTypeCode) that is being used on."
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    RestrictedValueIndicator: {
      type: "TypeIndicatorType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:RestrictedValueIndicator",
        type: "IndicatorType",
        "xsd:annotation": {
          "xsd:documentation": "Indicates whether or not the values this value set can contain are restricted or enumerated"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeValueSetType;
Modeler.register(TypeValueSetType, "TypeValueSetType");
