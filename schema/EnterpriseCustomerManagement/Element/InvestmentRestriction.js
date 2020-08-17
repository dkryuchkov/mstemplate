var Modeler = require("../Modeler.js");
var className = 'ElementInvestmentRestriction';

var ElementInvestmentRestriction = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  InvestmentRestriction: {
      type: "TypeInvestmentRestrictionType",
      wsdlDefinition: {
        name: "InvestmentRestriction",
        type: "InvestmentRestrictionType",
        "xsd:annotation": {
          "xsd:documentation": "Investment Restriction captures rules about investment. This can be used, for example, to capture a customer's investment preference.  The restriction can be either by industry, instrument, buy, or sell etc..",
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
	  InvestmentRestriction: {
      type: "TypeInvestmentRestrictionType",
      wsdlDefinition: {
        name: "InvestmentRestriction",
        type: "InvestmentRestrictionType",
        "xsd:annotation": {
          "xsd:documentation": "Investment Restriction captures rules about investment. This can be used, for example, to capture a customer's investment preference.  The restriction can be either by industry, instrument, buy, or sell etc..",
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

module.exports = ElementInvestmentRestriction;
Modeler.register(ElementInvestmentRestriction, "ElementInvestmentRestriction");
