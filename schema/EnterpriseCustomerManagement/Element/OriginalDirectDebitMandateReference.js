var Modeler = require("../Modeler.js");
var className = 'ElementOriginalDirectDebitMandateReference';

var ElementOriginalDirectDebitMandateReference = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  OriginalDirectDebitMandateReference: {
      type: "TypeDirectDebitMandateReferenceType",
      wsdlDefinition: {
        name: "OriginalDirectDebitMandateReference",
        type: "DirectDebitMandateReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Reference to an original direct debit mandate, used in cases where another a direct debit mandate is creating a change in an original mandate"
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
	  OriginalDirectDebitMandateReference: {
      type: "TypeDirectDebitMandateReferenceType",
      wsdlDefinition: {
        name: "OriginalDirectDebitMandateReference",
        type: "DirectDebitMandateReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Reference to an original direct debit mandate, used in cases where another a direct debit mandate is creating a change in an original mandate"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementOriginalDirectDebitMandateReference;
Modeler.register(ElementOriginalDirectDebitMandateReference, "ElementOriginalDirectDebitMandateReference");
