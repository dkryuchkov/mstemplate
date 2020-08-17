var Modeler = require("../Modeler.js");
var className = 'TypeCustomInvestmentPortfolioModelReferenceType';

var TypeCustomInvestmentPortfolioModelReferenceType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomInvestmentPortfolioModelReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomInvestmentPortfolioModelReferenceType",
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
	  CustomInvestmentPortfolioModelReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomInvestmentPortfolioModelReferenceType",
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCustomInvestmentPortfolioModelReferenceType;
Modeler.register(TypeCustomInvestmentPortfolioModelReferenceType, "TypeCustomInvestmentPortfolioModelReferenceType");
