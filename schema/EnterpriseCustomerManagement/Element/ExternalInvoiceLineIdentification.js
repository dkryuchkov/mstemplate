var Modeler = require("../Modeler.js");
var className = 'ElementExternalInvoiceLineIdentification';

var ElementExternalInvoiceLineIdentification = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  ExternalInvoiceLineIdentification: {
      type: "TypeExternalInvoiceLineIdentificationType",
      wsdlDefinition: {
        name: "ExternalInvoiceLineIdentification",
        type: "ExternalInvoiceLineIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Unique Identification of an External Invoice Line"
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
	  ExternalInvoiceLineIdentification: {
      type: "TypeExternalInvoiceLineIdentificationType",
      wsdlDefinition: {
        name: "ExternalInvoiceLineIdentification",
        type: "ExternalInvoiceLineIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Unique Identification of an External Invoice Line"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementExternalInvoiceLineIdentification;
Modeler.register(ElementExternalInvoiceLineIdentification, "ElementExternalInvoiceLineIdentification");
