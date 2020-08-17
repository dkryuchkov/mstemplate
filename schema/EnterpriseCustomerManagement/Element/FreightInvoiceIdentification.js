var Modeler = require("../Modeler.js");
var className = 'ElementFreightInvoiceIdentification';

var ElementFreightInvoiceIdentification = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  FreightInvoiceIdentification: {
      type: "TypeFreightInvoiceIdentificationType",
      wsdlDefinition: {
        name: "FreightInvoiceIdentification",
        type: "FreightInvoiceIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Unique Identification of a Freight Invoice"
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
	  FreightInvoiceIdentification: {
      type: "TypeFreightInvoiceIdentificationType",
      wsdlDefinition: {
        name: "FreightInvoiceIdentification",
        type: "FreightInvoiceIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Unique Identification of a Freight Invoice"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementFreightInvoiceIdentification;
Modeler.register(ElementFreightInvoiceIdentification, "ElementFreightInvoiceIdentification");
