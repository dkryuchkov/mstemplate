var Modeler = require("../Modeler.js");
var className = 'ElementBankPartyReference';

var ElementBankPartyReference = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  BankPartyReference: {
      type: "TypeBankPartyReferenceType",
      wsdlDefinition: {
        name: "BankPartyReference",
        type: "BankPartyReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "A banking institution involved in monetary transactions between two parties"
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
	  BankPartyReference: {
      type: "TypeBankPartyReferenceType",
      wsdlDefinition: {
        name: "BankPartyReference",
        type: "BankPartyReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "A banking institution involved in monetary transactions between two parties"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementBankPartyReference;
Modeler.register(ElementBankPartyReference, "ElementBankPartyReference");
