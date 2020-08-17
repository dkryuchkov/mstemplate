var Modeler = require("../Modeler.js");
var className = 'ElementPaidInvoiceReference';

var ElementPaidInvoiceReference = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  PaidInvoiceReference: {
      type: "TypeInvoiceReferenceType",
      wsdlDefinition: {
        name: "PaidInvoiceReference",
        type: "InvoiceReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "A reference to an invoice document that has already been paid"
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
	  PaidInvoiceReference: {
      type: "TypeInvoiceReferenceType",
      wsdlDefinition: {
        name: "PaidInvoiceReference",
        type: "InvoiceReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "A reference to an invoice document that has already been paid"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementPaidInvoiceReference;
Modeler.register(ElementPaidInvoiceReference, "ElementPaidInvoiceReference");
