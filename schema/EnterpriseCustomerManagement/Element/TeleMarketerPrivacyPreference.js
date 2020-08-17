var Modeler = require("../Modeler.js");
var className = 'ElementTeleMarketerPrivacyPreference';

var ElementTeleMarketerPrivacyPreference = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  TeleMarketerPrivacyPreference: {
      type: "TypePrivacyPreferenceType",
      wsdlDefinition: {
        name: "TeleMarketerPrivacyPreference",
        type: "PrivacyPreferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Preferences related to the sharing of customer information with tele-marketers"
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
	  TeleMarketerPrivacyPreference: {
      type: "TypePrivacyPreferenceType",
      wsdlDefinition: {
        name: "TeleMarketerPrivacyPreference",
        type: "PrivacyPreferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Preferences related to the sharing of customer information with tele-marketers"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementTeleMarketerPrivacyPreference;
Modeler.register(ElementTeleMarketerPrivacyPreference, "ElementTeleMarketerPrivacyPreference");
