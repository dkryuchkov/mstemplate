var Modeler = require("../Modeler.js");
var className = 'ElementBankDraft';

var ElementBankDraft = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  BankDraft: {
      type: "TypeBankDraftType",
      wsdlDefinition: {
        name: "BankDraft",
        type: "BankDraftType",
        "xsd:annotation": {
          "xsd:documentation": "A check drawn by one bank against funds deposited into its account at another bank, authorizing the second bank to make payment to the individual or organization named in the draft"
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
	  BankDraft: {
      type: "TypeBankDraftType",
      wsdlDefinition: {
        name: "BankDraft",
        type: "BankDraftType",
        "xsd:annotation": {
          "xsd:documentation": "A check drawn by one bank against funds deposited into its account at another bank, authorizing the second bank to make payment to the individual or organization named in the draft"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementBankDraft;
Modeler.register(ElementBankDraft, "ElementBankDraft");
