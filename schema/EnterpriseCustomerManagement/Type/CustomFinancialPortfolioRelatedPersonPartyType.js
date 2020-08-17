var Modeler = require("../Modeler.js");
var className = 'TypeCustomFinancialPortfolioRelatedPersonPartyType';

var TypeCustomFinancialPortfolioRelatedPersonPartyType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomFinancialPortfolioRelatedPersonPartyType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomFinancialPortfolioRelatedPersonPartyType",
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
	  CustomFinancialPortfolioRelatedPersonPartyType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomFinancialPortfolioRelatedPersonPartyType",
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCustomFinancialPortfolioRelatedPersonPartyType;
Modeler.register(TypeCustomFinancialPortfolioRelatedPersonPartyType, "TypeCustomFinancialPortfolioRelatedPersonPartyType");
