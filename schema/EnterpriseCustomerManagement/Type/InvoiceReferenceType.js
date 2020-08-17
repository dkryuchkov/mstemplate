var Modeler = require("../Modeler.js");
var className = 'TypeInvoiceReferenceType';

var TypeInvoiceReferenceType = function(json, parentObj) {
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
    Custom: {
      type: "TypeCustomInvoiceReferenceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Custom",
        type: "corecomcust:CustomInvoiceReferenceType",
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
    Custom: {
      type: "TypeCustomInvoiceReferenceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Custom",
        type: "corecomcust:CustomInvoiceReferenceType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeInvoiceReferenceType;
Modeler.register(TypeInvoiceReferenceType, "TypeInvoiceReferenceType");
