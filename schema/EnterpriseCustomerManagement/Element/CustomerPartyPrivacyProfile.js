var Modeler = require("../Modeler.js");
var className = 'ElementCustomerPartyPrivacyProfile';

var ElementCustomerPartyPrivacyProfile = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomerPartyPrivacyProfile: {
      type: "TypeCustomerPartyPrivacyProfileType",
      wsdlDefinition: {
        name: "CustomerPartyPrivacyProfile",
        type: "CustomerPartyPrivacyProfileType",
        "xsd:annotation": {
          "xsd:documentation": "Privacy related settings of the customer"
        },
        ns: "WL5G3N1",
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
	  CustomerPartyPrivacyProfile: {
      type: "TypeCustomerPartyPrivacyProfileType",
      wsdlDefinition: {
        name: "CustomerPartyPrivacyProfile",
        type: "CustomerPartyPrivacyProfileType",
        "xsd:annotation": {
          "xsd:documentation": "Privacy related settings of the customer"
        },
        ns: "WL5G3N1",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementCustomerPartyPrivacyProfile;
Modeler.register(ElementCustomerPartyPrivacyProfile, "ElementCustomerPartyPrivacyProfile");
