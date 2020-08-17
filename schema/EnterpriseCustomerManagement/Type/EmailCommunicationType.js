var Modeler = require("../Modeler.js");
var className = 'TypeEmailCommunicationType';

var TypeEmailCommunicationType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  HTMLPreferredIndicator: {
      type: "TypeIndicatorType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:HTMLPreferredIndicator",
        type: "IndicatorType",
        "xsd:annotation": {
          "xsd:documentation": "Indicates that the communication is preferred in HTML format."
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    URI: {
      type: "TypeURIType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:URI",
        type: "URIType",
        "xsd:annotation": {
          "xsd:documentation": "URI in the case of email communication"
        },
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
    PrivacyProfile: {
      type: "TypePrivacyProfileType",
      wsdlDefinition: {
        maxOccurs: "unbounded",
        minOccurs: "0",
        name: "WL5G3N2:PrivacyProfile",
        type: "PrivacyProfileType",
        "xsd:annotation": {
          "xsd:documentation": "Settings related to email communication privacy profile"
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
	  HTMLPreferredIndicator: {
      type: "TypeIndicatorType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:HTMLPreferredIndicator",
        type: "IndicatorType",
        "xsd:annotation": {
          "xsd:documentation": "Indicates that the communication is preferred in HTML format."
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    URI: {
      type: "TypeURIType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:URI",
        type: "URIType",
        "xsd:annotation": {
          "xsd:documentation": "URI in the case of email communication"
        },
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
    PrivacyProfile: {
      type: "TypePrivacyProfileType",
      wsdlDefinition: {
        maxOccurs: "unbounded",
        minOccurs: "0",
        name: "WL5G3N2:PrivacyProfile",
        type: "PrivacyProfileType",
        "xsd:annotation": {
          "xsd:documentation": "Settings related to email communication privacy profile"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeEmailCommunicationType;
Modeler.register(TypeEmailCommunicationType, "TypeEmailCommunicationType");
