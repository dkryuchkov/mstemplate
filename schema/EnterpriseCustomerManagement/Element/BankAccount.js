var Modeler = require("../Modeler.js");
var className = 'ElementBankAccount';

var ElementBankAccount = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  BankAccount: {
      type: "TypeBankAccountType",
      wsdlDefinition: {
        name: "BankAccount",
        type: "BankAccountType",
        "xsd:annotation": {
          "xsd:documentation": "A bank account is a monetary account with a banking institution recording the balance of money for a customer"
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
	  BankAccount: {
      type: "TypeBankAccountType",
      wsdlDefinition: {
        name: "BankAccount",
        type: "BankAccountType",
        "xsd:annotation": {
          "xsd:documentation": "A bank account is a monetary account with a banking institution recording the balance of money for a customer"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementBankAccount;
Modeler.register(ElementBankAccount, "ElementBankAccount");
