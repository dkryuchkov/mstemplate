var Modeler = require("../Modeler.js");
var className = 'TypePaydexType';

var TypePaydexType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  Score: {
      type: "TypeNumericType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Score",
        type: "NumericType",
        "xsd:annotation": {
          "xsd:documentation": "Paydex score for the last 12 months payment history"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    ThreeMonthEarlierScore: {
      type: "TypeNumericType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:ThreeMonthEarlierScore",
        type: "NumericType",
        "xsd:annotation": {
          "xsd:documentation": "Paydex score three months ago"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    FirmDays: {
      type: "TypeDurationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:FirmDays",
        type: "DurationType",
        "xsd:annotation": {
          "xsd:documentation": "Number of days used in the Paydex score"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    FirmComment: {
      type: "TypeTextType",
      wsdlDefinition: {
        maxOccurs: "unbounded",
        minOccurs: "0",
        name: "WL5G3N2:FirmComment",
        type: "TextType",
        "xsd:annotation": {
          "xsd:documentation": "Comment on the Paydex score for the organization"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    },
    IndustryDays: {
      type: "TypeDurationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:IndustryDays",
        type: "DurationType",
        "xsd:annotation": {
          "xsd:documentation": "Number of days used in the Paydex score for the industry"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    IndustryComment: {
      type: "TypeTextType",
      wsdlDefinition: {
        maxOccurs: "unbounded",
        minOccurs: "0",
        name: "WL5G3N2:IndustryComment",
        type: "TextType",
        "xsd:annotation": {
          "xsd:documentation": "Comment on the Paydex score for the industry"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    },
    Comment: {
      type: "TypeTextType",
      wsdlDefinition: {
        maxOccurs: "unbounded",
        minOccurs: "0",
        name: "WL5G3N2:Comment",
        type: "TextType",
        "xsd:annotation": {
          "xsd:documentation": "Additional Paydex information"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    },
    PaydexNorm: {
      type: "TypePaydexNormType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:PaydexNorm",
        type: "PaydexNormType",
        "xsd:annotation": {
          "xsd:documentation": "Paydex norm"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Custom: {
      type: "TypeCustomPaydexType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Custom",
        type: "corecomcust:CustomPaydexType",
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
	  Score: {
      type: "TypeNumericType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Score",
        type: "NumericType",
        "xsd:annotation": {
          "xsd:documentation": "Paydex score for the last 12 months payment history"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    ThreeMonthEarlierScore: {
      type: "TypeNumericType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:ThreeMonthEarlierScore",
        type: "NumericType",
        "xsd:annotation": {
          "xsd:documentation": "Paydex score three months ago"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    FirmDays: {
      type: "TypeDurationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:FirmDays",
        type: "DurationType",
        "xsd:annotation": {
          "xsd:documentation": "Number of days used in the Paydex score"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    FirmComment: {
      type: "TypeTextType",
      wsdlDefinition: {
        maxOccurs: "unbounded",
        minOccurs: "0",
        name: "WL5G3N2:FirmComment",
        type: "TextType",
        "xsd:annotation": {
          "xsd:documentation": "Comment on the Paydex score for the organization"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    },
    IndustryDays: {
      type: "TypeDurationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:IndustryDays",
        type: "DurationType",
        "xsd:annotation": {
          "xsd:documentation": "Number of days used in the Paydex score for the industry"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    IndustryComment: {
      type: "TypeTextType",
      wsdlDefinition: {
        maxOccurs: "unbounded",
        minOccurs: "0",
        name: "WL5G3N2:IndustryComment",
        type: "TextType",
        "xsd:annotation": {
          "xsd:documentation": "Comment on the Paydex score for the industry"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    },
    Comment: {
      type: "TypeTextType",
      wsdlDefinition: {
        maxOccurs: "unbounded",
        minOccurs: "0",
        name: "WL5G3N2:Comment",
        type: "TextType",
        "xsd:annotation": {
          "xsd:documentation": "Additional Paydex information"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    },
    PaydexNorm: {
      type: "TypePaydexNormType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:PaydexNorm",
        type: "PaydexNormType",
        "xsd:annotation": {
          "xsd:documentation": "Paydex norm"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Custom: {
      type: "TypeCustomPaydexType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Custom",
        type: "corecomcust:CustomPaydexType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypePaydexType;
Modeler.register(TypePaydexType, "TypePaydexType");
