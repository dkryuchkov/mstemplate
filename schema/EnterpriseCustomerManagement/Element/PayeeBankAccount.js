var Modeler = require("../Modeler.js");
var className = 'ElementPayeeBankAccount';

var ElementPayeeBankAccount = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  PayeeBankAccount: {
      type: "TypeBankAccountType",
      wsdlDefinition: {
        name: "PayeeBankAccount",
        type: "BankAccountType",
        "xsd:annotation": {
          "xsd:documentation": "Reference to the Bank Account of a Payee in a financial transaction."
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
	  PayeeBankAccount: {
      type: "TypeBankAccountType",
      wsdlDefinition: {
        name: "PayeeBankAccount",
        type: "BankAccountType",
        "xsd:annotation": {
          "xsd:documentation": "Reference to the Bank Account of a Payee in a financial transaction."
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementPayeeBankAccount;
Modeler.register(ElementPayeeBankAccount, "ElementPayeeBankAccount");
