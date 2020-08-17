var Modeler = require("../Modeler.js");
var className = 'ElementPaymentTerm';

var ElementPaymentTerm = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  PaymentTerm: {
      type: "TypePaymentTermType",
      wsdlDefinition: {
        name: "PaymentTerm",
        type: "PaymentTermType",
        "xsd:annotation": {
          "xsd:documentation": "Identifies the payment term assoicated with any procurment or billing document. Supports the abiility to specify an absolute due date, a number of days from a start daye, a percent discount or an absolute discount. A common term like \"Net30Days\" is explicitly code as either a calculated DueDateTime or a PaymentTermsDateTime and NumberOfDays"
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
	  PaymentTerm: {
      type: "TypePaymentTermType",
      wsdlDefinition: {
        name: "PaymentTerm",
        type: "PaymentTermType",
        "xsd:annotation": {
          "xsd:documentation": "Identifies the payment term assoicated with any procurment or billing document. Supports the abiility to specify an absolute due date, a number of days from a start daye, a percent discount or an absolute discount. A common term like \"Net30Days\" is explicitly code as either a calculated DueDateTime or a PaymentTermsDateTime and NumberOfDays"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementPaymentTerm;
Modeler.register(ElementPaymentTerm, "ElementPaymentTerm");
