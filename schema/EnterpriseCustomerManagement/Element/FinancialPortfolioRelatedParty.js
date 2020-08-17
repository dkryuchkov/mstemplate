var Modeler = require("../Modeler.js");
var className = 'ElementFinancialPortfolioRelatedParty';

var ElementFinancialPortfolioRelatedParty = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  FinancialPortfolioRelatedParty: {
      type: "TypeFinancialPortfolioRelatedPartyType",
      wsdlDefinition: {
        name: "FinancialPortfolioRelatedParty",
        type: "FinancialPortfolioRelatedPartyType",
        "xsd:annotation": {
          "xsd:documentation": "This component provides information about the party related to the Financial Portfolio. Example  Nominee etc",
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
	  FinancialPortfolioRelatedParty: {
      type: "TypeFinancialPortfolioRelatedPartyType",
      wsdlDefinition: {
        name: "FinancialPortfolioRelatedParty",
        type: "FinancialPortfolioRelatedPartyType",
        "xsd:annotation": {
          "xsd:documentation": "This component provides information about the party related to the Financial Portfolio. Example  Nominee etc",
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

module.exports = ElementFinancialPortfolioRelatedParty;
Modeler.register(ElementFinancialPortfolioRelatedParty, "ElementFinancialPortfolioRelatedParty");
