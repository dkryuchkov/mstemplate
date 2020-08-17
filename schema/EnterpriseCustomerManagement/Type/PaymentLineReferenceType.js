var Modeler = require("../Modeler.js");
var className = 'TypePaymentLineReferenceType';

var TypePaymentLineReferenceType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  PaymentIdentification: {
      type: "TypePaymentIdentificationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:PaymentIdentification",
        type: "PaymentIdentificationType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    PaymentLineIdentification: {
      type: "TypePaymentLineIdentificationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:PaymentLineIdentification",
        type: "PaymentLineIdentificationType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Custom: {
      type: "TypeCustomPaymentLineReferenceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Custom",
        type: "corecomcust:CustomPaymentLineReferenceType",
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
	  PaymentIdentification: {
      type: "TypePaymentIdentificationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:PaymentIdentification",
        type: "PaymentIdentificationType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    PaymentLineIdentification: {
      type: "TypePaymentLineIdentificationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:PaymentLineIdentification",
        type: "PaymentLineIdentificationType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Custom: {
      type: "TypeCustomPaymentLineReferenceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Custom",
        type: "corecomcust:CustomPaymentLineReferenceType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypePaymentLineReferenceType;
Modeler.register(TypePaymentLineReferenceType, "TypePaymentLineReferenceType");
