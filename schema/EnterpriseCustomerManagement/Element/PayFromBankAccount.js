var Modeler = require("../Modeler.js");
var className = 'ElementPayFromBankAccount';

var ElementPayFromBankAccount = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  PayFromBankAccount: {
      type: "TypeBankAccountType",
      wsdlDefinition: {
        name: "PayFromBankAccount",
        type: "BankAccountType",
        "xsd:annotation": {
          "xsd:documentation": "Reference to a Bank Account from where the money is withdrawn for a payment in a financial transaction"
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
	  PayFromBankAccount: {
      type: "TypeBankAccountType",
      wsdlDefinition: {
        name: "PayFromBankAccount",
        type: "BankAccountType",
        "xsd:annotation": {
          "xsd:documentation": "Reference to a Bank Account from where the money is withdrawn for a payment in a financial transaction"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementPayFromBankAccount;
Modeler.register(ElementPayFromBankAccount, "ElementPayFromBankAccount");
