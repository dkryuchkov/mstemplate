var Modeler = require("../Modeler.js");
var className = 'ElementFinancialGoal';

var ElementFinancialGoal = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  FinancialGoal: {
      type: "TypeFinancialGoalType",
      wsdlDefinition: {
        name: "FinancialGoal",
        type: "FinancialGoalType",
        "xsd:annotation": {
          "xsd:documentation": "A financial goal details a financial objective one would like to fulfil. For Example: Car, Child's education, Child's Marriage, Retirement, Holiday etc.",
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
	  FinancialGoal: {
      type: "TypeFinancialGoalType",
      wsdlDefinition: {
        name: "FinancialGoal",
        type: "FinancialGoalType",
        "xsd:annotation": {
          "xsd:documentation": "A financial goal details a financial objective one would like to fulfil. For Example: Car, Child's education, Child's Marriage, Retirement, Holiday etc.",
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

module.exports = ElementFinancialGoal;
Modeler.register(ElementFinancialGoal, "ElementFinancialGoal");
