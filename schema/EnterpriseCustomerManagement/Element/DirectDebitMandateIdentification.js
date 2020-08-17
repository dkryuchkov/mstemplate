var Modeler = require("../Modeler.js");
var className = 'ElementDirectDebitMandateIdentification';

var ElementDirectDebitMandateIdentification = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  DirectDebitMandateIdentification: {
      type: "TypeDirectDebitMandateIdentificationType",
      wsdlDefinition: {
        name: "DirectDebitMandateIdentification",
        type: "DirectDebitMandateIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Unique identification of a direct debit mandate"
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
	  DirectDebitMandateIdentification: {
      type: "TypeDirectDebitMandateIdentificationType",
      wsdlDefinition: {
        name: "DirectDebitMandateIdentification",
        type: "DirectDebitMandateIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Unique identification of a direct debit mandate"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementDirectDebitMandateIdentification;
Modeler.register(ElementDirectDebitMandateIdentification, "ElementDirectDebitMandateIdentification");
