var Modeler = require("../Modeler.js");
var className = 'ElementLoanAccountComponentIdentification';

var ElementLoanAccountComponentIdentification = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  LoanAccountComponentIdentification: {
      type: "TypeLoanAccountComponentIdentificationType",
      wsdlDefinition: {
        name: "LoanAccountComponentIdentification",
        type: "LoanAccountComponentIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Unique identification of a Loan Account Component in the Loan Account object",
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
	  LoanAccountComponentIdentification: {
      type: "TypeLoanAccountComponentIdentificationType",
      wsdlDefinition: {
        name: "LoanAccountComponentIdentification",
        type: "LoanAccountComponentIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Unique identification of a Loan Account Component in the Loan Account object",
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

module.exports = ElementLoanAccountComponentIdentification;
Modeler.register(ElementLoanAccountComponentIdentification, "ElementLoanAccountComponentIdentification");
