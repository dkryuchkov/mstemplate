var Modeler = require("../Modeler.js");
var className = 'ElementDisbursedPaymentReference';

var ElementDisbursedPaymentReference = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  DisbursedPaymentReference: {
      type: "TypeDisbursedPaymentReferenceType",
      wsdlDefinition: {
        name: "DisbursedPaymentReference",
        type: "DisbursedPaymentReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Reference to a Disbursed Payment. A Disbursed Payment encapsulates a payment transaction between one payer account and one payee account. The deploying company acts as payer and hence this payment is outgoing from the Accounts Payable system of the deploying company."
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
	  DisbursedPaymentReference: {
      type: "TypeDisbursedPaymentReferenceType",
      wsdlDefinition: {
        name: "DisbursedPaymentReference",
        type: "DisbursedPaymentReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Reference to a Disbursed Payment. A Disbursed Payment encapsulates a payment transaction between one payer account and one payee account. The deploying company acts as payer and hence this payment is outgoing from the Accounts Payable system of the deploying company."
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementDisbursedPaymentReference;
Modeler.register(ElementDisbursedPaymentReference, "ElementDisbursedPaymentReference");
