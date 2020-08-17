var Modeler = require("../Modeler.js");
var className = 'ElementBankBranchIdentification';

var ElementBankBranchIdentification = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  BankBranchIdentification: {
      type: "TypeBankBranchIdentificationType",
      wsdlDefinition: {
        name: "BankBranchIdentification",
        type: "BankBranchIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Unique Identification of a BankBranch"
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
	  BankBranchIdentification: {
      type: "TypeBankBranchIdentificationType",
      wsdlDefinition: {
        name: "BankBranchIdentification",
        type: "BankBranchIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Unique Identification of a BankBranch"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementBankBranchIdentification;
Modeler.register(ElementBankBranchIdentification, "ElementBankBranchIdentification");
