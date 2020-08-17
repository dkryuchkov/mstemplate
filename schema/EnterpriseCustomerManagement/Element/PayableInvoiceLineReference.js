var Modeler = require("../Modeler.js");
var className = 'ElementPayableInvoiceLineReference';

var ElementPayableInvoiceLineReference = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  PayableInvoiceLineReference: {
      type: "TypePayableInvoiceLineReferenceType",
      wsdlDefinition: {
        name: "PayableInvoiceLineReference",
        type: "PayableInvoiceLineReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "A reference to a payable invoice."
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
	  PayableInvoiceLineReference: {
      type: "TypePayableInvoiceLineReferenceType",
      wsdlDefinition: {
        name: "PayableInvoiceLineReference",
        type: "PayableInvoiceLineReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "A reference to a payable invoice."
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementPayableInvoiceLineReference;
Modeler.register(ElementPayableInvoiceLineReference, "ElementPayableInvoiceLineReference");
