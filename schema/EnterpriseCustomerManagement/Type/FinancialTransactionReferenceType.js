var Modeler = require("../Modeler.js");
var className = 'TypeFinancialTransactionReferenceType';

var TypeFinancialTransactionReferenceType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  FinancialTransactionIdentification: {
      type: "TypeFinancialTransactionIdentificationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:FinancialTransactionIdentification",
        type: "FinancialTransactionIdentificationType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Custom: {
      type: "TypeCustomFinancialTransactionReferenceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Custom",
        type: "corecomcust:CustomFinancialTransactionReferenceType",
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
	  FinancialTransactionIdentification: {
      type: "TypeFinancialTransactionIdentificationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:FinancialTransactionIdentification",
        type: "FinancialTransactionIdentificationType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Custom: {
      type: "TypeCustomFinancialTransactionReferenceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Custom",
        type: "corecomcust:CustomFinancialTransactionReferenceType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeFinancialTransactionReferenceType;
Modeler.register(TypeFinancialTransactionReferenceType, "TypeFinancialTransactionReferenceType");
