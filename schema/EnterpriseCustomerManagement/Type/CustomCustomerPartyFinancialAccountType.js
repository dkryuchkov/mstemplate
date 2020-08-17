var Modeler = require("../Modeler.js");
var className = 'TypeCustomCustomerPartyFinancialAccountType';

var TypeCustomCustomerPartyFinancialAccountType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomCustomerPartyFinancialAccountType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomCustomerPartyFinancialAccountType",
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
	  CustomCustomerPartyFinancialAccountType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomCustomerPartyFinancialAccountType",
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCustomCustomerPartyFinancialAccountType;
Modeler.register(TypeCustomCustomerPartyFinancialAccountType, "TypeCustomCustomerPartyFinancialAccountType");
