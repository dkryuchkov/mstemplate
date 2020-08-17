var Modeler = require("../Modeler.js");
var className = 'ElementCustomerPartyAccount';

var ElementCustomerPartyAccount = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomerPartyAccount: {
      type: "TypeCustomerPartyAccountType",
      wsdlDefinition: {
        name: "CustomerPartyAccount",
        type: "CustomerPartyAccountType",
        "xsd:annotation": {
          "xsd:documentation": "Financial arrangement that a person or organization has with deploying company to buy products and services e.g. John's buying account at Amazon, Dell's buying account at Oracle"
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
	  CustomerPartyAccount: {
      type: "TypeCustomerPartyAccountType",
      wsdlDefinition: {
        name: "CustomerPartyAccount",
        type: "CustomerPartyAccountType",
        "xsd:annotation": {
          "xsd:documentation": "Financial arrangement that a person or organization has with deploying company to buy products and services e.g. John's buying account at Amazon, Dell's buying account at Oracle"
        },
        ns: "WL5G3N1",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementCustomerPartyAccount;
Modeler.register(ElementCustomerPartyAccount, "ElementCustomerPartyAccount");
