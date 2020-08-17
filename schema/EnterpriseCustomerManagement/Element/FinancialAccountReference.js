var Modeler = require("../Modeler.js");
var className = 'ElementFinancialAccountReference';

var ElementFinancialAccountReference = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  FinancialAccountReference: {
      type: "TypeFinancialAccountReferenceType",
      wsdlDefinition: {
        name: "FinancialAccountReference",
        type: "FinancialAccountReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Refers a monetary account that is provided by a financial institution and is owned by one or more holders. It can be used to refers to varioius types of Financial Accounts such as loan, deposit, or investment account."
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
	  FinancialAccountReference: {
      type: "TypeFinancialAccountReferenceType",
      wsdlDefinition: {
        name: "FinancialAccountReference",
        type: "FinancialAccountReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Refers a monetary account that is provided by a financial institution and is owned by one or more holders. It can be used to refers to varioius types of Financial Accounts such as loan, deposit, or investment account."
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementFinancialAccountReference;
Modeler.register(ElementFinancialAccountReference, "ElementFinancialAccountReference");
