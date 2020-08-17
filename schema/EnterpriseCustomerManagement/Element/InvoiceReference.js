var Modeler = require("../Modeler.js");
var className = 'ElementInvoiceReference';

var ElementInvoiceReference = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  InvoiceReference: {
      type: "TypeInvoiceReferenceType",
      wsdlDefinition: {
        name: "InvoiceReference",
        type: "InvoiceReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "An invoice or bill is a commercial document issued by a seller to a buyer, indicating the products, quantities and agreed prices for products or services with which the seller has already provided the buyer. An invoice indicates that payment is due from the buyer to the seller, according to the payment terms"
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
	  InvoiceReference: {
      type: "TypeInvoiceReferenceType",
      wsdlDefinition: {
        name: "InvoiceReference",
        type: "InvoiceReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "An invoice or bill is a commercial document issued by a seller to a buyer, indicating the products, quantities and agreed prices for products or services with which the seller has already provided the buyer. An invoice indicates that payment is due from the buyer to the seller, according to the payment terms"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementInvoiceReference;
Modeler.register(ElementInvoiceReference, "ElementInvoiceReference");
