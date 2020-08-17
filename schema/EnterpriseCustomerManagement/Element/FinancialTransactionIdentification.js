var Modeler = require("../Modeler.js");
var className = 'ElementFinancialTransactionIdentification';

var ElementFinancialTransactionIdentification = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  FinancialTransactionIdentification: {
      type: "TypeFinancialTransactionIdentificationType",
      wsdlDefinition: {
        name: "FinancialTransactionIdentification",
        type: "FinancialTransactionIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Unique identification of a Financial Transaction object",
          "xsd:appinfo": {
            "ebocontext:BusinessContext": "BankingAndWealthManagement"
          }
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
	  FinancialTransactionIdentification: {
      type: "TypeFinancialTransactionIdentificationType",
      wsdlDefinition: {
        name: "FinancialTransactionIdentification",
        type: "FinancialTransactionIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Unique identification of a Financial Transaction object",
          "xsd:appinfo": {
            "ebocontext:BusinessContext": "BankingAndWealthManagement"
          }
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementFinancialTransactionIdentification;
Modeler.register(ElementFinancialTransactionIdentification, "ElementFinancialTransactionIdentification");
