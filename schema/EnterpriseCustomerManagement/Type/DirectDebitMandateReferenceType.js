var Modeler = require("../Modeler.js");
var className = 'TypeDirectDebitMandateReferenceType';

var TypeDirectDebitMandateReferenceType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  DirectDebitMandateIdentification: {
      type: "TypeDirectDebitMandateIdentificationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:DirectDebitMandateIdentification",
        type: "DirectDebitMandateIdentificationType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Custom: {
      type: "TypeCustomDirectDebitMandateReferenceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Custom",
        type: "corecomcust:CustomDirectDebitMandateReferenceType",
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
	  DirectDebitMandateIdentification: {
      type: "TypeDirectDebitMandateIdentificationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:DirectDebitMandateIdentification",
        type: "DirectDebitMandateIdentificationType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Custom: {
      type: "TypeCustomDirectDebitMandateReferenceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Custom",
        type: "corecomcust:CustomDirectDebitMandateReferenceType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeDirectDebitMandateReferenceType;
Modeler.register(TypeDirectDebitMandateReferenceType, "TypeDirectDebitMandateReferenceType");
