var Modeler = require("../Modeler.js");
var className = 'ElementInvoiceLineIdentification';

var ElementInvoiceLineIdentification = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  InvoiceLineIdentification: {
      type: "TypeInvoiceLineIdentificationType",
      wsdlDefinition: {
        name: "InvoiceLineIdentification",
        type: "InvoiceLineIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Unique Identification of an Invoice Line"
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
	  InvoiceLineIdentification: {
      type: "TypeInvoiceLineIdentificationType",
      wsdlDefinition: {
        name: "InvoiceLineIdentification",
        type: "InvoiceLineIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Unique Identification of an Invoice Line"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementInvoiceLineIdentification;
Modeler.register(ElementInvoiceLineIdentification, "ElementInvoiceLineIdentification");
