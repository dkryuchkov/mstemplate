var Modeler = require("../Modeler.js");
var className = 'ElementBankAccountIdentification';

var ElementBankAccountIdentification = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  BankAccountIdentification: {
      type: "TypeBankAccountIdentificationType",
      wsdlDefinition: {
        name: "BankAccountIdentification",
        type: "BankAccountIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Unique Identification of a BankAccount"
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
	  BankAccountIdentification: {
      type: "TypeBankAccountIdentificationType",
      wsdlDefinition: {
        name: "BankAccountIdentification",
        type: "BankAccountIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Unique Identification of a BankAccount"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementBankAccountIdentification;
Modeler.register(ElementBankAccountIdentification, "ElementBankAccountIdentification");
