var Modeler = require("../Modeler.js");
var className = 'ElementCustomerPartyAccountSiteUsageIdentification';

var ElementCustomerPartyAccountSiteUsageIdentification = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomerPartyAccountSiteUsageIdentification: {
      type: "TypeCustomerPartyAccountSiteUsageIdentificationType",
      wsdlDefinition: {
        name: "CustomerPartyAccountSiteUsageIdentification",
        type: "CustomerPartyAccountSiteUsageIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "An identification pointing to a CustomerPartyAccountSiteUsage in the CustomerParty object."
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
	  CustomerPartyAccountSiteUsageIdentification: {
      type: "TypeCustomerPartyAccountSiteUsageIdentificationType",
      wsdlDefinition: {
        name: "CustomerPartyAccountSiteUsageIdentification",
        type: "CustomerPartyAccountSiteUsageIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "An identification pointing to a CustomerPartyAccountSiteUsage in the CustomerParty object."
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementCustomerPartyAccountSiteUsageIdentification;
Modeler.register(ElementCustomerPartyAccountSiteUsageIdentification, "ElementCustomerPartyAccountSiteUsageIdentification");
