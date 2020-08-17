var Modeler = require("../Modeler.js");
var className = 'TypeCustomCustomerPartyFinancialServiceProfileType';

var TypeCustomCustomerPartyFinancialServiceProfileType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomCustomerPartyFinancialServiceProfileType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomCustomerPartyFinancialServiceProfileType",
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
	  CustomCustomerPartyFinancialServiceProfileType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomCustomerPartyFinancialServiceProfileType",
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCustomCustomerPartyFinancialServiceProfileType;
Modeler.register(TypeCustomCustomerPartyFinancialServiceProfileType, "TypeCustomCustomerPartyFinancialServiceProfileType");
