var Modeler = require("../Modeler.js");
var className = 'ElementCustomerPartyAccountSiteShippingProfile';

var ElementCustomerPartyAccountSiteShippingProfile = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomerPartyAccountSiteShippingProfile: {
      type: "TypeCustomerPartyAccountSiteShippingProfileType",
      wsdlDefinition: {
        name: "CustomerPartyAccountSiteShippingProfile",
        type: "CustomerPartyAccountSiteShippingProfileType",
        "xsd:annotation": {
          "xsd:documentation": "Shipping preferences applicable for this Customer Site"
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
	  CustomerPartyAccountSiteShippingProfile: {
      type: "TypeCustomerPartyAccountSiteShippingProfileType",
      wsdlDefinition: {
        name: "CustomerPartyAccountSiteShippingProfile",
        type: "CustomerPartyAccountSiteShippingProfileType",
        "xsd:annotation": {
          "xsd:documentation": "Shipping preferences applicable for this Customer Site"
        },
        ns: "WL5G3N1",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementCustomerPartyAccountSiteShippingProfile;
Modeler.register(ElementCustomerPartyAccountSiteShippingProfile, "ElementCustomerPartyAccountSiteShippingProfile");
