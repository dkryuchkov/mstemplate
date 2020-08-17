var Modeler = require("../Modeler.js");
var className = 'ElementReceivedPaymentReference';

var ElementReceivedPaymentReference = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  ReceivedPaymentReference: {
      type: "TypePaymentReferenceType",
      wsdlDefinition: {
        name: "ReceivedPaymentReference",
        type: "PaymentReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Reference to a Received Payment. A Received Payment is a record of an inbound payment that has already been received and cleared from the receivables listing"
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
	  ReceivedPaymentReference: {
      type: "TypePaymentReferenceType",
      wsdlDefinition: {
        name: "ReceivedPaymentReference",
        type: "PaymentReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Reference to a Received Payment. A Received Payment is a record of an inbound payment that has already been received and cleared from the receivables listing"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementReceivedPaymentReference;
Modeler.register(ElementReceivedPaymentReference, "ElementReceivedPaymentReference");
