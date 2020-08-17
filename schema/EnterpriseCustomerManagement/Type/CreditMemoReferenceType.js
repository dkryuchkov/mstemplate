var Modeler = require("../Modeler.js");
var className = 'TypeCreditMemoReferenceType';

var TypeCreditMemoReferenceType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CreditMemoIdentification: {
      type: "TypeCreditMemoIdentificationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:CreditMemoIdentification",
        type: "CreditMemoIdentificationType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Custom: {
      type: "TypeCustomCreditMemoReferenceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Custom",
        type: "corecomcust:CustomCreditMemoReferenceType",
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
	  CreditMemoIdentification: {
      type: "TypeCreditMemoIdentificationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:CreditMemoIdentification",
        type: "CreditMemoIdentificationType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Custom: {
      type: "TypeCustomCreditMemoReferenceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Custom",
        type: "corecomcust:CustomCreditMemoReferenceType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCreditMemoReferenceType;
Modeler.register(TypeCreditMemoReferenceType, "TypeCreditMemoReferenceType");
