var Modeler = require("../Modeler.js");
var className = 'ElementPaymentProfileIdentification';

var ElementPaymentProfileIdentification = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  PaymentProfileIdentification: {
      type: "TypePaymentProfileIdentificationType",
      wsdlDefinition: {
        name: "PaymentProfileIdentification",
        type: "PaymentProfileIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Unique Identification of a Payment Profile"
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
	  PaymentProfileIdentification: {
      type: "TypePaymentProfileIdentificationType",
      wsdlDefinition: {
        name: "PaymentProfileIdentification",
        type: "PaymentProfileIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Unique Identification of a Payment Profile"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementPaymentProfileIdentification;
Modeler.register(ElementPaymentProfileIdentification, "ElementPaymentProfileIdentification");
