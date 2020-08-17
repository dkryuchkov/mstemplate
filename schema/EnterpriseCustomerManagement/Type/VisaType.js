var Modeler = require("../Modeler.js");
var className = 'TypeVisaType';

var TypeVisaType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  NumberID: {
      type: "TypeIdentifierType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:NumberID",
        type: "IdentifierType",
        "xsd:annotation": {
          "xsd:documentation": "Control number appearing on the visa"
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
          "xsd:documentation": "Foreign key for the type of visa or work permit; available values are based on the country, e.g., R for regular, D for diplomat"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    ClassificationCode: {
      type: "TypeCodeType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:ClassificationCode",
        type: "CodeType",
        "xsd:annotation": {
          "xsd:documentation": "Person's visa classification/ Category code, e.g., B1 for business, F1 for student, H1B for temporaly worker"
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
          "xsd:documentation": "The country which issued the visa or work permit"
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
          "xsd:documentation": "The date on which the visa or work permit was issued"
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
          "xsd:documentation": "The date on which the visa or work permit expires"
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
          "xsd:documentation": "The location of the authority where the visa was issued"
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
          "xsd:documentation": "The agency which issued the person's visa or work permit"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    },
    Custom: {
      type: "TypeCustomVisaType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Custom",
        type: "corecomcust:CustomVisaType",
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
          "xsd:documentation": "Control number appearing on the visa"
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
          "xsd:documentation": "Foreign key for the type of visa or work permit; available values are based on the country, e.g., R for regular, D for diplomat"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    ClassificationCode: {
      type: "TypeCodeType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:ClassificationCode",
        type: "CodeType",
        "xsd:annotation": {
          "xsd:documentation": "Person's visa classification/ Category code, e.g., B1 for business, F1 for student, H1B for temporaly worker"
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
          "xsd:documentation": "The country which issued the visa or work permit"
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
          "xsd:documentation": "The date on which the visa or work permit was issued"
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
          "xsd:documentation": "The date on which the visa or work permit expires"
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
          "xsd:documentation": "The location of the authority where the visa was issued"
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
          "xsd:documentation": "The agency which issued the person's visa or work permit"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    },
    Custom: {
      type: "TypeCustomVisaType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Custom",
        type: "corecomcust:CustomVisaType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeVisaType;
Modeler.register(TypeVisaType, "TypeVisaType");
