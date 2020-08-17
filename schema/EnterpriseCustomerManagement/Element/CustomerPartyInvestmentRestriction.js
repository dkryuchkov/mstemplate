var Modeler = require("../Modeler.js");
var className = 'ElementCustomerPartyInvestmentRestriction';

var ElementCustomerPartyInvestmentRestriction = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomerPartyInvestmentRestriction: {
      type: "TypeCustomerPartyInvestmentRestrictionType",
      wsdlDefinition: {
        name: "CustomerPartyInvestmentRestriction",
        type: "CustomerPartyInvestmentRestrictionType",
        "xsd:annotation": {
          "xsd:documentation": "Investment Restrictions for the Customer Party",
          "xsd:appinfo": {
            "ebocontext:BusinessContext": "BankingAndWealthManagement"
          }
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
	  CustomerPartyInvestmentRestriction: {
      type: "TypeCustomerPartyInvestmentRestrictionType",
      wsdlDefinition: {
        name: "CustomerPartyInvestmentRestriction",
        type: "CustomerPartyInvestmentRestrictionType",
        "xsd:annotation": {
          "xsd:documentation": "Investment Restrictions for the Customer Party",
          "xsd:appinfo": {
            "ebocontext:BusinessContext": "BankingAndWealthManagement"
          }
        },
        ns: "WL5G3N1",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementCustomerPartyInvestmentRestriction;
Modeler.register(ElementCustomerPartyInvestmentRestriction, "ElementCustomerPartyInvestmentRestriction");
