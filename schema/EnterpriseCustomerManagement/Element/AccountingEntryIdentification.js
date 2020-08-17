var Modeler = require("../Modeler.js");
var className = 'ElementAccountingEntryIdentification';

var ElementAccountingEntryIdentification = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  AccountingEntryIdentification: {
      type: "TypeAccountingEntryIdentificationType",
      wsdlDefinition: {
        name: "AccountingEntryIdentification",
        type: "AccountingEntryIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Unique Identification of an accounting entry"
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
	  AccountingEntryIdentification: {
      type: "TypeAccountingEntryIdentificationType",
      wsdlDefinition: {
        name: "AccountingEntryIdentification",
        type: "AccountingEntryIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Unique Identification of an accounting entry"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementAccountingEntryIdentification;
Modeler.register(ElementAccountingEntryIdentification, "ElementAccountingEntryIdentification");
