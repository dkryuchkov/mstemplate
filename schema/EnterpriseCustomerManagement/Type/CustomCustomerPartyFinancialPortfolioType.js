var Modeler = require("../Modeler.js");
var className = 'TypeCustomCustomerPartyFinancialPortfolioType';

var TypeCustomCustomerPartyFinancialPortfolioType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomCustomerPartyFinancialPortfolioType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomCustomerPartyFinancialPortfolioType",
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
	  CustomCustomerPartyFinancialPortfolioType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomCustomerPartyFinancialPortfolioType",
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCustomCustomerPartyFinancialPortfolioType;
Modeler.register(TypeCustomCustomerPartyFinancialPortfolioType, "TypeCustomCustomerPartyFinancialPortfolioType");
