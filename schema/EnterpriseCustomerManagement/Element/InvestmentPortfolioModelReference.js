var Modeler = require("../Modeler.js");
var className = 'ElementInvestmentPortfolioModelReference';

var ElementInvestmentPortfolioModelReference = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  InvestmentPortfolioModelReference: {
      type: "TypeInvestmentPortfolioModelReferenceType",
      wsdlDefinition: {
        name: "InvestmentPortfolioModelReference",
        type: "InvestmentPortfolioModelReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Reference to a Investment Portfolio Model object. It is a logical group of investments based on the risk appetitie and segment",
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
	  InvestmentPortfolioModelReference: {
      type: "TypeInvestmentPortfolioModelReferenceType",
      wsdlDefinition: {
        name: "InvestmentPortfolioModelReference",
        type: "InvestmentPortfolioModelReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Reference to a Investment Portfolio Model object. It is a logical group of investments based on the risk appetitie and segment",
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

module.exports = ElementInvestmentPortfolioModelReference;
Modeler.register(ElementInvestmentPortfolioModelReference, "ElementInvestmentPortfolioModelReference");
