var Modeler = require("../Modeler.js");
var className = 'TypeCustomFinancialPortfolioRelatedPartyRoleType';

var TypeCustomFinancialPortfolioRelatedPartyRoleType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomFinancialPortfolioRelatedPartyRoleType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomFinancialPortfolioRelatedPartyRoleType",
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
	  CustomFinancialPortfolioRelatedPartyRoleType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomFinancialPortfolioRelatedPartyRoleType",
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCustomFinancialPortfolioRelatedPartyRoleType;
Modeler.register(TypeCustomFinancialPortfolioRelatedPartyRoleType, "TypeCustomFinancialPortfolioRelatedPartyRoleType");
