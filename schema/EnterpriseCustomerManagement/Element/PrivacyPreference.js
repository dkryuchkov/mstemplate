var Modeler = require("../Modeler.js");
var className = 'ElementPrivacyPreference';

var ElementPrivacyPreference = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  PrivacyPreference: {
      type: "TypePrivacyPreferenceType",
      wsdlDefinition: {
        name: "PrivacyPreference",
        type: "PrivacyPreferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Settings related to privacy preference"
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
	  PrivacyPreference: {
      type: "TypePrivacyPreferenceType",
      wsdlDefinition: {
        name: "PrivacyPreference",
        type: "PrivacyPreferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Settings related to privacy preference"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementPrivacyPreference;
Modeler.register(ElementPrivacyPreference, "ElementPrivacyPreference");
