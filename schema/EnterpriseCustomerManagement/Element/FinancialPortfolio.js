var Modeler = require("../Modeler.js");
var className = 'ElementFinancialPortfolio';

var ElementFinancialPortfolio = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  FinancialPortfolio: {
      type: "TypeFinancialPortfolioType",
      wsdlDefinition: {
        name: "FinancialPortfolio",
        type: "FinancialPortfolioType",
        "xsd:annotation": {
          "xsd:documentation": "Details about the financial portfolio of an organization or person. A financial portfolio is a mix or collection of investments held by institutions or an individual.",
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
	  FinancialPortfolio: {
      type: "TypeFinancialPortfolioType",
      wsdlDefinition: {
        name: "FinancialPortfolio",
        type: "FinancialPortfolioType",
        "xsd:annotation": {
          "xsd:documentation": "Details about the financial portfolio of an organization or person. A financial portfolio is a mix or collection of investments held by institutions or an individual.",
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

module.exports = ElementFinancialPortfolio;
Modeler.register(ElementFinancialPortfolio, "ElementFinancialPortfolio");
