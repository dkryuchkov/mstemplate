var Modeler = require("../Modeler.js");
var className = 'TypeCustomerPartyPrivacyProfileType';

var TypeCustomerPartyPrivacyProfileType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  PrivacyLevelCode: {
      type: "TypeCodeType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N1:PrivacyLevelCode",
        type: "WL5G3N2:CodeType",
        "xsd:annotation": {
          "xsd:documentation": "Privacy level of the customer (e.g., Opt In, Opt Out Affiliate, Opt Out All Parties, Opt Out Third Parties etc.)"
        },
        attribute: false,
        ns: "WL5G3N1"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    PhoneCommunicationAllowedIndicator: {
      type: "TypeIndicatorType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N1:PhoneCommunicationAllowedIndicator",
        type: "WL5G3N2:IndicatorType",
        "xsd:annotation": {
          "xsd:documentation": "Indicates whether or not calling the customer is allowed"
        },
        attribute: false,
        ns: "WL5G3N1"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    EmailCommunicationAllowedIndicator: {
      type: "TypeIndicatorType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N1:EmailCommunicationAllowedIndicator",
        type: "WL5G3N2:IndicatorType",
        "xsd:annotation": {
          "xsd:documentation": "Indicates whether or not emailing to the customer is allowed"
        },
        attribute: false,
        ns: "WL5G3N1"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    FaxCommunicationAllowedIndicator: {
      type: "TypeIndicatorType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N1:FaxCommunicationAllowedIndicator",
        type: "WL5G3N2:IndicatorType",
        "xsd:annotation": {
          "xsd:documentation": "Indicates whether or not faxing the customer is allowed"
        },
        attribute: false,
        ns: "WL5G3N1"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    MailCommunicationAllowedIndicator: {
      type: "TypeIndicatorType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N1:MailCommunicationAllowedIndicator",
        type: "WL5G3N2:IndicatorType",
        "xsd:annotation": {
          "xsd:documentation": "Indicates whether or not mailing the customer is allowed"
        },
        attribute: false,
        ns: "WL5G3N1"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    CountrySubDivision: {
      type: "TypeStringType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N1:CountrySubDivision",
        type: "WL5G3N2:StringType",
        "xsd:annotation": {
          "xsd:documentation": "The country sub-division (state, province, district, city etc.) with the most restrictive sharing preference applicable to the customer"
        },
        attribute: false,
        ns: "WL5G3N1"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    PendingStatusStartDate: {
      type: "TypeDateType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N1:PendingStatusStartDate",
        type: "WL5G3N2:DateType",
        "xsd:annotation": {
          "xsd:documentation": "Date when the privacy preferences are set to a pending state (e.g., the value for affiliate preference, non-affiliate preference etc. is set to PEND)"
        },
        attribute: false,
        ns: "WL5G3N1"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    PendingStatusEndDate: {
      type: "TypeDateType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N1:PendingStatusEndDate",
        type: "WL5G3N2:DateType",
        "xsd:annotation": {
          "xsd:documentation": "Date when the privacy preferences are no longer in pending state. This could happen if the customer specifies the privacy preferences or the system defaults them"
        },
        attribute: false,
        ns: "WL5G3N1"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    PendingStatusMaximumDuration: {
      type: "TypeDurationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N1:PendingStatusMaximumDuration",
        type: "WL5G3N2:DurationType",
        "xsd:annotation": {
          "xsd:documentation": "The maximum duration for which the privacy preferences may be in a pending state. This duration may be governed by state laws etc"
        },
        attribute: false,
        ns: "WL5G3N1"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    CommunicationDissuasionIndicator: {
      type: "TypeIndicatorType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N1:CommunicationDissuasionIndicator",
        type: "WL5G3N2:IndicatorType",
        "xsd:annotation": {
          "xsd:documentation": "Indicates whether or not the customer may be contacted via any communication channel."
        },
        attribute: false,
        ns: "WL5G3N1"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    HighlySensitivePartyCommunicationDissuasionIndicator: {
      type: "TypeIndicatorType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N1:HighlySensitivePartyCommunicationDissuasionIndicator",
        type: "WL5G3N2:IndicatorType",
        "xsd:annotation": {
          "xsd:documentation": "Indicates if the customer should not be contacted since he / she is deemed to be holding a sensitive position or has a high stature such as CEO, member of a legislative body etc."
        },
        attribute: false,
        ns: "WL5G3N1"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    DeceasedPartyCommunicationDissuasionIndicator: {
      type: "TypeIndicatorType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N1:DeceasedPartyCommunicationDissuasionIndicator",
        type: "WL5G3N2:IndicatorType",
        "xsd:annotation": {
          "xsd:documentation": "Indicates whether communication should be stopped since the person is deceased"
        },
        attribute: false,
        ns: "WL5G3N1"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    AffiliatePrivacyPreference: {
      type: "TypePrivacyPreferenceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:AffiliatePrivacyPreference",
        type: "PrivacyPreferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Privacy Preferences for Affiliates"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    NonAffiliatePrivacyPreference: {
      type: "TypePrivacyPreferenceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:NonAffiliatePrivacyPreference",
        type: "PrivacyPreferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Privacy Preferences for NonAffiliates"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    PartnerPrivacyPreference: {
      type: "TypePrivacyPreferenceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:PartnerPrivacyPreference",
        type: "PrivacyPreferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Privacy Preferences for Partners"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    TeleMarketerPrivacyPreference: {
      type: "TypePrivacyPreferenceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:TeleMarketerPrivacyPreference",
        type: "PrivacyPreferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Privacy Preferences for Tele-marketers"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    PrivacyNoticeCommunication: {
      type: "TypePrivacyNoticeCommunicationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N1:PrivacyNoticeCommunication",
        type: "PrivacyNoticeCommunicationType",
        "xsd:annotation": {
          "xsd:documentation": "Setting related to annual privacy notice"
        },
        attribute: false,
        ns: "WL5G3N1"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Custom: {
      type: "TypeCustomCustomerPartyPrivacyProfileType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N1:Custom",
        type: "corecustomerpartycust:CustomCustomerPartyPrivacyProfileType",
        attribute: false,
        ns: "WL5G3N1"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    actionCode: {
      type: "TypeActionCodeType",
      wsdlDefinition: {
        name: "actionCode",
        type: "WL5G3N2:ActionCodeType",
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
	  PrivacyLevelCode: {
      type: "TypeCodeType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N1:PrivacyLevelCode",
        type: "WL5G3N2:CodeType",
        "xsd:annotation": {
          "xsd:documentation": "Privacy level of the customer (e.g., Opt In, Opt Out Affiliate, Opt Out All Parties, Opt Out Third Parties etc.)"
        },
        attribute: false,
        ns: "WL5G3N1"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    PhoneCommunicationAllowedIndicator: {
      type: "TypeIndicatorType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N1:PhoneCommunicationAllowedIndicator",
        type: "WL5G3N2:IndicatorType",
        "xsd:annotation": {
          "xsd:documentation": "Indicates whether or not calling the customer is allowed"
        },
        attribute: false,
        ns: "WL5G3N1"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    EmailCommunicationAllowedIndicator: {
      type: "TypeIndicatorType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N1:EmailCommunicationAllowedIndicator",
        type: "WL5G3N2:IndicatorType",
        "xsd:annotation": {
          "xsd:documentation": "Indicates whether or not emailing to the customer is allowed"
        },
        attribute: false,
        ns: "WL5G3N1"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    FaxCommunicationAllowedIndicator: {
      type: "TypeIndicatorType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N1:FaxCommunicationAllowedIndicator",
        type: "WL5G3N2:IndicatorType",
        "xsd:annotation": {
          "xsd:documentation": "Indicates whether or not faxing the customer is allowed"
        },
        attribute: false,
        ns: "WL5G3N1"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    MailCommunicationAllowedIndicator: {
      type: "TypeIndicatorType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N1:MailCommunicationAllowedIndicator",
        type: "WL5G3N2:IndicatorType",
        "xsd:annotation": {
          "xsd:documentation": "Indicates whether or not mailing the customer is allowed"
        },
        attribute: false,
        ns: "WL5G3N1"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    CountrySubDivision: {
      type: "TypeStringType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N1:CountrySubDivision",
        type: "WL5G3N2:StringType",
        "xsd:annotation": {
          "xsd:documentation": "The country sub-division (state, province, district, city etc.) with the most restrictive sharing preference applicable to the customer"
        },
        attribute: false,
        ns: "WL5G3N1"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    PendingStatusStartDate: {
      type: "TypeDateType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N1:PendingStatusStartDate",
        type: "WL5G3N2:DateType",
        "xsd:annotation": {
          "xsd:documentation": "Date when the privacy preferences are set to a pending state (e.g., the value for affiliate preference, non-affiliate preference etc. is set to PEND)"
        },
        attribute: false,
        ns: "WL5G3N1"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    PendingStatusEndDate: {
      type: "TypeDateType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N1:PendingStatusEndDate",
        type: "WL5G3N2:DateType",
        "xsd:annotation": {
          "xsd:documentation": "Date when the privacy preferences are no longer in pending state. This could happen if the customer specifies the privacy preferences or the system defaults them"
        },
        attribute: false,
        ns: "WL5G3N1"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    PendingStatusMaximumDuration: {
      type: "TypeDurationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N1:PendingStatusMaximumDuration",
        type: "WL5G3N2:DurationType",
        "xsd:annotation": {
          "xsd:documentation": "The maximum duration for which the privacy preferences may be in a pending state. This duration may be governed by state laws etc"
        },
        attribute: false,
        ns: "WL5G3N1"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    CommunicationDissuasionIndicator: {
      type: "TypeIndicatorType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N1:CommunicationDissuasionIndicator",
        type: "WL5G3N2:IndicatorType",
        "xsd:annotation": {
          "xsd:documentation": "Indicates whether or not the customer may be contacted via any communication channel."
        },
        attribute: false,
        ns: "WL5G3N1"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    HighlySensitivePartyCommunicationDissuasionIndicator: {
      type: "TypeIndicatorType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N1:HighlySensitivePartyCommunicationDissuasionIndicator",
        type: "WL5G3N2:IndicatorType",
        "xsd:annotation": {
          "xsd:documentation": "Indicates if the customer should not be contacted since he / she is deemed to be holding a sensitive position or has a high stature such as CEO, member of a legislative body etc."
        },
        attribute: false,
        ns: "WL5G3N1"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    DeceasedPartyCommunicationDissuasionIndicator: {
      type: "TypeIndicatorType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N1:DeceasedPartyCommunicationDissuasionIndicator",
        type: "WL5G3N2:IndicatorType",
        "xsd:annotation": {
          "xsd:documentation": "Indicates whether communication should be stopped since the person is deceased"
        },
        attribute: false,
        ns: "WL5G3N1"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    AffiliatePrivacyPreference: {
      type: "TypePrivacyPreferenceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:AffiliatePrivacyPreference",
        type: "PrivacyPreferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Privacy Preferences for Affiliates"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    NonAffiliatePrivacyPreference: {
      type: "TypePrivacyPreferenceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:NonAffiliatePrivacyPreference",
        type: "PrivacyPreferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Privacy Preferences for NonAffiliates"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    PartnerPrivacyPreference: {
      type: "TypePrivacyPreferenceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:PartnerPrivacyPreference",
        type: "PrivacyPreferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Privacy Preferences for Partners"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    TeleMarketerPrivacyPreference: {
      type: "TypePrivacyPreferenceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:TeleMarketerPrivacyPreference",
        type: "PrivacyPreferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Privacy Preferences for Tele-marketers"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    PrivacyNoticeCommunication: {
      type: "TypePrivacyNoticeCommunicationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N1:PrivacyNoticeCommunication",
        type: "PrivacyNoticeCommunicationType",
        "xsd:annotation": {
          "xsd:documentation": "Setting related to annual privacy notice"
        },
        attribute: false,
        ns: "WL5G3N1"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Custom: {
      type: "TypeCustomCustomerPartyPrivacyProfileType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N1:Custom",
        type: "corecustomerpartycust:CustomCustomerPartyPrivacyProfileType",
        attribute: false,
        ns: "WL5G3N1"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    actionCode: {
      type: "TypeActionCodeType",
      wsdlDefinition: {
        name: "actionCode",
        type: "WL5G3N2:ActionCodeType",
        use: "optional",
        attribute: true
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCustomerPartyPrivacyProfileType;
Modeler.register(TypeCustomerPartyPrivacyProfileType, "TypeCustomerPartyPrivacyProfileType");
