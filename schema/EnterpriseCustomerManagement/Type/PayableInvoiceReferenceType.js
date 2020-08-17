var Modeler = require("../Modeler.js");
var className = 'TypePayableInvoiceReferenceType';

var TypePayableInvoiceReferenceType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  PayableInvoiceIdentification: {
      type: "TypePayableInvoiceIdentificationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:PayableInvoiceIdentification",
        type: "PayableInvoiceIdentificationType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Custom: {
      type: "TypeCustomPayableInvoiceReferenceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Custom",
        type: "corecomcust:CustomPayableInvoiceReferenceType",
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
	  PayableInvoiceIdentification: {
      type: "TypePayableInvoiceIdentificationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:PayableInvoiceIdentification",
        type: "PayableInvoiceIdentificationType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Custom: {
      type: "TypeCustomPayableInvoiceReferenceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Custom",
        type: "corecomcust:CustomPayableInvoiceReferenceType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypePayableInvoiceReferenceType;
Modeler.register(TypePayableInvoiceReferenceType, "TypePayableInvoiceReferenceType");
