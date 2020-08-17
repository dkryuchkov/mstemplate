var Modeler = require("../Modeler.js");
var className = 'ElementBankAccountHolderPartyReference';

var ElementBankAccountHolderPartyReference = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  BankAccountHolderPartyReference: {
      type: "TypeBankAccountHolderPartyReferenceType",
      wsdlDefinition: {
        name: "BankAccountHolderPartyReference",
        type: "BankAccountHolderPartyReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Person or Organization holding an account in a bank"
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
	  BankAccountHolderPartyReference: {
      type: "TypeBankAccountHolderPartyReferenceType",
      wsdlDefinition: {
        name: "BankAccountHolderPartyReference",
        type: "BankAccountHolderPartyReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Person or Organization holding an account in a bank"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementBankAccountHolderPartyReference;
Modeler.register(ElementBankAccountHolderPartyReference, "ElementBankAccountHolderPartyReference");
