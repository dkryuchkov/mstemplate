var Modeler = require("../Modeler.js");
var className = 'TypeCustomCustomerPartyAccountContactCreditCardType';

var TypeCustomCustomerPartyAccountContactCreditCardType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomCustomerPartyAccountContactCreditCardType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomCustomerPartyAccountContactCreditCardType",
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
	  CustomCustomerPartyAccountContactCreditCardType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomCustomerPartyAccountContactCreditCardType",
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCustomCustomerPartyAccountContactCreditCardType;
Modeler.register(TypeCustomCustomerPartyAccountContactCreditCardType, "TypeCustomCustomerPartyAccountContactCreditCardType");
