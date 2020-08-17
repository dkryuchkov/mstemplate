var Modeler = require("../Modeler.js");
var className = 'ElementBankAccountAssociatedPartyIdentification';

var ElementBankAccountAssociatedPartyIdentification = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  BankAccountAssociatedPartyIdentification: {
      type: "TypePartyIdentificationType",
      wsdlDefinition: {
        name: "BankAccountAssociatedPartyIdentification",
        type: "PartyIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Identifies a bank account party and the relationship of that party to the bank account"
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
	  BankAccountAssociatedPartyIdentification: {
      type: "TypePartyIdentificationType",
      wsdlDefinition: {
        name: "BankAccountAssociatedPartyIdentification",
        type: "PartyIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Identifies a bank account party and the relationship of that party to the bank account"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementBankAccountAssociatedPartyIdentification;
Modeler.register(ElementBankAccountAssociatedPartyIdentification, "ElementBankAccountAssociatedPartyIdentification");
