var Modeler = require("../Modeler.js");
var className = 'ElementPaymentLineReference';

var ElementPaymentLineReference = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  PaymentLineReference: {
      type: "TypePaymentLineReferenceType",
      wsdlDefinition: {
        name: "PaymentLineReference",
        type: "PaymentLineReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Reference to a Payment Line. A Payment line is an invoice or other document that gets cleared when the payment is processed. There may be multiple payment lines associated with a single payment"
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
	  PaymentLineReference: {
      type: "TypePaymentLineReferenceType",
      wsdlDefinition: {
        name: "PaymentLineReference",
        type: "PaymentLineReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Reference to a Payment Line. A Payment line is an invoice or other document that gets cleared when the payment is processed. There may be multiple payment lines associated with a single payment"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementPaymentLineReference;
Modeler.register(ElementPaymentLineReference, "ElementPaymentLineReference");
