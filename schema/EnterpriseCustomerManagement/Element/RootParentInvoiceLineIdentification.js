var Modeler = require("../Modeler.js");
var className = 'ElementRootParentInvoiceLineIdentification';

var ElementRootParentInvoiceLineIdentification = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  RootParentInvoiceLineIdentification: {
      type: "TypeInvoiceLineIdentificationType",
      wsdlDefinition: {
        name: "RootParentInvoiceLineIdentification",
        type: "InvoiceLineIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Unique identification to an InvoiceLine which is a root parent of the InvoiceLine in context. The root parent InvoiceLine contains the Item which is a root parent item (a complex item) of the Item in the InvoiceLine in context."
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
	  RootParentInvoiceLineIdentification: {
      type: "TypeInvoiceLineIdentificationType",
      wsdlDefinition: {
        name: "RootParentInvoiceLineIdentification",
        type: "InvoiceLineIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Unique identification to an InvoiceLine which is a root parent of the InvoiceLine in context. The root parent InvoiceLine contains the Item which is a root parent item (a complex item) of the Item in the InvoiceLine in context."
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementRootParentInvoiceLineIdentification;
Modeler.register(ElementRootParentInvoiceLineIdentification, "ElementRootParentInvoiceLineIdentification");
