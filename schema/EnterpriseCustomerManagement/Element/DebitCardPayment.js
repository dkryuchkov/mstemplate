var Modeler = require("../Modeler.js");
var className = 'ElementDebitCardPayment';

var ElementDebitCardPayment = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  DebitCardPayment: {
      type: "TypeDebitCardPaymentType",
      wsdlDefinition: {
        name: "DebitCardPayment",
        type: "DebitCardPaymentType",
        "xsd:annotation": {
          "xsd:documentation": "Detaills about the request and authorization for a debit card payment"
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
	  DebitCardPayment: {
      type: "TypeDebitCardPaymentType",
      wsdlDefinition: {
        name: "DebitCardPayment",
        type: "DebitCardPaymentType",
        "xsd:annotation": {
          "xsd:documentation": "Detaills about the request and authorization for a debit card payment"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementDebitCardPayment;
Modeler.register(ElementDebitCardPayment, "ElementDebitCardPayment");
