var Modeler = require("../Modeler.js");
var className = 'ElementCustomerPartyBankAccount';

var ElementCustomerPartyBankAccount = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomerPartyBankAccount: {
      type: "TypeCustomerPartyBankAccountType",
      wsdlDefinition: {
        name: "CustomerPartyBankAccount",
        type: "CustomerPartyBankAccountType",
        "xsd:annotation": {
          "xsd:documentation": "Bank Accounts owned by this Customer Account"
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
	  CustomerPartyBankAccount: {
      type: "TypeCustomerPartyBankAccountType",
      wsdlDefinition: {
        name: "CustomerPartyBankAccount",
        type: "CustomerPartyBankAccountType",
        "xsd:annotation": {
          "xsd:documentation": "Bank Accounts owned by this Customer Account"
        },
        ns: "WL5G3N1",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementCustomerPartyBankAccount;
Modeler.register(ElementCustomerPartyBankAccount, "ElementCustomerPartyBankAccount");
