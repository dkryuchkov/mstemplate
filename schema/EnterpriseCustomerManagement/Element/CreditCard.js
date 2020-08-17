var Modeler = require("../Modeler.js");
var className = 'ElementCreditCard';

var ElementCreditCard = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CreditCard: {
      type: "TypeCreditCardType",
      wsdlDefinition: {
        name: "CreditCard",
        type: "CreditCardType",
        "xsd:annotation": {
          "xsd:documentation": "Detailed information about a credit card, typically required for transactions that involve credit card payment"
        },
        ns: "WL5G3N2",
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
	  CreditCard: {
      type: "TypeCreditCardType",
      wsdlDefinition: {
        name: "CreditCard",
        type: "CreditCardType",
        "xsd:annotation": {
          "xsd:documentation": "Detailed information about a credit card, typically required for transactions that involve credit card payment"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementCreditCard;
Modeler.register(ElementCreditCard, "ElementCreditCard");
