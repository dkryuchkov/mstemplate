var Modeler = require("../Modeler.js");
var className = 'ElementBankChargeBearerPartyReference';

var ElementBankChargeBearerPartyReference = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  BankChargeBearerPartyReference: {
      type: "TypeBankChargeBearerPartyReferenceType",
      wsdlDefinition: {
        name: "BankChargeBearerPartyReference",
        type: "BankChargeBearerPartyReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Bearer of the bank charge in the case of transfer of money between two parties"
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
	  BankChargeBearerPartyReference: {
      type: "TypeBankChargeBearerPartyReferenceType",
      wsdlDefinition: {
        name: "BankChargeBearerPartyReference",
        type: "BankChargeBearerPartyReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Bearer of the bank charge in the case of transfer of money between two parties"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementBankChargeBearerPartyReference;
Modeler.register(ElementBankChargeBearerPartyReference, "ElementBankChargeBearerPartyReference");
