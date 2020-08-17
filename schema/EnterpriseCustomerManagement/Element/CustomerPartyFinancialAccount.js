var Modeler = require("../Modeler.js");
var className = 'ElementCustomerPartyFinancialAccount';

var ElementCustomerPartyFinancialAccount = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomerPartyFinancialAccount: {
      type: "TypeCustomerPartyFinancialAccountType",
      wsdlDefinition: {
        name: "CustomerPartyFinancialAccount",
        type: "CustomerPartyFinancialAccountType",
        "xsd:annotation": {
          "xsd:documentation": "Financial Account owned by this customer"
        },
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
	  CustomerPartyFinancialAccount: {
      type: "TypeCustomerPartyFinancialAccountType",
      wsdlDefinition: {
        name: "CustomerPartyFinancialAccount",
        type: "CustomerPartyFinancialAccountType",
        "xsd:annotation": {
          "xsd:documentation": "Financial Account owned by this customer"
        },
        ns: "WL5G3N1",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementCustomerPartyFinancialAccount;
Modeler.register(ElementCustomerPartyFinancialAccount, "ElementCustomerPartyFinancialAccount");
