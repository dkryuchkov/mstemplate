var Modeler = require("../Modeler.js");
var className = 'ElementParentInvoiceLineIdentification';

var ElementParentInvoiceLineIdentification = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  ParentInvoiceLineIdentification: {
      type: "TypeInvoiceLineIdentificationType",
      wsdlDefinition: {
        name: "ParentInvoiceLineIdentification",
        type: "InvoiceLineIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Unique identification to an InvoiceLine which is a parent of the InvoiceLine in context. The parent InvoiceLine contains the Item which is a parent item of the Item in the InvoiceLine in context."
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
	  ParentInvoiceLineIdentification: {
      type: "TypeInvoiceLineIdentificationType",
      wsdlDefinition: {
        name: "ParentInvoiceLineIdentification",
        type: "InvoiceLineIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Unique identification to an InvoiceLine which is a parent of the InvoiceLine in context. The parent InvoiceLine contains the Item which is a parent item of the Item in the InvoiceLine in context."
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementParentInvoiceLineIdentification;
Modeler.register(ElementParentInvoiceLineIdentification, "ElementParentInvoiceLineIdentification");
