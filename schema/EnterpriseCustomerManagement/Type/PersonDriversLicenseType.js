var Modeler = require("../Modeler.js");
var className = 'TypePersonDriversLicenseType';

var TypePersonDriversLicenseType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  Identification: {
      type: "TypeIdentificationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Identification",
        type: "IdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Unique identification of Person Drivers License"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    LegislationAuthorityCode: {
      type: "TypeCodeType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:LegislationAuthorityCode",
        type: "CodeType",
        "xsd:annotation": {
          "xsd:documentation": "The country of Drivers license"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
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
          "xsd:documentation": "Authority that issued the license, i.e. International authority that issues internatical drivers permit, or state within a country."
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    },
    IssuingCountryCode: {
      type: "TypeCodeType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:IssuingCountryCode",
        type: "CodeType",
        "xsd:annotation": {
          "xsd:documentation": "Country that issued the license"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    SuspendedIndicator: {
      type: "TypeIndicatorType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:SuspendedIndicator",
        type: "IndicatorType",
        "xsd:annotation": {
          "xsd:documentation": "Flag indicating a suspended license"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    SuspendedFromDate: {
      type: "TypeDateType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:SuspendedFromDate",
        type: "DateType",
        "xsd:annotation": {
          "xsd:documentation": "Date license was suspended"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    PenaltyPointCount: {
      type: "TypeIntegerType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:PenaltyPointCount",
        type: "IntegerType",
        "xsd:annotation": {
          "xsd:documentation": "Number of penalty points (endorsements)"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    ViolationCount: {
      type: "TypeIntegerType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:ViolationCount",
        type: "IntegerType",
        "xsd:annotation": {
          "xsd:documentation": "Number of violations"
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
          "xsd:documentation": "The location of the authority where the license was issued"
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
          "xsd:documentation": "Comments"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    },
    EffectiveTimePeriod: {
      type: "TypeTimePeriodType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:EffectiveTimePeriod",
        type: "TimePeriodType",
        "xsd:annotation": {
          "xsd:documentation": "Effective time period of license"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    DriversLicenseClass: {
      type: "TypeDriversLicenseClassType",
      wsdlDefinition: {
        maxOccurs: "unbounded",
        minOccurs: "0",
        name: "WL5G3N2:DriversLicenseClass",
        type: "DriversLicenseClassType",
        "xsd:annotation": {
          "xsd:documentation": "Details about the types associated to a Drivers License for a person"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    },
    Custom: {
      type: "TypeCustomPersonDriversLicenseType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Custom",
        type: "corecomcust:CustomPersonDriversLicenseType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    actionCode: {
      type: "TypeActionCodeType",
      wsdlDefinition: {
        name: "actionCode",
        type: "ActionCodeType",
        use: "optional",
        attribute: true
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
          "xsd:documentation": "Unique identification of Person Drivers License"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    LegislationAuthorityCode: {
      type: "TypeCodeType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:LegislationAuthorityCode",
        type: "CodeType",
        "xsd:annotation": {
          "xsd:documentation": "The country of Drivers license"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
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
          "xsd:documentation": "Authority that issued the license, i.e. International authority that issues internatical drivers permit, or state within a country."
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    },
    IssuingCountryCode: {
      type: "TypeCodeType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:IssuingCountryCode",
        type: "CodeType",
        "xsd:annotation": {
          "xsd:documentation": "Country that issued the license"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    SuspendedIndicator: {
      type: "TypeIndicatorType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:SuspendedIndicator",
        type: "IndicatorType",
        "xsd:annotation": {
          "xsd:documentation": "Flag indicating a suspended license"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    SuspendedFromDate: {
      type: "TypeDateType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:SuspendedFromDate",
        type: "DateType",
        "xsd:annotation": {
          "xsd:documentation": "Date license was suspended"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    PenaltyPointCount: {
      type: "TypeIntegerType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:PenaltyPointCount",
        type: "IntegerType",
        "xsd:annotation": {
          "xsd:documentation": "Number of penalty points (endorsements)"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    ViolationCount: {
      type: "TypeIntegerType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:ViolationCount",
        type: "IntegerType",
        "xsd:annotation": {
          "xsd:documentation": "Number of violations"
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
          "xsd:documentation": "The location of the authority where the license was issued"
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
          "xsd:documentation": "Comments"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    },
    EffectiveTimePeriod: {
      type: "TypeTimePeriodType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:EffectiveTimePeriod",
        type: "TimePeriodType",
        "xsd:annotation": {
          "xsd:documentation": "Effective time period of license"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    DriversLicenseClass: {
      type: "TypeDriversLicenseClassType",
      wsdlDefinition: {
        maxOccurs: "unbounded",
        minOccurs: "0",
        name: "WL5G3N2:DriversLicenseClass",
        type: "DriversLicenseClassType",
        "xsd:annotation": {
          "xsd:documentation": "Details about the types associated to a Drivers License for a person"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    },
    Custom: {
      type: "TypeCustomPersonDriversLicenseType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Custom",
        type: "corecomcust:CustomPersonDriversLicenseType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    actionCode: {
      type: "TypeActionCodeType",
      wsdlDefinition: {
        name: "actionCode",
        type: "ActionCodeType",
        use: "optional",
        attribute: true
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypePersonDriversLicenseType;
Modeler.register(TypePersonDriversLicenseType, "TypePersonDriversLicenseType");
