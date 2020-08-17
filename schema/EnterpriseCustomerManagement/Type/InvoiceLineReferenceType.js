var Modeler = require("../Modeler.js");
var className = 'TypeInvoiceLineReferenceType';

var TypeInvoiceLineReferenceType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  InvoiceIdentification: {
      type: "TypeInvoiceIdentificationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:InvoiceIdentification",
        type: "InvoiceIdentificationType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    InvoiceLineIdentification: {
      type: "TypeInvoiceLineIdentificationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:InvoiceLineIdentification",
        type: "InvoiceLineIdentificationType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Custom: {
      type: "TypeCustomInvoiceLineReferenceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Custom",
        type: "corecomcust:CustomInvoiceLineReferenceType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Quantity: {
      type: "TypeQuantityType",
      wsdlDefinition: {
        name: "WL5G3N2:Quantity",
        type: "QuantityType",
        "xsd:annotation": {
          "xsd:documentation": "Quantity of the line item being invoiced"
        },
        attribute: false,
        ns: "WL5G3N2"
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
        minOccurs: "0",
        name: "WL5G3N2:InvoiceIdentification",
        type: "InvoiceIdentificationType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    InvoiceLineIdentification: {
      type: "TypeInvoiceLineIdentificationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:InvoiceLineIdentification",
        type: "InvoiceLineIdentificationType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Custom: {
      type: "TypeCustomInvoiceLineReferenceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Custom",
        type: "corecomcust:CustomInvoiceLineReferenceType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Quantity: {
      type: "TypeQuantityType",
      wsdlDefinition: {
        name: "WL5G3N2:Quantity",
        type: "QuantityType",
        "xsd:annotation": {
          "xsd:documentation": "Quantity of the line item being invoiced"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeInvoiceLineReferenceType;
Modeler.register(TypeInvoiceLineReferenceType, "TypeInvoiceLineReferenceType");
