var Modeler = require("../Modeler.js");
var className = 'ElementCustomerPartyPaymentProfile';

var ElementCustomerPartyPaymentProfile = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomerPartyPaymentProfile: {
      type: "TypeCustomerPartyPaymentProfileType",
      wsdlDefinition: {
        name: "CustomerPartyPaymentProfile",
        type: "CustomerPartyPaymentProfileType",
        "xsd:annotation": {
          "xsd:documentation": "Options for receiving payments from this customer Party"
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
	  CustomerPartyPaymentProfile: {
      type: "TypeCustomerPartyPaymentProfileType",
      wsdlDefinition: {
        name: "CustomerPartyPaymentProfile",
        type: "CustomerPartyPaymentProfileType",
        "xsd:annotation": {
          "xsd:documentation": "Options for receiving payments from this customer Party"
        },
        ns: "WL5G3N1",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementCustomerPartyPaymentProfile;
Modeler.register(ElementCustomerPartyPaymentProfile, "ElementCustomerPartyPaymentProfile");
