var Modeler = require("../Modeler.js");
var className = 'ElementInvestmentPortfolioModelIdentification';

var ElementInvestmentPortfolioModelIdentification = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  InvestmentPortfolioModelIdentification: {
      type: "TypeInvestmentPortfolioModelIdentificationType",
      wsdlDefinition: {
        name: "InvestmentPortfolioModelIdentification",
        type: "InvestmentPortfolioModelIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Unique identification of an Investment Portfolio Model",
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
	  InvestmentPortfolioModelIdentification: {
      type: "TypeInvestmentPortfolioModelIdentificationType",
      wsdlDefinition: {
        name: "InvestmentPortfolioModelIdentification",
        type: "InvestmentPortfolioModelIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Unique identification of an Investment Portfolio Model",
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

module.exports = ElementInvestmentPortfolioModelIdentification;
Modeler.register(ElementInvestmentPortfolioModelIdentification, "ElementInvestmentPortfolioModelIdentification");
