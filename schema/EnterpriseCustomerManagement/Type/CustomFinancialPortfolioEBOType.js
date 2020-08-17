var Modeler = require("../Modeler.js");
var className = 'TypeCustomFinancialPortfolioEBOType';

var TypeCustomFinancialPortfolioEBOType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomFinancialPortfolioEBOType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomFinancialPortfolioEBOType",
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
	  CustomFinancialPortfolioEBOType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomFinancialPortfolioEBOType",
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCustomFinancialPortfolioEBOType;
Modeler.register(TypeCustomFinancialPortfolioEBOType, "TypeCustomFinancialPortfolioEBOType");
