var Modeler = require("../Modeler.js");
var className = 'TypeTaxExemptionType';

var TypeTaxExemptionType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  ReasonCode: {
      type: "TypeCodeType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:ReasonCode",
        type: "CodeType",
        "xsd:annotation": {
          "xsd:documentation": "Reason for the tax exemption"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    CertificateNumber: {
      type: "TypeIdentifierType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:CertificateNumber",
        type: "IdentifierType",
        "xsd:annotation": {
          "xsd:documentation": "Tax Exemption Certificate Number"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    LicenseIndicator: {
      type: "TypeIndicatorType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:LicenseIndicator",
        type: "IndicatorType",
        "xsd:annotation": {
          "xsd:documentation": "Exemption License Indicator"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    IssueDateTime: {
      type: "TypeDateTimeType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:IssueDateTime",
        type: "DateTimeType",
        "xsd:annotation": {
          "xsd:documentation": "Date Time at which the exemption was issued"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    ExpirationDateTime: {
      type: "TypeDateTimeType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:ExpirationDateTime",
        type: "DateTimeType",
        "xsd:annotation": {
          "xsd:documentation": "DateTime of expiration of the exemption"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Status: {
      type: "TypeStatusType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Status",
        type: "StatusType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    EffectiveTimePeriod: {
      type: "TypeTimePeriodType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:EffectiveTimePeriod",
        type: "TimePeriodType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
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
          "xsd:documentation": "Description of the exemption"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    },
    Note: {
      type: "TypeNoteType",
      wsdlDefinition: {
        maxOccurs: "unbounded",
        minOccurs: "0",
        name: "WL5G3N2:Note",
        type: "NoteType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    },
    Percentage: {
      type: "TypePercentType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Percentage",
        type: "PercentType",
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
	  ReasonCode: {
      type: "TypeCodeType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:ReasonCode",
        type: "CodeType",
        "xsd:annotation": {
          "xsd:documentation": "Reason for the tax exemption"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    CertificateNumber: {
      type: "TypeIdentifierType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:CertificateNumber",
        type: "IdentifierType",
        "xsd:annotation": {
          "xsd:documentation": "Tax Exemption Certificate Number"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    LicenseIndicator: {
      type: "TypeIndicatorType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:LicenseIndicator",
        type: "IndicatorType",
        "xsd:annotation": {
          "xsd:documentation": "Exemption License Indicator"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    IssueDateTime: {
      type: "TypeDateTimeType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:IssueDateTime",
        type: "DateTimeType",
        "xsd:annotation": {
          "xsd:documentation": "Date Time at which the exemption was issued"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    ExpirationDateTime: {
      type: "TypeDateTimeType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:ExpirationDateTime",
        type: "DateTimeType",
        "xsd:annotation": {
          "xsd:documentation": "DateTime of expiration of the exemption"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Status: {
      type: "TypeStatusType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Status",
        type: "StatusType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    EffectiveTimePeriod: {
      type: "TypeTimePeriodType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:EffectiveTimePeriod",
        type: "TimePeriodType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
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
          "xsd:documentation": "Description of the exemption"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    },
    Note: {
      type: "TypeNoteType",
      wsdlDefinition: {
        maxOccurs: "unbounded",
        minOccurs: "0",
        name: "WL5G3N2:Note",
        type: "NoteType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    },
    Percentage: {
      type: "TypePercentType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Percentage",
        type: "PercentType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeTaxExemptionType;
Modeler.register(TypeTaxExemptionType, "TypeTaxExemptionType");
