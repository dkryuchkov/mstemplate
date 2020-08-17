var Modeler = require("../Modeler.js");
var className = 'TypeCustomCustomerPartyFinancialGoalType';

var TypeCustomCustomerPartyFinancialGoalType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomCustomerPartyFinancialGoalType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomCustomerPartyFinancialGoalType",
        attribute: false,
        type: "xsd:string"
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
	  CustomCustomerPartyFinancialGoalType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomCustomerPartyFinancialGoalType",
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCustomCustomerPartyFinancialGoalType;
Modeler.register(TypeCustomCustomerPartyFinancialGoalType, "TypeCustomCustomerPartyFinancialGoalType");
