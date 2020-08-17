var Modeler = require("../Modeler.js");
var className = 'ElementFinancialTransactionReference';

var ElementFinancialTransactionReference = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  FinancialTransactionReference: {
      type: "TypeFinancialTransactionReferenceType",
      wsdlDefinition: {
        name: "FinancialTransactionReference",
        type: "FinancialTransactionReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Reference to a Financial Transaction object.",
          "xsd:appinfo": {
            "ebocontext:BusinessContext": "BankingAndWealthManagement"
          }
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
	  FinancialTransactionReference: {
      type: "TypeFinancialTransactionReferenceType",
      wsdlDefinition: {
        name: "FinancialTransactionReference",
        type: "FinancialTransactionReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Reference to a Financial Transaction object.",
          "xsd:appinfo": {
            "ebocontext:BusinessContext": "BankingAndWealthManagement"
          }
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementFinancialTransactionReference;
Modeler.register(ElementFinancialTransactionReference, "ElementFinancialTransactionReference");
