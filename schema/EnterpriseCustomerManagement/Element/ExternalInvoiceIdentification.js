var Modeler = require("../Modeler.js");
var className = 'ElementExternalInvoiceIdentification';

var ElementExternalInvoiceIdentification = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  ExternalInvoiceIdentification: {
      type: "TypeExternalInvoiceIdentificationType",
      wsdlDefinition: {
        name: "ExternalInvoiceIdentification",
        type: "ExternalInvoiceIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Unique Identification of an External Invoice"
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
	  ExternalInvoiceIdentification: {
      type: "TypeExternalInvoiceIdentificationType",
      wsdlDefinition: {
        name: "ExternalInvoiceIdentification",
        type: "ExternalInvoiceIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Unique Identification of an External Invoice"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementExternalInvoiceIdentification;
Modeler.register(ElementExternalInvoiceIdentification, "ElementExternalInvoiceIdentification");
