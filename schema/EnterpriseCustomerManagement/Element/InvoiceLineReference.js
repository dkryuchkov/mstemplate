var Modeler = require("../Modeler.js");
var className = 'ElementInvoiceLineReference';

var ElementInvoiceLineReference = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  InvoiceLineReference: {
      type: "TypeInvoiceLineReferenceType",
      wsdlDefinition: {
        name: "InvoiceLineReference",
        type: "InvoiceLineReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "A reference to a specific line within an invoice document"
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
	  InvoiceLineReference: {
      type: "TypeInvoiceLineReferenceType",
      wsdlDefinition: {
        name: "InvoiceLineReference",
        type: "InvoiceLineReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "A reference to a specific line within an invoice document"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementInvoiceLineReference;
Modeler.register(ElementInvoiceLineReference, "ElementInvoiceLineReference");
