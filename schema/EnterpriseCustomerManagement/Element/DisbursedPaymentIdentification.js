var Modeler = require("../Modeler.js");
var className = 'ElementDisbursedPaymentIdentification';

var ElementDisbursedPaymentIdentification = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  DisbursedPaymentIdentification: {
      type: "TypeDisbursedPaymentIdentificationType",
      wsdlDefinition: {
        name: "DisbursedPaymentIdentification",
        type: "DisbursedPaymentIdentificationType",
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
	  DisbursedPaymentIdentification: {
      type: "TypeDisbursedPaymentIdentificationType",
      wsdlDefinition: {
        name: "DisbursedPaymentIdentification",
        type: "DisbursedPaymentIdentificationType",
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

module.exports = ElementDisbursedPaymentIdentification;
Modeler.register(ElementDisbursedPaymentIdentification, "ElementDisbursedPaymentIdentification");
