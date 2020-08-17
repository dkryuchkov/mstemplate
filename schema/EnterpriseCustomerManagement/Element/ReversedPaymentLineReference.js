var Modeler = require("../Modeler.js");
var className = 'ElementReversedPaymentLineReference';

var ElementReversedPaymentLineReference = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  ReversedPaymentLineReference: {
      type: "TypePaymentLineReferenceType",
      wsdlDefinition: {
        name: "ReversedPaymentLineReference",
        type: "PaymentLineReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Reference to a reversed payment line. A reversed payment line is a reference on one payment to an invoice on another payment line. Presence of a reversed payment line implies a reversal of the payment on the referenced line"
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
	  ReversedPaymentLineReference: {
      type: "TypePaymentLineReferenceType",
      wsdlDefinition: {
        name: "ReversedPaymentLineReference",
        type: "PaymentLineReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Reference to a reversed payment line. A reversed payment line is a reference on one payment to an invoice on another payment line. Presence of a reversed payment line implies a reversal of the payment on the referenced line"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementReversedPaymentLineReference;
Modeler.register(ElementReversedPaymentLineReference, "ElementReversedPaymentLineReference");
