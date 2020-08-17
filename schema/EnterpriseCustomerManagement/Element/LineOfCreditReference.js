var Modeler = require("../Modeler.js");
var className = 'ElementLineOfCreditReference';

var ElementLineOfCreditReference = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  LineOfCreditReference: {
      type: "TypeLineOfCreditReferenceType",
      wsdlDefinition: {
        name: "LineOfCreditReference",
        type: "LineOfCreditReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Reference to a Line Of Credit object. The LineOfCredit is intended to cater for one or a collection of lines of credit of a customer. It signifies the credit facility given to a customer.",
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
	  LineOfCreditReference: {
      type: "TypeLineOfCreditReferenceType",
      wsdlDefinition: {
        name: "LineOfCreditReference",
        type: "LineOfCreditReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Reference to a Line Of Credit object. The LineOfCredit is intended to cater for one or a collection of lines of credit of a customer. It signifies the credit facility given to a customer.",
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

module.exports = ElementLineOfCreditReference;
Modeler.register(ElementLineOfCreditReference, "ElementLineOfCreditReference");
