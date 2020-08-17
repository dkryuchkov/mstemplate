var Modeler = require("../Modeler.js");
var className = 'ElementCustomerPartyFinancialAccountBalance';

var ElementCustomerPartyFinancialAccountBalance = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomerPartyFinancialAccountBalance: {
      type: "TypeCustomerPartyFinancialAccountBalanceType",
      wsdlDefinition: {
        name: "CustomerPartyFinancialAccountBalance",
        type: "CustomerPartyFinancialAccountBalanceType",
        "xsd:annotation": {
          "xsd:documentation": "Indicates the different types of balances in the financial accounts."
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
	  CustomerPartyFinancialAccountBalance: {
      type: "TypeCustomerPartyFinancialAccountBalanceType",
      wsdlDefinition: {
        name: "CustomerPartyFinancialAccountBalance",
        type: "CustomerPartyFinancialAccountBalanceType",
        "xsd:annotation": {
          "xsd:documentation": "Indicates the different types of balances in the financial accounts."
        },
        ns: "WL5G3N1",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementCustomerPartyFinancialAccountBalance;
Modeler.register(ElementCustomerPartyFinancialAccountBalance, "ElementCustomerPartyFinancialAccountBalance");
