var Modeler = require("../Modeler.js");
var className = 'ElementLedgerIdentification';

var ElementLedgerIdentification = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  LedgerIdentification: {
      type: "TypeLedgerIdentificationType",
      wsdlDefinition: {
        name: "LedgerIdentification",
        type: "LedgerIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Unique identification of a Ledger"
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
	  LedgerIdentification: {
      type: "TypeLedgerIdentificationType",
      wsdlDefinition: {
        name: "LedgerIdentification",
        type: "LedgerIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Unique identification of a Ledger"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementLedgerIdentification;
Modeler.register(ElementLedgerIdentification, "ElementLedgerIdentification");
