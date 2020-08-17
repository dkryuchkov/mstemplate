var Modeler = require("../Modeler.js");
var className = 'ElementCustomerPartyAccountContactCreditCard';

var ElementCustomerPartyAccountContactCreditCard = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomerPartyAccountContactCreditCard: {
      type: "TypeCustomerPartyAccountContactCreditCardType",
      wsdlDefinition: {
        name: "CustomerPartyAccountContactCreditCard",
        type: "CustomerPartyAccountContactCreditCardType",
        "xsd:annotation": {
          "xsd:documentation": "Credit cards of the Contact"
        },
        ns: "WL5G3N1",
        attribute: false
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
	  CustomerPartyAccountContactCreditCard: {
      type: "TypeCustomerPartyAccountContactCreditCardType",
      wsdlDefinition: {
        name: "CustomerPartyAccountContactCreditCard",
        type: "CustomerPartyAccountContactCreditCardType",
        "xsd:annotation": {
          "xsd:documentation": "Credit cards of the Contact"
        },
        ns: "WL5G3N1",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementCustomerPartyAccountContactCreditCard;
Modeler.register(ElementCustomerPartyAccountContactCreditCard, "ElementCustomerPartyAccountContactCreditCard");
