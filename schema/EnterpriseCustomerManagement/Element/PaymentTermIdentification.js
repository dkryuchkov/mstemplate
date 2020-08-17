var Modeler = require("../Modeler.js");
var className = 'ElementPaymentTermIdentification';

var ElementPaymentTermIdentification = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  PaymentTermIdentification: {
      type: "TypePaymentTermIdentificationType",
      wsdlDefinition: {
        name: "PaymentTermIdentification",
        type: "PaymentTermIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Unique identification of a Payment Term"
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
	  PaymentTermIdentification: {
      type: "TypePaymentTermIdentificationType",
      wsdlDefinition: {
        name: "PaymentTermIdentification",
        type: "PaymentTermIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Unique identification of a Payment Term"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementPaymentTermIdentification;
Modeler.register(ElementPaymentTermIdentification, "ElementPaymentTermIdentification");
