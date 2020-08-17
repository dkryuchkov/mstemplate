var Modeler = require("../Modeler.js");
var className = 'ElementDefaultCustomerBankAccount';

var ElementDefaultCustomerBankAccount = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  DefaultCustomerBankAccount: {
      type: "TypeBankAccountType",
      wsdlDefinition: {
        name: "DefaultCustomerBankAccount",
        type: "BankAccountType",
        "xsd:annotation": {
          "xsd:documentation": "This is the customer bank account to be used as the default one for payment transactions"
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
	  DefaultCustomerBankAccount: {
      type: "TypeBankAccountType",
      wsdlDefinition: {
        name: "DefaultCustomerBankAccount",
        type: "BankAccountType",
        "xsd:annotation": {
          "xsd:documentation": "This is the customer bank account to be used as the default one for payment transactions"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementDefaultCustomerBankAccount;
Modeler.register(ElementDefaultCustomerBankAccount, "ElementDefaultCustomerBankAccount");
