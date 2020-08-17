var Modeler = require("../Modeler.js");
var className = 'ElementFinancialAccountHolder';

var ElementFinancialAccountHolder = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  FinancialAccountHolder: {
      type: "TypeFinancialAccountHolderType",
      wsdlDefinition: {
        name: "FinancialAccountHolder",
        type: "FinancialAccountHolderType",
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
	  FinancialAccountHolder: {
      type: "TypeFinancialAccountHolderType",
      wsdlDefinition: {
        name: "FinancialAccountHolder",
        type: "FinancialAccountHolderType",
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

module.exports = ElementFinancialAccountHolder;
Modeler.register(ElementFinancialAccountHolder, "ElementFinancialAccountHolder");
