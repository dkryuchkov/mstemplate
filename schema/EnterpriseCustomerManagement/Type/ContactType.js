var Modeler = require("../Modeler.js");
var className = 'TypeContactType';

var TypeContactType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  Identification: {
      type: "TypeIdentificationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Identification",
        type: "IdentificationType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    PreferredLanguageCode: {
      type: "TypeLanguageCodeType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:PreferredLanguageCode",
        type: "LanguageCodeType",
        "xsd:annotation": {
          "xsd:documentation": "Preferred Language for communication with the contact"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Department: {
      type: "TypeTextType",
      wsdlDefinition: {
        maxOccurs: "unbounded",
        minOccurs: "0",
        name: "WL5G3N2:Department",
        type: "TextType",
        "xsd:annotation": {
          "xsd:documentation": "Department to which the contact is associated"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    },
    JobTitle: {
      type: "TypeTextType",
      wsdlDefinition: {
        maxOccurs: "unbounded",
        minOccurs: "0",
        name: "WL5G3N2:JobTitle",
        type: "TextType",
        "xsd:annotation": {
          "xsd:documentation": "Is the position or designation of the pesron with whom associated within the given organization. Examples are Director, Software Engineer, Purchasing Manager etc"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    },
    Responsibility: {
      type: "TypeTextType",
      wsdlDefinition: {
        maxOccurs: "unbounded",
        minOccurs: "0",
        name: "WL5G3N2:Responsibility",
        type: "TextType",
        "xsd:annotation": {
          "xsd:documentation": "A text description of the responsibility of the contact"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    },
    OrganizationIndicator: {
      type: "TypeIndicatorType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:OrganizationIndicator",
        type: "IndicatorType",
        "xsd:annotation": {
          "xsd:documentation": "Indicate whether this contact is an organization contact or an individual. If it is an organization contact person's field may not be populated such as the PersonName and JobTitle."
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    PreferredCommunicationChannelCode: {
      type: "TypeCodeType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:PreferredCommunicationChannelCode",
        type: "CodeType",
        "xsd:annotation": {
          "xsd:documentation": "This indicates the preferred communication channel whether it is address, phone, etc."
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    OrganizationName: {
      type: "TypeNameType",
      wsdlDefinition: {
        maxOccurs: "unbounded",
        minOccurs: "0",
        name: "WL5G3N2:OrganizationName",
        type: "NameType",
        "xsd:annotation": {
          "xsd:documentation": "This capture the name of the Organization for both of the cases when contact is an organization or an individual person (organization of that individual)."
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    },
    ContactTelexCommunication: {
      type: "TypeContactTelexCommunicationType",
      wsdlDefinition: {
        maxOccurs: "unbounded",
        minOccurs: "0",
        name: "WL5G3N2:ContactTelexCommunication",
        type: "ContactTelexCommunicationType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    },
    PersonName: {
      type: "TypePersonNameType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:PersonName",
        type: "PersonNameType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    BirthDateTime: {
      type: "TypeDateTimeType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:BirthDateTime",
        type: "DateTimeType",
        "xsd:annotation": {
          "xsd:documentation": "Birth date and time of the contact person"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    ContactAddressCommunication: {
      type: "TypeContactAddressCommunicationType",
      wsdlDefinition: {
        maxOccurs: "unbounded",
        minOccurs: "0",
        name: "WL5G3N2:ContactAddressCommunication",
        type: "ContactAddressCommunicationType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    },
    ContactPhoneCommunication: {
      type: "TypeContactPhoneCommunicationType",
      wsdlDefinition: {
        maxOccurs: "unbounded",
        minOccurs: "0",
        name: "WL5G3N2:ContactPhoneCommunication",
        type: "ContactPhoneCommunicationType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    },
    ContactFaxCommunication: {
      type: "TypeContactFaxCommunicationType",
      wsdlDefinition: {
        maxOccurs: "unbounded",
        minOccurs: "0",
        name: "WL5G3N2:ContactFaxCommunication",
        type: "ContactFaxCommunicationType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    },
    ContactEmailCommunication: {
      type: "TypeContactEmailCommunicationType",
      wsdlDefinition: {
        maxOccurs: "unbounded",
        minOccurs: "0",
        name: "WL5G3N2:ContactEmailCommunication",
        type: "ContactEmailCommunicationType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    },
    ContactWebsiteCommunication: {
      type: "TypeContactWebsiteCommunicationType",
      wsdlDefinition: {
        maxOccurs: "unbounded",
        minOccurs: "0",
        name: "WL5G3N2:ContactWebsiteCommunication",
        type: "ContactWebsiteCommunicationType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    },
    Preference: {
      type: "TypePreferenceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Preference",
        type: "PreferenceType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    ContactSWIFTCommunication: {
      type: "TypeContactSWIFTCommunicationType",
      wsdlDefinition: {
        maxOccurs: "unbounded",
        minOccurs: "0",
        name: "WL5G3N2:ContactSWIFTCommunication",
        type: "ContactSWIFTCommunicationType",
        "xsd:annotation": {
          "xsd:appinfo": {
            "ebocontext:DerivedBusinessContext": {
              "ebocontext:BusinessContext": "BankingAndWealthManagement",
              "ebocontext:DerivationTypeCode": "Extension"
            }
          }
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    },
    Custom: {
      type: "TypeCustomContactType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Custom",
        type: "corecomcust:CustomContactType",
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
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    PreferredLanguageCode: {
      type: "TypeLanguageCodeType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:PreferredLanguageCode",
        type: "LanguageCodeType",
        "xsd:annotation": {
          "xsd:documentation": "Preferred Language for communication with the contact"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Department: {
      type: "TypeTextType",
      wsdlDefinition: {
        maxOccurs: "unbounded",
        minOccurs: "0",
        name: "WL5G3N2:Department",
        type: "TextType",
        "xsd:annotation": {
          "xsd:documentation": "Department to which the contact is associated"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    },
    JobTitle: {
      type: "TypeTextType",
      wsdlDefinition: {
        maxOccurs: "unbounded",
        minOccurs: "0",
        name: "WL5G3N2:JobTitle",
        type: "TextType",
        "xsd:annotation": {
          "xsd:documentation": "Is the position or designation of the pesron with whom associated within the given organization. Examples are Director, Software Engineer, Purchasing Manager etc"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    },
    Responsibility: {
      type: "TypeTextType",
      wsdlDefinition: {
        maxOccurs: "unbounded",
        minOccurs: "0",
        name: "WL5G3N2:Responsibility",
        type: "TextType",
        "xsd:annotation": {
          "xsd:documentation": "A text description of the responsibility of the contact"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    },
    OrganizationIndicator: {
      type: "TypeIndicatorType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:OrganizationIndicator",
        type: "IndicatorType",
        "xsd:annotation": {
          "xsd:documentation": "Indicate whether this contact is an organization contact or an individual. If it is an organization contact person's field may not be populated such as the PersonName and JobTitle."
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    PreferredCommunicationChannelCode: {
      type: "TypeCodeType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:PreferredCommunicationChannelCode",
        type: "CodeType",
        "xsd:annotation": {
          "xsd:documentation": "This indicates the preferred communication channel whether it is address, phone, etc."
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    OrganizationName: {
      type: "TypeNameType",
      wsdlDefinition: {
        maxOccurs: "unbounded",
        minOccurs: "0",
        name: "WL5G3N2:OrganizationName",
        type: "NameType",
        "xsd:annotation": {
          "xsd:documentation": "This capture the name of the Organization for both of the cases when contact is an organization or an individual person (organization of that individual)."
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    },
    ContactTelexCommunication: {
      type: "TypeContactTelexCommunicationType",
      wsdlDefinition: {
        maxOccurs: "unbounded",
        minOccurs: "0",
        name: "WL5G3N2:ContactTelexCommunication",
        type: "ContactTelexCommunicationType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    },
    PersonName: {
      type: "TypePersonNameType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:PersonName",
        type: "PersonNameType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    BirthDateTime: {
      type: "TypeDateTimeType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:BirthDateTime",
        type: "DateTimeType",
        "xsd:annotation": {
          "xsd:documentation": "Birth date and time of the contact person"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    ContactAddressCommunication: {
      type: "TypeContactAddressCommunicationType",
      wsdlDefinition: {
        maxOccurs: "unbounded",
        minOccurs: "0",
        name: "WL5G3N2:ContactAddressCommunication",
        type: "ContactAddressCommunicationType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    },
    ContactPhoneCommunication: {
      type: "TypeContactPhoneCommunicationType",
      wsdlDefinition: {
        maxOccurs: "unbounded",
        minOccurs: "0",
        name: "WL5G3N2:ContactPhoneCommunication",
        type: "ContactPhoneCommunicationType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    },
    ContactFaxCommunication: {
      type: "TypeContactFaxCommunicationType",
      wsdlDefinition: {
        maxOccurs: "unbounded",
        minOccurs: "0",
        name: "WL5G3N2:ContactFaxCommunication",
        type: "ContactFaxCommunicationType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    },
    ContactEmailCommunication: {
      type: "TypeContactEmailCommunicationType",
      wsdlDefinition: {
        maxOccurs: "unbounded",
        minOccurs: "0",
        name: "WL5G3N2:ContactEmailCommunication",
        type: "ContactEmailCommunicationType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    },
    ContactWebsiteCommunication: {
      type: "TypeContactWebsiteCommunicationType",
      wsdlDefinition: {
        maxOccurs: "unbounded",
        minOccurs: "0",
        name: "WL5G3N2:ContactWebsiteCommunication",
        type: "ContactWebsiteCommunicationType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    },
    Preference: {
      type: "TypePreferenceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Preference",
        type: "PreferenceType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    ContactSWIFTCommunication: {
      type: "TypeContactSWIFTCommunicationType",
      wsdlDefinition: {
        maxOccurs: "unbounded",
        minOccurs: "0",
        name: "WL5G3N2:ContactSWIFTCommunication",
        type: "ContactSWIFTCommunicationType",
        "xsd:annotation": {
          "xsd:appinfo": {
            "ebocontext:DerivedBusinessContext": {
              "ebocontext:BusinessContext": "BankingAndWealthManagement",
              "ebocontext:DerivationTypeCode": "Extension"
            }
          }
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    },
    Custom: {
      type: "TypeCustomContactType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Custom",
        type: "corecomcust:CustomContactType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeContactType;
Modeler.register(TypeContactType, "TypeContactType");
