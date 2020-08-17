var Modeler = require("../Modeler.js");
var className = 'TypeCustomCustomerPartyInvestmentRestrictionType';

var TypeCustomCustomerPartyInvestmentRestrictionType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomCustomerPartyInvestmentRestrictionType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomCustomerPartyInvestmentRestrictionType",
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
	  CustomCustomerPartyInvestmentRestrictionType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomCustomerPartyInvestmentRestrictionType",
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCustomCustomerPartyInvestmentRestrictionType;
Modeler.register(TypeCustomCustomerPartyInvestmentRestrictionType, "TypeCustomCustomerPartyInvestmentRestrictionType");
