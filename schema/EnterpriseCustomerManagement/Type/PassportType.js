var Modeler = require("../Modeler.js");
var className = 'TypePassportType';

var TypePassportType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  NumberID: {
      type: "TypeIdentifierType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:NumberID",
        type: "IdentifierType",
        "xsd:annotation": {
          "xsd:documentation": "The person's passport number"
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
          "xsd:documentation": "The type code of the Person Passport"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    IssueDate: {
      type: "TypeDateType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:IssueDate",
        type: "DateType",
        "xsd:annotation": {
          "xsd:documentation": "The date on which the person's passport was issued"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    ExpirationDate: {
      type: "TypeDateType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:ExpirationDate",
        type: "DateType",
        "xsd:annotation": {
          "xsd:documentation": "The date on which the person's passport expires"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    IssuingCountryCode: {
      type: "TypeCodeType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:IssuingCountryCode",
        type: "CodeType",
        "xsd:annotation": {
          "xsd:documentation": "The country which issued the person's passport"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    IssuingStateCode: {
      type: "TypeCodeType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:IssuingStateCode",
        type: "CodeType",
        "xsd:annotation": {
          "xsd:documentation": "The state which issued the person's passport"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    IssuingLocation: {
      type: "TypeTextType",
      wsdlDefinition: {
        maxOccurs: "unbounded",
        minOccurs: "0",
        name: "WL5G3N2:IssuingLocation",
        type: "TextType",
        "xsd:annotation": {
          "xsd:documentation": "The location of the authority which issued the person's passport"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    },
    IssuingAuthority: {
      type: "TypeTextType",
      wsdlDefinition: {
        maxOccurs: "unbounded",
        minOccurs: "0",
        name: "WL5G3N2:IssuingAuthority",
        type: "TextType",
        "xsd:annotation": {
          "xsd:documentation": "The agency which issued the person's passport"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    },
    Custom: {
      type: "TypeCustomPassportType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Custom",
        type: "corecomcust:CustomPassportType",
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
	  NumberID: {
      type: "TypeIdentifierType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:NumberID",
        type: "IdentifierType",
        "xsd:annotation": {
          "xsd:documentation": "The person's passport number"
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
          "xsd:documentation": "The type code of the Person Passport"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    IssueDate: {
      type: "TypeDateType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:IssueDate",
        type: "DateType",
        "xsd:annotation": {
          "xsd:documentation": "The date on which the person's passport was issued"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    ExpirationDate: {
      type: "TypeDateType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:ExpirationDate",
        type: "DateType",
        "xsd:annotation": {
          "xsd:documentation": "The date on which the person's passport expires"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    IssuingCountryCode: {
      type: "TypeCodeType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:IssuingCountryCode",
        type: "CodeType",
        "xsd:annotation": {
          "xsd:documentation": "The country which issued the person's passport"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    IssuingStateCode: {
      type: "TypeCodeType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:IssuingStateCode",
        type: "CodeType",
        "xsd:annotation": {
          "xsd:documentation": "The state which issued the person's passport"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    IssuingLocation: {
      type: "TypeTextType",
      wsdlDefinition: {
        maxOccurs: "unbounded",
        minOccurs: "0",
        name: "WL5G3N2:IssuingLocation",
        type: "TextType",
        "xsd:annotation": {
          "xsd:documentation": "The location of the authority which issued the person's passport"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    },
    IssuingAuthority: {
      type: "TypeTextType",
      wsdlDefinition: {
        maxOccurs: "unbounded",
        minOccurs: "0",
        name: "WL5G3N2:IssuingAuthority",
        type: "TextType",
        "xsd:annotation": {
          "xsd:documentation": "The agency which issued the person's passport"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    },
    Custom: {
      type: "TypeCustomPassportType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Custom",
        type: "corecomcust:CustomPassportType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypePassportType;
Modeler.register(TypePassportType, "TypePassportType");
