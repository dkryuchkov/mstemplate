var Modeler = require("../Modeler.js");
var className = 'ElementPrimaryLedgerReference';

var ElementPrimaryLedgerReference = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  PrimaryLedgerReference: {
      type: "TypeLedgerReferenceType",
      wsdlDefinition: {
        name: "PrimaryLedgerReference",
        type: "LedgerReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Reference to the primary ledger."
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
	  PrimaryLedgerReference: {
      type: "TypeLedgerReferenceType",
      wsdlDefinition: {
        name: "PrimaryLedgerReference",
        type: "LedgerReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Reference to the primary ledger."
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementPrimaryLedgerReference;
Modeler.register(ElementPrimaryLedgerReference, "ElementPrimaryLedgerReference");
