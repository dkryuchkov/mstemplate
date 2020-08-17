var Modeler = require("../Modeler.js");
var className = 'ElementPaymentReference';

var ElementPaymentReference = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  PaymentReference: {
      type: "TypePaymentReferenceType",
      wsdlDefinition: {
        name: "PaymentReference",
        type: "PaymentReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Reference to a Payment. A payment is the transfer of money between two parties"
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
	  PaymentReference: {
      type: "TypePaymentReferenceType",
      wsdlDefinition: {
        name: "PaymentReference",
        type: "PaymentReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Reference to a Payment. A payment is the transfer of money between two parties"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementPaymentReference;
Modeler.register(ElementPaymentReference, "ElementPaymentReference");
