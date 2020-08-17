var Modeler = require("../Modeler.js");
var className = 'ElementCustomerPartyAccountSiteIdentification';

var ElementCustomerPartyAccountSiteIdentification = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomerPartyAccountSiteIdentification: {
      type: "TypeCustomerPartyAccountSiteIdentificationType",
      wsdlDefinition: {
        name: "CustomerPartyAccountSiteIdentification",
        type: "CustomerPartyAccountSiteIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "An identification pointing to a Customer Party Account Site entity within a Customer Party Account entity of the Customer Party object."
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
	  CustomerPartyAccountSiteIdentification: {
      type: "TypeCustomerPartyAccountSiteIdentificationType",
      wsdlDefinition: {
        name: "CustomerPartyAccountSiteIdentification",
        type: "CustomerPartyAccountSiteIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "An identification pointing to a Customer Party Account Site entity within a Customer Party Account entity of the Customer Party object."
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementCustomerPartyAccountSiteIdentification;
Modeler.register(ElementCustomerPartyAccountSiteIdentification, "ElementCustomerPartyAccountSiteIdentification");
