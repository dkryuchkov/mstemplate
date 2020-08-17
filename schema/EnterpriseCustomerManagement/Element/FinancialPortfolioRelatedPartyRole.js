var Modeler = require("../Modeler.js");
var className = 'ElementFinancialPortfolioRelatedPartyRole';

var ElementFinancialPortfolioRelatedPartyRole = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  FinancialPortfolioRelatedPartyRole: {
      type: "TypeFinancialPortfolioRelatedPartyRoleType",
      wsdlDefinition: {
        name: "FinancialPortfolioRelatedPartyRole",
        type: "FinancialPortfolioRelatedPartyRoleType",
        "xsd:annotation": {
          "xsd:documentation": "This entity captures the role details the related party has with the Financial Portfolio, e.g., Nominee, Introducer etc",
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
	  FinancialPortfolioRelatedPartyRole: {
      type: "TypeFinancialPortfolioRelatedPartyRoleType",
      wsdlDefinition: {
        name: "FinancialPortfolioRelatedPartyRole",
        type: "FinancialPortfolioRelatedPartyRoleType",
        "xsd:annotation": {
          "xsd:documentation": "This entity captures the role details the related party has with the Financial Portfolio, e.g., Nominee, Introducer etc",
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

module.exports = ElementFinancialPortfolioRelatedPartyRole;
Modeler.register(ElementFinancialPortfolioRelatedPartyRole, "ElementFinancialPortfolioRelatedPartyRole");
