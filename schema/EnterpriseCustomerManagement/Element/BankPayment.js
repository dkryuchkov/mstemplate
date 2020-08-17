var Modeler = require("../Modeler.js");
var className = 'ElementBankPayment';

var ElementBankPayment = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  BankPayment: {
      type: "TypeBankPaymentType",
      wsdlDefinition: {
        name: "BankPayment",
        type: "BankPaymentType",
        "xsd:annotation": {
          "xsd:documentation": "Bank Account transaction details for the cases where payment method is : Direct Debit, Check or EFT"
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
	  BankPayment: {
      type: "TypeBankPaymentType",
      wsdlDefinition: {
        name: "BankPayment",
        type: "BankPaymentType",
        "xsd:annotation": {
          "xsd:documentation": "Bank Account transaction details for the cases where payment method is : Direct Debit, Check or EFT"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementBankPayment;
Modeler.register(ElementBankPayment, "ElementBankPayment");
