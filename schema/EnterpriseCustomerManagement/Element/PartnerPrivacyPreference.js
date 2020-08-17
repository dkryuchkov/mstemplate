var Modeler = require("../Modeler.js");
var className = 'ElementPartnerPrivacyPreference';

var ElementPartnerPrivacyPreference = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  PartnerPrivacyPreference: {
      type: "TypePrivacyPreferenceType",
      wsdlDefinition: {
        name: "PartnerPrivacyPreference",
        type: "PrivacyPreferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Preferences related to the sharing of customer information with partners such as resellers etc."
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
	  PartnerPrivacyPreference: {
      type: "TypePrivacyPreferenceType",
      wsdlDefinition: {
        name: "PartnerPrivacyPreference",
        type: "PrivacyPreferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Preferences related to the sharing of customer information with partners such as resellers etc."
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementPartnerPrivacyPreference;
Modeler.register(ElementPartnerPrivacyPreference, "ElementPartnerPrivacyPreference");
