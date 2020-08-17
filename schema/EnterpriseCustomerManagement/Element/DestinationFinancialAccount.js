var Modeler = require("../Modeler.js");
var className = 'ElementDestinationFinancialAccount';

var ElementDestinationFinancialAccount = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  DestinationFinancialAccount: {
      type: "TypeFinancialAccountType",
      wsdlDefinition: {
        name: "DestinationFinancialAccount",
        type: "FinancialAccountType",
        "xsd:annotation": {
          "xsd:documentation": "Details about the financial accounts which is a monetary destination, e.g., in a financial transaction"
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
	  DestinationFinancialAccount: {
      type: "TypeFinancialAccountType",
      wsdlDefinition: {
        name: "DestinationFinancialAccount",
        type: "FinancialAccountType",
        "xsd:annotation": {
          "xsd:documentation": "Details about the financial accounts which is a monetary destination, e.g., in a financial transaction"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementDestinationFinancialAccount;
Modeler.register(ElementDestinationFinancialAccount, "ElementDestinationFinancialAccount");
