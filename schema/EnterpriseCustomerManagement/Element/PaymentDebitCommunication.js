var Modeler = require("../Modeler.js");
var className = 'ElementPaymentDebitCommunication';

var ElementPaymentDebitCommunication = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  PaymentDebitCommunication: {
      type: "TypePaymentDebitCommunicationType",
      wsdlDefinition: {
        name: "PaymentDebitCommunication",
        type: "PaymentDebitCommunicationType",
        "xsd:annotation": {
          "xsd:documentation": "Contact information related to the Debit Notification"
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
	  PaymentDebitCommunication: {
      type: "TypePaymentDebitCommunicationType",
      wsdlDefinition: {
        name: "PaymentDebitCommunication",
        type: "PaymentDebitCommunicationType",
        "xsd:annotation": {
          "xsd:documentation": "Contact information related to the Debit Notification"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementPaymentDebitCommunication;
Modeler.register(ElementPaymentDebitCommunication, "ElementPaymentDebitCommunication");
