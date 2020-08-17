var Modeler = require("../Modeler.js");
var className = 'ElementAccountingEntryReference';

var ElementAccountingEntryReference = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  AccountingEntryReference: {
      type: "TypeAccountingEntryReferenceType",
      wsdlDefinition: {
        name: "AccountingEntryReference",
        type: "AccountingEntryReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Reference to a Bank branch. A branch of a bank is a retail location that provides banking services"
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
	  AccountingEntryReference: {
      type: "TypeAccountingEntryReferenceType",
      wsdlDefinition: {
        name: "AccountingEntryReference",
        type: "AccountingEntryReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Reference to a Bank branch. A branch of a bank is a retail location that provides banking services"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementAccountingEntryReference;
Modeler.register(ElementAccountingEntryReference, "ElementAccountingEntryReference");
