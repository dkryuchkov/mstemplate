var Modeler = require("../Modeler.js");
var className = 'ElementCustomerPartyAccountSiteBillingProfile';

var ElementCustomerPartyAccountSiteBillingProfile = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomerPartyAccountSiteBillingProfile: {
      type: "TypeCustomerPartyAccountSiteBillingProfileType",
      wsdlDefinition: {
        name: "CustomerPartyAccountSiteBillingProfile",
        type: "CustomerPartyAccountSiteBillingProfileType",
        "xsd:annotation": {
          "xsd:documentation": "Billing preferences applicable for this Customer Site"
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
	  CustomerPartyAccountSiteBillingProfile: {
      type: "TypeCustomerPartyAccountSiteBillingProfileType",
      wsdlDefinition: {
        name: "CustomerPartyAccountSiteBillingProfile",
        type: "CustomerPartyAccountSiteBillingProfileType",
        "xsd:annotation": {
          "xsd:documentation": "Billing preferences applicable for this Customer Site"
        },
        ns: "WL5G3N1",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementCustomerPartyAccountSiteBillingProfile;
Modeler.register(ElementCustomerPartyAccountSiteBillingProfile, "ElementCustomerPartyAccountSiteBillingProfile");
