var Modeler = require("../Modeler.js");
var className = 'ElementSourceFinancialAccount';

var ElementSourceFinancialAccount = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  SourceFinancialAccount: {
      type: "TypeFinancialAccountType",
      wsdlDefinition: {
        name: "SourceFinancialAccount",
        type: "FinancialAccountType",
        "xsd:annotation": {
          "xsd:documentation": "Details about the financial accounts which is a monetary source, e.g., in a financial transaction"
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
	  SourceFinancialAccount: {
      type: "TypeFinancialAccountType",
      wsdlDefinition: {
        name: "SourceFinancialAccount",
        type: "FinancialAccountType",
        "xsd:annotation": {
          "xsd:documentation": "Details about the financial accounts which is a monetary source, e.g., in a financial transaction"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementSourceFinancialAccount;
Modeler.register(ElementSourceFinancialAccount, "ElementSourceFinancialAccount");
