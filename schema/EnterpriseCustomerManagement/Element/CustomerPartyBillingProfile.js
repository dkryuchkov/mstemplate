var Modeler = require("../Modeler.js");
var className = 'ElementCustomerPartyBillingProfile';

var ElementCustomerPartyBillingProfile = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomerPartyBillingProfile: {
      type: "TypeCustomerPartyBillingProfileType",
      wsdlDefinition: {
        name: "CustomerPartyBillingProfile",
        type: "CustomerPartyBillingProfileType",
        "xsd:annotation": {
          "xsd:documentation": "Options for billing the customer OR creating invoice"
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
	  CustomerPartyBillingProfile: {
      type: "TypeCustomerPartyBillingProfileType",
      wsdlDefinition: {
        name: "CustomerPartyBillingProfile",
        type: "CustomerPartyBillingProfileType",
        "xsd:annotation": {
          "xsd:documentation": "Options for billing the customer OR creating invoice"
        },
        ns: "WL5G3N1",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementCustomerPartyBillingProfile;
Modeler.register(ElementCustomerPartyBillingProfile, "ElementCustomerPartyBillingProfile");
