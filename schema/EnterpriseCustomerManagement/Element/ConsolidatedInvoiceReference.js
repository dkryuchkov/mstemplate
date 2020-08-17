var Modeler = require("../Modeler.js");
var className = 'ElementConsolidatedInvoiceReference';

var ElementConsolidatedInvoiceReference = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  ConsolidatedInvoiceReference: {
      type: "TypeInvoiceReferenceType",
      wsdlDefinition: {
        name: "ConsolidatedInvoiceReference",
        type: "InvoiceReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Identifies a primary invoice that groups multiple invoices that have no lines but only header information, for payment processing"
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
	  ConsolidatedInvoiceReference: {
      type: "TypeInvoiceReferenceType",
      wsdlDefinition: {
        name: "ConsolidatedInvoiceReference",
        type: "InvoiceReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Identifies a primary invoice that groups multiple invoices that have no lines but only header information, for payment processing"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementConsolidatedInvoiceReference;
Modeler.register(ElementConsolidatedInvoiceReference, "ElementConsolidatedInvoiceReference");
