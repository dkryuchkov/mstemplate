var Modeler = require("../Modeler.js");
var className = 'TypeInvestmentPortfolioModelReferenceType';

var TypeInvestmentPortfolioModelReferenceType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  InvestmentPortfolioModelIdentification: {
      type: "TypeInvestmentPortfolioModelIdentificationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:InvestmentPortfolioModelIdentification",
        type: "InvestmentPortfolioModelIdentificationType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Custom: {
      type: "TypeCustomInvestmentPortfolioModelReferenceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Custom",
        type: "corecomcust:CustomInvestmentPortfolioModelReferenceType",
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
	  InvestmentPortfolioModelIdentification: {
      type: "TypeInvestmentPortfolioModelIdentificationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:InvestmentPortfolioModelIdentification",
        type: "InvestmentPortfolioModelIdentificationType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Custom: {
      type: "TypeCustomInvestmentPortfolioModelReferenceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Custom",
        type: "corecomcust:CustomInvestmentPortfolioModelReferenceType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeInvestmentPortfolioModelReferenceType;
Modeler.register(TypeInvestmentPortfolioModelReferenceType, "TypeInvestmentPortfolioModelReferenceType");
