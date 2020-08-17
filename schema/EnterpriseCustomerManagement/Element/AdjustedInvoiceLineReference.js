var Modeler = require("../Modeler.js");
var className = 'ElementAdjustedInvoiceLineReference';

var ElementAdjustedInvoiceLineReference = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  AdjustedInvoiceLineReference: {
      type: "TypeInvoiceLineReferenceType",
      wsdlDefinition: {
        name: "AdjustedInvoiceLineReference",
        type: "InvoiceLineReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Reference to a line on a paid invoice. Typically used on an invoice to make an adjustment for payments made by earlier invoices"
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
	  AdjustedInvoiceLineReference: {
      type: "TypeInvoiceLineReferenceType",
      wsdlDefinition: {
        name: "AdjustedInvoiceLineReference",
        type: "InvoiceLineReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Reference to a line on a paid invoice. Typically used on an invoice to make an adjustment for payments made by earlier invoices"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementAdjustedInvoiceLineReference;
Modeler.register(ElementAdjustedInvoiceLineReference, "ElementAdjustedInvoiceLineReference");
