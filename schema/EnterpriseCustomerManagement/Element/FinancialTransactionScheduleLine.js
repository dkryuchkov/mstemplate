var Modeler = require("../Modeler.js");
var className = 'ElementFinancialTransactionScheduleLine';

var ElementFinancialTransactionScheduleLine = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  FinancialTransactionScheduleLine: {
      type: "TypeFinancialTransactionScheduleLineType",
      wsdlDefinition: {
        name: "FinancialTransactionScheduleLine",
        type: "FinancialTransactionScheduleLineType",
        "xsd:annotation": {
          "xsd:documentation": "This component represents detail of a particular financial transaction instruction in a Financial Transaction Schedule.",
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
	  FinancialTransactionScheduleLine: {
      type: "TypeFinancialTransactionScheduleLineType",
      wsdlDefinition: {
        name: "FinancialTransactionScheduleLine",
        type: "FinancialTransactionScheduleLineType",
        "xsd:annotation": {
          "xsd:documentation": "This component represents detail of a particular financial transaction instruction in a Financial Transaction Schedule.",
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

module.exports = ElementFinancialTransactionScheduleLine;
Modeler.register(ElementFinancialTransactionScheduleLine, "ElementFinancialTransactionScheduleLine");
