var Modeler = require("../Modeler.js");
var className = 'ElementChargeProcessingBankAccount';

var ElementChargeProcessingBankAccount = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  ChargeProcessingBankAccount: {
      type: "TypeBankAccountType",
      wsdlDefinition: {
        name: "ChargeProcessingBankAccount",
        type: "BankAccountType",
        "xsd:annotation": {
          "xsd:documentation": "Reference to the Bank Account that will be used to process the charges incurred in a financial transaction"
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
	  ChargeProcessingBankAccount: {
      type: "TypeBankAccountType",
      wsdlDefinition: {
        name: "ChargeProcessingBankAccount",
        type: "BankAccountType",
        "xsd:annotation": {
          "xsd:documentation": "Reference to the Bank Account that will be used to process the charges incurred in a financial transaction"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementChargeProcessingBankAccount;
Modeler.register(ElementChargeProcessingBankAccount, "ElementChargeProcessingBankAccount");
