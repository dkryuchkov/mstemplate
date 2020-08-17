var Modeler = require("../Modeler.js");
var className = 'ElementCustomerPartyShippingProfile';

var ElementCustomerPartyShippingProfile = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomerPartyShippingProfile: {
      type: "TypeCustomerPartyShippingProfileType",
      wsdlDefinition: {
        name: "CustomerPartyShippingProfile",
        type: "CustomerPartyShippingProfileType",
        "xsd:annotation": {
          "xsd:documentation": "Options for shipping to the customer"
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
	  CustomerPartyShippingProfile: {
      type: "TypeCustomerPartyShippingProfileType",
      wsdlDefinition: {
        name: "CustomerPartyShippingProfile",
        type: "CustomerPartyShippingProfileType",
        "xsd:annotation": {
          "xsd:documentation": "Options for shipping to the customer"
        },
        ns: "WL5G3N1",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementCustomerPartyShippingProfile;
Modeler.register(ElementCustomerPartyShippingProfile, "ElementCustomerPartyShippingProfile");
