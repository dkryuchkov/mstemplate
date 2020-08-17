var Modeler = require("../Modeler.js");
var className = 'TypeAddressCommunicationType';

var TypeAddressCommunicationType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  Address: {
      type: "TypeAddressType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Address",
        type: "AddressType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    UseCode: {
      type: "TypeCodeType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:UseCode",
        type: "CodeType",
        "xsd:annotation": {
          "xsd:documentation": "Code identifying the usage of the contact point e.g. business, private, etc"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
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
    PrivacyProfile: {
      type: "TypePrivacyProfileType",
      wsdlDefinition: {
        maxOccurs: "unbounded",
        minOccurs: "0",
        name: "WL5G3N2:PrivacyProfile",
        type: "PrivacyProfileType",
        "xsd:annotation": {
          "xsd:documentation": "Settings related to mail communication privacy profile"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    }
	};
	
	if(parentObj === 'getWsdlDefinition')
	{
		return data;
	}
	
	// Class property definitions here:
	Modeler.extend(className, {
	  Address: {
      type: "TypeAddressType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Address",
        type: "AddressType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    UseCode: {
      type: "TypeCodeType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:UseCode",
        type: "CodeType",
        "xsd:annotation": {
          "xsd:documentation": "Code identifying the usage of the contact point e.g. business, private, etc"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
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
    PrivacyProfile: {
      type: "TypePrivacyProfileType",
      wsdlDefinition: {
        maxOccurs: "unbounded",
        minOccurs: "0",
        name: "WL5G3N2:PrivacyProfile",
        type: "PrivacyProfileType",
        "xsd:annotation": {
          "xsd:documentation": "Settings related to mail communication privacy profile"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeAddressCommunicationType;
Modeler.register(TypeAddressCommunicationType, "TypeAddressCommunicationType");
