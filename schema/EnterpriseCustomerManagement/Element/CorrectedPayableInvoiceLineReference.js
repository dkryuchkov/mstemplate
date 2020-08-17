var Modeler = require("../Modeler.js");
var className = 'ElementCorrectedPayableInvoiceLineReference';

var ElementCorrectedPayableInvoiceLineReference = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CorrectedPayableInvoiceLineReference: {
      type: "TypePayableInvoiceLineReferenceType",
      wsdlDefinition: {
        name: "CorrectedPayableInvoiceLineReference",
        type: "PayableInvoiceLineReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Reference to the invoice line corrected via current line. For price, quantity, or invoice line corrections"
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
	  CorrectedPayableInvoiceLineReference: {
      type: "TypePayableInvoiceLineReferenceType",
      wsdlDefinition: {
        name: "CorrectedPayableInvoiceLineReference",
        type: "PayableInvoiceLineReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Reference to the invoice line corrected via current line. For price, quantity, or invoice line corrections"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementCorrectedPayableInvoiceLineReference;
Modeler.register(ElementCorrectedPayableInvoiceLineReference, "ElementCorrectedPayableInvoiceLineReference");
