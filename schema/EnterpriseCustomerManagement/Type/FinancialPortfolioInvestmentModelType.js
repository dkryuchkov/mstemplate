var Modeler = require("../Modeler.js");
var className = 'TypeFinancialPortfolioInvestmentModelType';

var TypeFinancialPortfolioInvestmentModelType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  EffectiveTimePeriod: {
      type: "TypeTimePeriodType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:EffectiveTimePeriod",
        type: "TimePeriodType",
        "xsd:annotation": {
          "xsd:documentation": "Effective period of the referred to Investment Portfolio Model. The effective time period may convey the intention of the portfolio model designer to have it re-evaluated or adjusted after the effectivity ends."
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    InvestmentPortfolioModelReference: {
      type: "TypeInvestmentPortfolioModelReferenceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:InvestmentPortfolioModelReference",
        type: "InvestmentPortfolioModelReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Portfolio Model associated to the portoflio. A model is a logical grouping of investments or specific investment asset types (e.g., specific sectors of stocks, particular types of bonds - long, short, government, coporate bonds) based on the customer's risk appetitie, desired segment, and investment goal."
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Custom: {
      type: "TypeCustomFinancialPortfolioInvestmentModelType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Custom",
        type: "corecomcust:CustomFinancialPortfolioInvestmentModelType",
        attribute: false,
        ns: "WL5G3N2"
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
	  EffectiveTimePeriod: {
      type: "TypeTimePeriodType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:EffectiveTimePeriod",
        type: "TimePeriodType",
        "xsd:annotation": {
          "xsd:documentation": "Effective period of the referred to Investment Portfolio Model. The effective time period may convey the intention of the portfolio model designer to have it re-evaluated or adjusted after the effectivity ends."
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    InvestmentPortfolioModelReference: {
      type: "TypeInvestmentPortfolioModelReferenceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:InvestmentPortfolioModelReference",
        type: "InvestmentPortfolioModelReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Portfolio Model associated to the portoflio. A model is a logical grouping of investments or specific investment asset types (e.g., specific sectors of stocks, particular types of bonds - long, short, government, coporate bonds) based on the customer's risk appetitie, desired segment, and investment goal."
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Custom: {
      type: "TypeCustomFinancialPortfolioInvestmentModelType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Custom",
        type: "corecomcust:CustomFinancialPortfolioInvestmentModelType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeFinancialPortfolioInvestmentModelType;
Modeler.register(TypeFinancialPortfolioInvestmentModelType, "TypeFinancialPortfolioInvestmentModelType");
