var Modeler = require("../Modeler.js");
var className = 'TypeFaxCommunicationType';

var TypeFaxCommunicationType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
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
    CompleteNumber: {
      type: "TypeTextType",
      wsdlDefinition: {
        maxOccurs: "unbounded",
        minOccurs: "0",
        name: "WL5G3N2:CompleteNumber",
        type: "TextType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    },
    CountryCode: {
      type: "TypeCodeType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:CountryCode",
        type: "CodeType",
        "xsd:annotation": {
          "xsd:documentation": "The country dialing code for a communication number"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    AreaCode: {
      type: "TypeCodeType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:AreaCode",
        type: "CodeType",
        "xsd:annotation": {
          "xsd:documentation": "The area dialing code for a communication number"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    LocalNumber: {
      type: "TypeTextType",
      wsdlDefinition: {
        maxOccurs: "unbounded",
        minOccurs: "0",
        name: "WL5G3N2:LocalNumber",
        type: "TextType",
        "xsd:annotation": {
          "xsd:documentation": "The commication number, not including country dialing or area dialing codes"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    },
    ExtensionNumber: {
      type: "TypeTextType",
      wsdlDefinition: {
        maxOccurs: "unbounded",
        minOccurs: "0",
        name: "WL5G3N2:ExtensionNumber",
        type: "TextType",
        "xsd:annotation": {
          "xsd:documentation": "The extension of the assoicated communication number"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    },
    Access: {
      type: "TypeTextType",
      wsdlDefinition: {
        maxOccurs: "unbounded",
        minOccurs: "0",
        name: "WL5G3N2:Access",
        type: "TextType",
        "xsd:annotation": {
          "xsd:documentation": "The text that permits access to the electronic network of the associated communication number such as telephone network, for example 9, *70."
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
    CompleteNumber: {
      type: "TypeTextType",
      wsdlDefinition: {
        maxOccurs: "unbounded",
        minOccurs: "0",
        name: "WL5G3N2:CompleteNumber",
        type: "TextType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    },
    CountryCode: {
      type: "TypeCodeType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:CountryCode",
        type: "CodeType",
        "xsd:annotation": {
          "xsd:documentation": "The country dialing code for a communication number"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    AreaCode: {
      type: "TypeCodeType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:AreaCode",
        type: "CodeType",
        "xsd:annotation": {
          "xsd:documentation": "The area dialing code for a communication number"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    LocalNumber: {
      type: "TypeTextType",
      wsdlDefinition: {
        maxOccurs: "unbounded",
        minOccurs: "0",
        name: "WL5G3N2:LocalNumber",
        type: "TextType",
        "xsd:annotation": {
          "xsd:documentation": "The commication number, not including country dialing or area dialing codes"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    },
    ExtensionNumber: {
      type: "TypeTextType",
      wsdlDefinition: {
        maxOccurs: "unbounded",
        minOccurs: "0",
        name: "WL5G3N2:ExtensionNumber",
        type: "TextType",
        "xsd:annotation": {
          "xsd:documentation": "The extension of the assoicated communication number"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    },
    Access: {
      type: "TypeTextType",
      wsdlDefinition: {
        maxOccurs: "unbounded",
        minOccurs: "0",
        name: "WL5G3N2:Access",
        type: "TextType",
        "xsd:annotation": {
          "xsd:documentation": "The text that permits access to the electronic network of the associated communication number such as telephone network, for example 9, *70."
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeFaxCommunicationType;
Modeler.register(TypeFaxCommunicationType, "TypeFaxCommunicationType");
