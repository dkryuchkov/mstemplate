var Modeler = require("../Modeler.js");
var className = 'TypeCustomerPartyFinancialPortfolioType';

var TypeCustomerPartyFinancialPortfolioType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  Identification: {
      type: "TypeIdentificationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Identification",
        type: "IdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Unique identification of Portfolio"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    PreferredIndicator: {
      type: "TypeIndicatorType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N1:PreferredIndicator",
        type: "WL5G3N2:IndicatorType",
        "xsd:annotation": {
          "xsd:documentation": "Indicate whether this portfolio is the default portfolio from all the portfolios of the customer."
        },
        attribute: false,
        ns: "WL5G3N1"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    FinancialPortfolio: {
      type: "TypeFinancialPortfolioType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:FinancialPortfolio",
        type: "FinancialPortfolioType",
        "xsd:annotation": {
          "xsd:documentation": "Details about the financial portfolio of an organization or person.\nA financial portfolio is an appropriate mix or collection of investments held by institutions or an individual."
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Custom: {
      type: "TypeCustomCustomerPartyFinancialPortfolioType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N1:Custom",
        type: "corecustomerpartycust:CustomCustomerPartyFinancialPortfolioType",
        attribute: false,
        ns: "WL5G3N1"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    actionCode: {
      type: "TypeActionCodeType",
      wsdlDefinition: {
        name: "actionCode",
        type: "WL5G3N2:ActionCodeType",
        use: "optional",
        attribute: true
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
	  Identification: {
      type: "TypeIdentificationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Identification",
        type: "IdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Unique identification of Portfolio"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    PreferredIndicator: {
      type: "TypeIndicatorType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N1:PreferredIndicator",
        type: "WL5G3N2:IndicatorType",
        "xsd:annotation": {
          "xsd:documentation": "Indicate whether this portfolio is the default portfolio from all the portfolios of the customer."
        },
        attribute: false,
        ns: "WL5G3N1"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    FinancialPortfolio: {
      type: "TypeFinancialPortfolioType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:FinancialPortfolio",
        type: "FinancialPortfolioType",
        "xsd:annotation": {
          "xsd:documentation": "Details about the financial portfolio of an organization or person.\nA financial portfolio is an appropriate mix or collection of investments held by institutions or an individual."
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Custom: {
      type: "TypeCustomCustomerPartyFinancialPortfolioType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N1:Custom",
        type: "corecustomerpartycust:CustomCustomerPartyFinancialPortfolioType",
        attribute: false,
        ns: "WL5G3N1"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    actionCode: {
      type: "TypeActionCodeType",
      wsdlDefinition: {
        name: "actionCode",
        type: "WL5G3N2:ActionCodeType",
        use: "optional",
        attribute: true
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCustomerPartyFinancialPortfolioType;
Modeler.register(TypeCustomerPartyFinancialPortfolioType, "TypeCustomerPartyFinancialPortfolioType");
