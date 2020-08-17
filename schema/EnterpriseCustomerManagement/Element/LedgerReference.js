var Modeler = require("../Modeler.js");
var className = 'ElementLedgerReference';

var ElementLedgerReference = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  LedgerReference: {
      type: "TypeLedgerReferenceType",
      wsdlDefinition: {
        name: "LedgerReference",
        type: "LedgerReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "A ledger maintains the day-to-day book of accounts for a company in which details of all transactions are recorded"
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
	  LedgerReference: {
      type: "TypeLedgerReferenceType",
      wsdlDefinition: {
        name: "LedgerReference",
        type: "LedgerReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "A ledger maintains the day-to-day book of accounts for a company in which details of all transactions are recorded"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementLedgerReference;
Modeler.register(ElementLedgerReference, "ElementLedgerReference");
