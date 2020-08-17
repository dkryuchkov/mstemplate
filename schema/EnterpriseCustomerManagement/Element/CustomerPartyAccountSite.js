var Modeler = require("../Modeler.js");
var className = 'ElementCustomerPartyAccountSite';

var ElementCustomerPartyAccountSite = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomerPartyAccountSite: {
      type: "TypeCustomerPartyAccountSiteType",
      wsdlDefinition: {
        name: "CustomerPartyAccountSite",
        type: "CustomerPartyAccountSiteType",
        "xsd:annotation": {
          "xsd:documentation": "Sites where this Customer Party does business"
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
	  CustomerPartyAccountSite: {
      type: "TypeCustomerPartyAccountSiteType",
      wsdlDefinition: {
        name: "CustomerPartyAccountSite",
        type: "CustomerPartyAccountSiteType",
        "xsd:annotation": {
          "xsd:documentation": "Sites where this Customer Party does business"
        },
        ns: "WL5G3N1",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementCustomerPartyAccountSite;
Modeler.register(ElementCustomerPartyAccountSite, "ElementCustomerPartyAccountSite");
