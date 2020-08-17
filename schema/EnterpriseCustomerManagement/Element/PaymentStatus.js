var Modeler = require("../Modeler.js");
var className = 'ElementPaymentStatus';

var ElementPaymentStatus = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  PaymentStatus: {
      type: "TypeStatusType",
      wsdlDefinition: {
        name: "PaymentStatus",
        type: "StatusType",
        "xsd:annotation": {
          "xsd:documentation": "The status of a payment (PAID, DISPUTE etc)"
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
	  PaymentStatus: {
      type: "TypeStatusType",
      wsdlDefinition: {
        name: "PaymentStatus",
        type: "StatusType",
        "xsd:annotation": {
          "xsd:documentation": "The status of a payment (PAID, DISPUTE etc)"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementPaymentStatus;
Modeler.register(ElementPaymentStatus, "ElementPaymentStatus");
