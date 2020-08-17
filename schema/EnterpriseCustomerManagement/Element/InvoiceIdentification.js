var Modeler = require("../Modeler.js");
var className = 'ElementInvoiceIdentification';

var ElementInvoiceIdentification = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  InvoiceIdentification: {
      type: "TypeInvoiceIdentificationType",
      wsdlDefinition: {
        name: "InvoiceIdentification",
        type: "InvoiceIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Unique Identification of an Invoice"
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
	  InvoiceIdentification: {
      type: "TypeInvoiceIdentificationType",
      wsdlDefinition: {
        name: "InvoiceIdentification",
        type: "InvoiceIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Unique Identification of an Invoice"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementInvoiceIdentification;
Modeler.register(ElementInvoiceIdentification, "ElementInvoiceIdentification");
