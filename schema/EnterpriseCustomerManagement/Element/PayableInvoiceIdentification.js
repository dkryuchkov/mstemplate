var Modeler = require("../Modeler.js");
var className = 'ElementPayableInvoiceIdentification';

var ElementPayableInvoiceIdentification = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  PayableInvoiceIdentification: {
      type: "TypePayableInvoiceIdentificationType",
      wsdlDefinition: {
        name: "PayableInvoiceIdentification",
        type: "PayableInvoiceIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Unique Identification of a Payable Invoice"
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
	  PayableInvoiceIdentification: {
      type: "TypePayableInvoiceIdentificationType",
      wsdlDefinition: {
        name: "PayableInvoiceIdentification",
        type: "PayableInvoiceIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Unique Identification of a Payable Invoice"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementPayableInvoiceIdentification;
Modeler.register(ElementPayableInvoiceIdentification, "ElementPayableInvoiceIdentification");
