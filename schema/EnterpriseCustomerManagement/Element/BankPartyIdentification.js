var Modeler = require("../Modeler.js");
var className = 'ElementBankPartyIdentification';

var ElementBankPartyIdentification = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  BankPartyIdentification: {
      type: "TypePartyIdentificationType",
      wsdlDefinition: {
        name: "BankPartyIdentification",
        type: "PartyIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Unique Identification of a Bank"
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
	  BankPartyIdentification: {
      type: "TypePartyIdentificationType",
      wsdlDefinition: {
        name: "BankPartyIdentification",
        type: "PartyIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Unique Identification of a Bank"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementBankPartyIdentification;
Modeler.register(ElementBankPartyIdentification, "ElementBankPartyIdentification");
