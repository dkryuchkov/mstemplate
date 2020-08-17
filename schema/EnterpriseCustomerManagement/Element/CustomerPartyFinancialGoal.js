var Modeler = require("../Modeler.js");
var className = 'ElementCustomerPartyFinancialGoal';

var ElementCustomerPartyFinancialGoal = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomerPartyFinancialGoal: {
      type: "TypeCustomerPartyFinancialGoalType",
      wsdlDefinition: {
        name: "CustomerPartyFinancialGoal",
        type: "CustomerPartyFinancialGoalType",
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
	  CustomerPartyFinancialGoal: {
      type: "TypeCustomerPartyFinancialGoalType",
      wsdlDefinition: {
        name: "CustomerPartyFinancialGoal",
        type: "CustomerPartyFinancialGoalType",
        ns: "WL5G3N1",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementCustomerPartyFinancialGoal;
Modeler.register(ElementCustomerPartyFinancialGoal, "ElementCustomerPartyFinancialGoal");
