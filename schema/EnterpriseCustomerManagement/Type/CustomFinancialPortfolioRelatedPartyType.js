var Modeler = require("../Modeler.js");
var className = 'TypeCustomFinancialPortfolioRelatedPartyType';

var TypeCustomFinancialPortfolioRelatedPartyType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomFinancialPortfolioRelatedPartyType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomFinancialPortfolioRelatedPartyType",
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
	  CustomFinancialPortfolioRelatedPartyType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomFinancialPortfolioRelatedPartyType",
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCustomFinancialPortfolioRelatedPartyType;
Modeler.register(TypeCustomFinancialPortfolioRelatedPartyType, "TypeCustomFinancialPortfolioRelatedPartyType");
