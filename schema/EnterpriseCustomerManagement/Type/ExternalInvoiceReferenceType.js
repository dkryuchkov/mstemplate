var Modeler = require("../Modeler.js");
var className = 'TypeExternalInvoiceReferenceType';

var TypeExternalInvoiceReferenceType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  ExternalInvoiceIdentification: {
      type: "TypeExternalInvoiceIdentificationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:ExternalInvoiceIdentification",
        type: "ExternalInvoiceIdentificationType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    TotalAmount: {
      type: "TypeAmountType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:TotalAmount",
        type: "AmountType",
        "xsd:annotation": {
          "xsd:documentation": "Total value of the items billed on the invoice  including taxes or charges, this value does not include the prior balance amount and should be derived from Invoice Lines."
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Custom: {
      type: "TypeCustomExternalInvoiceLineReferenceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Custom",
        type: "corecomcust:CustomExternalInvoiceLineReferenceType",
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
	  ExternalInvoiceIdentification: {
      type: "TypeExternalInvoiceIdentificationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:ExternalInvoiceIdentification",
        type: "ExternalInvoiceIdentificationType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    TotalAmount: {
      type: "TypeAmountType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:TotalAmount",
        type: "AmountType",
        "xsd:annotation": {
          "xsd:documentation": "Total value of the items billed on the invoice  including taxes or charges, this value does not include the prior balance amount and should be derived from Invoice Lines."
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Custom: {
      type: "TypeCustomExternalInvoiceLineReferenceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Custom",
        type: "corecomcust:CustomExternalInvoiceLineReferenceType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeExternalInvoiceReferenceType;
Modeler.register(TypeExternalInvoiceReferenceType, "TypeExternalInvoiceReferenceType");
