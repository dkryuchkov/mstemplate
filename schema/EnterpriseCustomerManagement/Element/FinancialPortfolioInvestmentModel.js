var Modeler = require("../Modeler.js");
var className = 'ElementFinancialPortfolioInvestmentModel';

var ElementFinancialPortfolioInvestmentModel = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  FinancialPortfolioInvestmentModel: {
      type: "TypeFinancialPortfolioInvestmentModelType",
      wsdlDefinition: {
        name: "FinancialPortfolioInvestmentModel",
        type: "FinancialPortfolioInvestmentModelType",
        "xsd:annotation": {
          "xsd:documentation": "Refers to an Investment Portfolio Model associated with a financial portfolio.",
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
	  FinancialPortfolioInvestmentModel: {
      type: "TypeFinancialPortfolioInvestmentModelType",
      wsdlDefinition: {
        name: "FinancialPortfolioInvestmentModel",
        type: "FinancialPortfolioInvestmentModelType",
        "xsd:annotation": {
          "xsd:documentation": "Refers to an Investment Portfolio Model associated with a financial portfolio.",
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

module.exports = ElementFinancialPortfolioInvestmentModel;
Modeler.register(ElementFinancialPortfolioInvestmentModel, "ElementFinancialPortfolioInvestmentModel");
