var Modeler = require("../Modeler.js");
var className = 'TypePaydexNormType';

var TypePaydexNormType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  UpperScore: {
      type: "TypeNumericType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:UpperScore",
        type: "NumericType",
        "xsd:annotation": {
          "xsd:documentation": "Maximum Paydex score for the industry"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    MedianScore: {
      type: "TypeNumericType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:MedianScore",
        type: "NumericType",
        "xsd:annotation": {
          "xsd:documentation": "Median or average Paydex score for the industry"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    LowerScore: {
      type: "TypeNumericType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:LowerScore",
        type: "NumericType",
        "xsd:annotation": {
          "xsd:documentation": "Minimum Paydex score for the industry"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Custom: {
      type: "TypeCustomPaydexNormType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Custom",
        type: "corecomcust:CustomPaydexNormType",
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
	  UpperScore: {
      type: "TypeNumericType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:UpperScore",
        type: "NumericType",
        "xsd:annotation": {
          "xsd:documentation": "Maximum Paydex score for the industry"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    MedianScore: {
      type: "TypeNumericType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:MedianScore",
        type: "NumericType",
        "xsd:annotation": {
          "xsd:documentation": "Median or average Paydex score for the industry"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    LowerScore: {
      type: "TypeNumericType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:LowerScore",
        type: "NumericType",
        "xsd:annotation": {
          "xsd:documentation": "Minimum Paydex score for the industry"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Custom: {
      type: "TypeCustomPaydexNormType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Custom",
        type: "corecomcust:CustomPaydexNormType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypePaydexNormType;
Modeler.register(TypePaydexNormType, "TypePaydexNormType");
