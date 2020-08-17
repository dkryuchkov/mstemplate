var Modeler = require("../Modeler.js");
var className = 'ElementFinancialTransactionSchedule';

var ElementFinancialTransactionSchedule = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  FinancialTransactionSchedule: {
      type: "TypeFinancialTransactionScheduleType",
      wsdlDefinition: {
        name: "FinancialTransactionSchedule",
        type: "FinancialTransactionScheduleType",
        "xsd:annotation": {
          "xsd:documentation": "The component representing related recurring financial transaction instructions of a Financial Account. Instructions are typically related becausee they share the same scheduling parameters, e.g., the frequency.",
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
	  FinancialTransactionSchedule: {
      type: "TypeFinancialTransactionScheduleType",
      wsdlDefinition: {
        name: "FinancialTransactionSchedule",
        type: "FinancialTransactionScheduleType",
        "xsd:annotation": {
          "xsd:documentation": "The component representing related recurring financial transaction instructions of a Financial Account. Instructions are typically related becausee they share the same scheduling parameters, e.g., the frequency.",
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

module.exports = ElementFinancialTransactionSchedule;
Modeler.register(ElementFinancialTransactionSchedule, "ElementFinancialTransactionSchedule");
