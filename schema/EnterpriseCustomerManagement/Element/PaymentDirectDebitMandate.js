var Modeler = require("../Modeler.js");
var className = 'ElementPaymentDirectDebitMandate';

var ElementPaymentDirectDebitMandate = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  PaymentDirectDebitMandate: {
      type: "TypePaymentDirectDebitMandateType",
      wsdlDefinition: {
        name: "PaymentDirectDebitMandate",
        type: "PaymentDirectDebitMandateType",
        "xsd:annotation": {
          "xsd:documentation": "Mandate for the Direct Debit in case of a Direct debit payment"
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
	  PaymentDirectDebitMandate: {
      type: "TypePaymentDirectDebitMandateType",
      wsdlDefinition: {
        name: "PaymentDirectDebitMandate",
        type: "PaymentDirectDebitMandateType",
        "xsd:annotation": {
          "xsd:documentation": "Mandate for the Direct Debit in case of a Direct debit payment"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementPaymentDirectDebitMandate;
Modeler.register(ElementPaymentDirectDebitMandate, "ElementPaymentDirectDebitMandate");
