var Modeler = require("../Modeler.js");
var className = 'ElementInvoicingRuleReference';

var ElementInvoicingRuleReference = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  InvoicingRuleReference: {
      type: "TypeInvoicingRuleReferenceType",
      wsdlDefinition: {
        name: "InvoicingRuleReference",
        type: "InvoicingRuleReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Refer to an Invoicing Rule which is used for determining when to recognize Receivable for invoices that span more than one accounting period."
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
	  InvoicingRuleReference: {
      type: "TypeInvoicingRuleReferenceType",
      wsdlDefinition: {
        name: "InvoicingRuleReference",
        type: "InvoicingRuleReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Refer to an Invoicing Rule which is used for determining when to recognize Receivable for invoices that span more than one accounting period."
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementInvoicingRuleReference;
Modeler.register(ElementInvoicingRuleReference, "ElementInvoicingRuleReference");
