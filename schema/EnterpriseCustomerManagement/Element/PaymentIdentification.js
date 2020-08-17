var Modeler = require("../Modeler.js");
var className = 'ElementPaymentIdentification';

var ElementPaymentIdentification = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  PaymentIdentification: {
      type: "TypePaymentIdentificationType",
      wsdlDefinition: {
        name: "PaymentIdentification",
        type: "PaymentIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Unique identification of a payment record"
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
	  PaymentIdentification: {
      type: "TypePaymentIdentificationType",
      wsdlDefinition: {
        name: "PaymentIdentification",
        type: "PaymentIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Unique identification of a payment record"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementPaymentIdentification;
Modeler.register(ElementPaymentIdentification, "ElementPaymentIdentification");
