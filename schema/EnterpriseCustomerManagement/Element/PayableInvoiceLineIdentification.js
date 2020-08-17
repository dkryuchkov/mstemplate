var Modeler = require("../Modeler.js");
var className = 'ElementPayableInvoiceLineIdentification';

var ElementPayableInvoiceLineIdentification = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  PayableInvoiceLineIdentification: {
      type: "TypePayableInvoiceLineIdentificationType",
      wsdlDefinition: {
        name: "PayableInvoiceLineIdentification",
        type: "PayableInvoiceLineIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Unique Identification of a Payable Invoice Line"
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
	  PayableInvoiceLineIdentification: {
      type: "TypePayableInvoiceLineIdentificationType",
      wsdlDefinition: {
        name: "PayableInvoiceLineIdentification",
        type: "PayableInvoiceLineIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Unique Identification of a Payable Invoice Line"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementPayableInvoiceLineIdentification;
Modeler.register(ElementPayableInvoiceLineIdentification, "ElementPayableInvoiceLineIdentification");
