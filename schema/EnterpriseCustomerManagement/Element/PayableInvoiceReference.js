var Modeler = require("../Modeler.js");
var className = 'ElementPayableInvoiceReference';

var ElementPayableInvoiceReference = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  PayableInvoiceReference: {
      type: "TypePayableInvoiceReferenceType",
      wsdlDefinition: {
        name: "PayableInvoiceReference",
        type: "PayableInvoiceReferenceType",
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
	  PayableInvoiceReference: {
      type: "TypePayableInvoiceReferenceType",
      wsdlDefinition: {
        name: "PayableInvoiceReference",
        type: "PayableInvoiceReferenceType",
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

module.exports = ElementPayableInvoiceReference;
Modeler.register(ElementPayableInvoiceReference, "ElementPayableInvoiceReference");
