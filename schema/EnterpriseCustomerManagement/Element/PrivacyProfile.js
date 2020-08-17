var Modeler = require("../Modeler.js");
var className = 'ElementPrivacyProfile';

var ElementPrivacyProfile = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  PrivacyProfile: {
      type: "TypePrivacyProfileType",
      wsdlDefinition: {
        name: "PrivacyProfile",
        type: "PrivacyProfileType",
        "xsd:annotation": {
          "xsd:documentation": "Settings related to privacy profile"
        },
        ns: "WL5G3N2",
        attribute: false
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
	  PrivacyProfile: {
      type: "TypePrivacyProfileType",
      wsdlDefinition: {
        name: "PrivacyProfile",
        type: "PrivacyProfileType",
        "xsd:annotation": {
          "xsd:documentation": "Settings related to privacy profile"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementPrivacyProfile;
Modeler.register(ElementPrivacyProfile, "ElementPrivacyProfile");
