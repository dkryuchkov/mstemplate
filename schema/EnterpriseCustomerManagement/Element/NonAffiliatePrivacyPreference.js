var Modeler = require("../Modeler.js");
var className = 'ElementNonAffiliatePrivacyPreference';

var ElementNonAffiliatePrivacyPreference = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  NonAffiliatePrivacyPreference: {
      type: "TypePrivacyPreferenceType",
      wsdlDefinition: {
        name: "NonAffiliatePrivacyPreference",
        type: "PrivacyPreferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Preferences related to the sharing of customer information with non-affiliate organizations"
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
	  NonAffiliatePrivacyPreference: {
      type: "TypePrivacyPreferenceType",
      wsdlDefinition: {
        name: "NonAffiliatePrivacyPreference",
        type: "PrivacyPreferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Preferences related to the sharing of customer information with non-affiliate organizations"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementNonAffiliatePrivacyPreference;
Modeler.register(ElementNonAffiliatePrivacyPreference, "ElementNonAffiliatePrivacyPreference");
