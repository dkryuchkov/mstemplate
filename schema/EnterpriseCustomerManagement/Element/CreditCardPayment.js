var Modeler = require("../Modeler.js");
var className = 'ElementCreditCardPayment';

var ElementCreditCardPayment = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CreditCardPayment: {
      type: "TypeCreditCardPaymentType",
      wsdlDefinition: {
        name: "CreditCardPayment",
        type: "CreditCardPaymentType",
        "xsd:annotation": {
          "xsd:documentation": "Detaills about the request and authorization for a credit card payment"
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
	  CreditCardPayment: {
      type: "TypeCreditCardPaymentType",
      wsdlDefinition: {
        name: "CreditCardPayment",
        type: "CreditCardPaymentType",
        "xsd:annotation": {
          "xsd:documentation": "Detaills about the request and authorization for a credit card payment"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementCreditCardPayment;
Modeler.register(ElementCreditCardPayment, "ElementCreditCardPayment");
