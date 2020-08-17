var Modeler = require("../Modeler.js");
var className = 'ElementExternalInvoiceReference';

var ElementExternalInvoiceReference = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  ExternalInvoiceReference: {
      type: "TypeExternalInvoiceReferenceType",
      wsdlDefinition: {
        name: "ExternalInvoiceReference",
        type: "ExternalInvoiceReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Reference to an external invoice. E.g. the invoice issued by the supplier which the payable invoice is based on."
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
	  ExternalInvoiceReference: {
      type: "TypeExternalInvoiceReferenceType",
      wsdlDefinition: {
        name: "ExternalInvoiceReference",
        type: "ExternalInvoiceReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Reference to an external invoice. E.g. the invoice issued by the supplier which the payable invoice is based on."
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementExternalInvoiceReference;
Modeler.register(ElementExternalInvoiceReference, "ElementExternalInvoiceReference");
