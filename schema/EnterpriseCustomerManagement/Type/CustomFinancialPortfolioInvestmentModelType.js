var Modeler = require("../Modeler.js");
var className = 'TypeCustomFinancialPortfolioInvestmentModelType';

var TypeCustomFinancialPortfolioInvestmentModelType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomFinancialPortfolioInvestmentModelType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomFinancialPortfolioInvestmentModelType",
        attribute: false,
        type: "xsd:string"
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
	  CustomFinancialPortfolioInvestmentModelType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomFinancialPortfolioInvestmentModelType",
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCustomFinancialPortfolioInvestmentModelType;
Modeler.register(TypeCustomFinancialPortfolioInvestmentModelType, "TypeCustomFinancialPortfolioInvestmentModelType");
