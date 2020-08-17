var Modeler = require("../Modeler.js");
var className = 'ElementFinancialAccount';

var ElementFinancialAccount = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  FinancialAccount: {
      type: "TypeFinancialAccountType",
      wsdlDefinition: {
        name: "FinancialAccount",
        type: "FinancialAccountType",
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
	  FinancialAccount: {
      type: "TypeFinancialAccountType",
      wsdlDefinition: {
        name: "FinancialAccount",
        type: "FinancialAccountType",
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

module.exports = ElementFinancialAccount;
Modeler.register(ElementFinancialAccount, "ElementFinancialAccount");
