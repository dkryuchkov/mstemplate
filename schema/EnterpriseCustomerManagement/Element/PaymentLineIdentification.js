var Modeler = require("../Modeler.js");
var className = 'ElementPaymentLineIdentification';

var ElementPaymentLineIdentification = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  PaymentLineIdentification: {
      type: "TypePaymentLineIdentificationType",
      wsdlDefinition: {
        name: "PaymentLineIdentification",
        type: "PaymentLineIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Unique identification of a payment line"
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
	  PaymentLineIdentification: {
      type: "TypePaymentLineIdentificationType",
      wsdlDefinition: {
        name: "PaymentLineIdentification",
        type: "PaymentLineIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Unique identification of a payment line"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementPaymentLineIdentification;
Modeler.register(ElementPaymentLineIdentification, "ElementPaymentLineIdentification");
