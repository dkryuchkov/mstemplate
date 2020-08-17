var Modeler = require("../Modeler.js");
var className = 'ElementFreightInvoiceReference';

var ElementFreightInvoiceReference = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  FreightInvoiceReference: {
      type: "TypeInvoiceReferenceType",
      wsdlDefinition: {
        name: "FreightInvoiceReference",
        type: "InvoiceReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "An invoice issued by a freight carrier to the originator of a shipment"
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
	  FreightInvoiceReference: {
      type: "TypeInvoiceReferenceType",
      wsdlDefinition: {
        name: "FreightInvoiceReference",
        type: "InvoiceReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "An invoice issued by a freight carrier to the originator of a shipment"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementFreightInvoiceReference;
Modeler.register(ElementFreightInvoiceReference, "ElementFreightInvoiceReference");
