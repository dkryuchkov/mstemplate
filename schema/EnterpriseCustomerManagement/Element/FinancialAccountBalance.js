var Modeler = require("../Modeler.js");
var className = 'ElementFinancialAccountBalance';

var ElementFinancialAccountBalance = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  FinancialAccountBalance: {
      type: "TypeFinancialAccountBalanceType",
      wsdlDefinition: {
        name: "FinancialAccountBalance",
        type: "FinancialAccountBalanceType",
        "xsd:annotation": {
          "xsd:documentation": "Details about the financial accounts of a person or organization"
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
	  FinancialAccountBalance: {
      type: "TypeFinancialAccountBalanceType",
      wsdlDefinition: {
        name: "FinancialAccountBalance",
        type: "FinancialAccountBalanceType",
        "xsd:annotation": {
          "xsd:documentation": "Details about the financial accounts of a person or organization"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementFinancialAccountBalance;
Modeler.register(ElementFinancialAccountBalance, "ElementFinancialAccountBalance");
