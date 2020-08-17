var Modeler = require("../Modeler.js");
var className = 'ElementAdjustedInvoiceReference';

var ElementAdjustedInvoiceReference = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  AdjustedInvoiceReference: {
      type: "TypeInvoiceReferenceType",
      wsdlDefinition: {
        name: "AdjustedInvoiceReference",
        type: "InvoiceReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Reference to a paid invoice. Typically used on an invoice to make an adjustment for payments made by earlier invoices"
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
	  AdjustedInvoiceReference: {
      type: "TypeInvoiceReferenceType",
      wsdlDefinition: {
        name: "AdjustedInvoiceReference",
        type: "InvoiceReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Reference to a paid invoice. Typically used on an invoice to make an adjustment for payments made by earlier invoices"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementAdjustedInvoiceReference;
Modeler.register(ElementAdjustedInvoiceReference, "ElementAdjustedInvoiceReference");
