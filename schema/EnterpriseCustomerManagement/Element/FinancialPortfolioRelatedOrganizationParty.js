var Modeler = require("../Modeler.js");
var className = 'ElementFinancialPortfolioRelatedOrganizationParty';

var ElementFinancialPortfolioRelatedOrganizationParty = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  FinancialPortfolioRelatedOrganizationParty: {
      type: "TypeFinancialPortfolioRelatedOrganizationPartyType",
      wsdlDefinition: {
        name: "FinancialPortfolioRelatedOrganizationParty",
        type: "FinancialPortfolioRelatedOrganizationPartyType",
        "xsd:annotation": {
          "xsd:documentation": "An orgnaization related to the Financial Portfolio. The relationship is indicated by the Financial Portfolio Related Party Relationship component.",
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
	  FinancialPortfolioRelatedOrganizationParty: {
      type: "TypeFinancialPortfolioRelatedOrganizationPartyType",
      wsdlDefinition: {
        name: "FinancialPortfolioRelatedOrganizationParty",
        type: "FinancialPortfolioRelatedOrganizationPartyType",
        "xsd:annotation": {
          "xsd:documentation": "An orgnaization related to the Financial Portfolio. The relationship is indicated by the Financial Portfolio Related Party Relationship component.",
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

module.exports = ElementFinancialPortfolioRelatedOrganizationParty;
Modeler.register(ElementFinancialPortfolioRelatedOrganizationParty, "ElementFinancialPortfolioRelatedOrganizationParty");
