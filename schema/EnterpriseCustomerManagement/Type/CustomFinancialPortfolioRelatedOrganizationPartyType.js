var Modeler = require("../Modeler.js");
var className = 'TypeCustomFinancialPortfolioRelatedOrganizationPartyType';

var TypeCustomFinancialPortfolioRelatedOrganizationPartyType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomFinancialPortfolioRelatedOrganizationPartyType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomFinancialPortfolioRelatedOrganizationPartyType",
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
	  CustomFinancialPortfolioRelatedOrganizationPartyType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomFinancialPortfolioRelatedOrganizationPartyType",
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCustomFinancialPortfolioRelatedOrganizationPartyType;
Modeler.register(TypeCustomFinancialPortfolioRelatedOrganizationPartyType, "TypeCustomFinancialPortfolioRelatedOrganizationPartyType");
