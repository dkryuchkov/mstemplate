var Modeler = require("../Modeler.js");
var className = 'ElementAffiliatePrivacyPreference';

var ElementAffiliatePrivacyPreference = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  AffiliatePrivacyPreference: {
      type: "TypePrivacyPreferenceType",
      wsdlDefinition: {
        name: "AffiliatePrivacyPreference",
        type: "PrivacyPreferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Preferences related to the sharing of customer information with affiliates such as subsidiaries etc."
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
	  AffiliatePrivacyPreference: {
      type: "TypePrivacyPreferenceType",
      wsdlDefinition: {
        name: "AffiliatePrivacyPreference",
        type: "PrivacyPreferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Preferences related to the sharing of customer information with affiliates such as subsidiaries etc."
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementAffiliatePrivacyPreference;
Modeler.register(ElementAffiliatePrivacyPreference, "ElementAffiliatePrivacyPreference");
