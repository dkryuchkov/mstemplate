var Modeler = require("../Modeler.js");
var className = 'TypeWebsiteCommunicationType';

var TypeWebsiteCommunicationType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  WebsiteURI: {
      type: "TypeURIType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:WebsiteURI",
        type: "URIType",
        "xsd:annotation": {
          "xsd:documentation": "URI or URL for the communication"
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
          "xsd:documentation": "Code identifying the usage of the web site, e.g. Home Page, Marketing URL, Support URL, etc."
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
    }
	};
	
	if(parentObj === 'getWsdlDefinition')
	{
		return data;
	}
	
	// Class property definitions here:
	Modeler.extend(className, {
	  WebsiteURI: {
      type: "TypeURIType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:WebsiteURI",
        type: "URIType",
        "xsd:annotation": {
          "xsd:documentation": "URI or URL for the communication"
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
          "xsd:documentation": "Code identifying the usage of the web site, e.g. Home Page, Marketing URL, Support URL, etc."
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
    }
	}, parentObj, json);
};

module.exports = TypeWebsiteCommunicationType;
Modeler.register(TypeWebsiteCommunicationType, "TypeWebsiteCommunicationType");
