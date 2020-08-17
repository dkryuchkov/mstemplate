var Modeler = require("../Modeler.js");
var className = 'ElementDirectDebitMandateReference';

var ElementDirectDebitMandateReference = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  DirectDebitMandateReference: {
      type: "TypeDirectDebitMandateReferenceType",
      wsdlDefinition: {
        name: "DirectDebitMandateReference",
        type: "DirectDebitMandateReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Reference to a mandate for direct debit payment"
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
	  DirectDebitMandateReference: {
      type: "TypeDirectDebitMandateReferenceType",
      wsdlDefinition: {
        name: "DirectDebitMandateReference",
        type: "DirectDebitMandateReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Reference to a mandate for direct debit payment"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementDirectDebitMandateReference;
Modeler.register(ElementDirectDebitMandateReference, "ElementDirectDebitMandateReference");
