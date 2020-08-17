var Modeler = require("../Modeler.js");
var className = 'ElementPaymentRemittanceCommunication';

var ElementPaymentRemittanceCommunication = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  PaymentRemittanceCommunication: {
      type: "TypePaymentRemittanceCommunicationType",
      wsdlDefinition: {
        name: "PaymentRemittanceCommunication",
        type: "PaymentRemittanceCommunicationType",
        "xsd:annotation": {
          "xsd:documentation": "Contact information related to the Remittance"
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
	  PaymentRemittanceCommunication: {
      type: "TypePaymentRemittanceCommunicationType",
      wsdlDefinition: {
        name: "PaymentRemittanceCommunication",
        type: "PaymentRemittanceCommunicationType",
        "xsd:annotation": {
          "xsd:documentation": "Contact information related to the Remittance"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementPaymentRemittanceCommunication;
Modeler.register(ElementPaymentRemittanceCommunication, "ElementPaymentRemittanceCommunication");
