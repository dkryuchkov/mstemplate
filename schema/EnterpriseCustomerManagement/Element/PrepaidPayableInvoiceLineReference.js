var Modeler = require("../Modeler.js");
var className = 'ElementPrepaidPayableInvoiceLineReference';

var ElementPrepaidPayableInvoiceLineReference = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  PrepaidPayableInvoiceLineReference: {
      type: "TypePayableInvoiceLineReferenceType",
      wsdlDefinition: {
        name: "PrepaidPayableInvoiceLineReference",
        type: "PayableInvoiceLineReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Reference to Prepayment invoice line applied via current invoice line"
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
	  PrepaidPayableInvoiceLineReference: {
      type: "TypePayableInvoiceLineReferenceType",
      wsdlDefinition: {
        name: "PrepaidPayableInvoiceLineReference",
        type: "PayableInvoiceLineReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Reference to Prepayment invoice line applied via current invoice line"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementPrepaidPayableInvoiceLineReference;
Modeler.register(ElementPrepaidPayableInvoiceLineReference, "ElementPrepaidPayableInvoiceLineReference");
