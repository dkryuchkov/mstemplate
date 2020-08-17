var Modeler = require("../Modeler.js");
var className = 'ElementCustomerPartyFinancialPortfolio';

var ElementCustomerPartyFinancialPortfolio = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomerPartyFinancialPortfolio: {
      type: "TypeCustomerPartyFinancialPortfolioType",
      wsdlDefinition: {
        name: "CustomerPartyFinancialPortfolio",
        type: "CustomerPartyFinancialPortfolioType",
        "xsd:annotation": {
          "xsd:documentation": "A Financial Portfolio of a customer.",
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
	  CustomerPartyFinancialPortfolio: {
      type: "TypeCustomerPartyFinancialPortfolioType",
      wsdlDefinition: {
        name: "CustomerPartyFinancialPortfolio",
        type: "CustomerPartyFinancialPortfolioType",
        "xsd:annotation": {
          "xsd:documentation": "A Financial Portfolio of a customer.",
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

module.exports = ElementCustomerPartyFinancialPortfolio;
Modeler.register(ElementCustomerPartyFinancialPortfolio, "ElementCustomerPartyFinancialPortfolio");
