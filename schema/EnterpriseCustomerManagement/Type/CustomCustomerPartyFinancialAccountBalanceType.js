var Modeler = require("../Modeler.js");
var className = 'TypeCustomCustomerPartyFinancialAccountBalanceType';

var TypeCustomCustomerPartyFinancialAccountBalanceType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomCustomerPartyFinancialAccountBalanceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomCustomerPartyFinancialAccountBalanceType",
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
	  CustomCustomerPartyFinancialAccountBalanceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomCustomerPartyFinancialAccountBalanceType",
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCustomCustomerPartyFinancialAccountBalanceType;
Modeler.register(TypeCustomCustomerPartyFinancialAccountBalanceType, "TypeCustomCustomerPartyFinancialAccountBalanceType");
