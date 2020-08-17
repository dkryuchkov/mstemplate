var Modeler = require("../Modeler.js");
var className = 'ElementFinancialPortfolioRelatedPersonParty';

var ElementFinancialPortfolioRelatedPersonParty = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  FinancialPortfolioRelatedPersonParty: {
      type: "TypeFinancialPortfolioRelatedPersonPartyType",
      wsdlDefinition: {
        name: "FinancialPortfolioRelatedPersonParty",
        type: "FinancialPortfolioRelatedPersonPartyType",
        "xsd:annotation": {
          "xsd:documentation": "An individual related to the Financial Portfolio.",
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
	  FinancialPortfolioRelatedPersonParty: {
      type: "TypeFinancialPortfolioRelatedPersonPartyType",
      wsdlDefinition: {
        name: "FinancialPortfolioRelatedPersonParty",
        type: "FinancialPortfolioRelatedPersonPartyType",
        "xsd:annotation": {
          "xsd:documentation": "An individual related to the Financial Portfolio.",
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

module.exports = ElementFinancialPortfolioRelatedPersonParty;
Modeler.register(ElementFinancialPortfolioRelatedPersonParty, "ElementFinancialPortfolioRelatedPersonParty");
