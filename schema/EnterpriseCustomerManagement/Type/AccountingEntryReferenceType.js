var Modeler = require("../Modeler.js");
var className = 'TypeAccountingEntryReferenceType';

var TypeAccountingEntryReferenceType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  AccountingEntryIdentification: {
      type: "TypeAccountingEntryIdentificationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:AccountingEntryIdentification",
        type: "AccountingEntryIdentificationType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Description: {
      type: "TypeTextType",
      wsdlDefinition: {
        maxOccurs: "unbounded",
        minOccurs: "0",
        name: "WL5G3N2:Description",
        type: "TextType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    },
    Custom: {
      type: "TypeCustomAccountingEntryReferenceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Custom",
        type: "corecomcust:CustomAccountingEntryReferenceType",
        attribute: false,
        ns: "WL5G3N2"
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
        minOccurs: "0",
        name: "WL5G3N2:AccountingEntryIdentification",
        type: "AccountingEntryIdentificationType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Description: {
      type: "TypeTextType",
      wsdlDefinition: {
        maxOccurs: "unbounded",
        minOccurs: "0",
        name: "WL5G3N2:Description",
        type: "TextType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    },
    Custom: {
      type: "TypeCustomAccountingEntryReferenceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Custom",
        type: "corecomcust:CustomAccountingEntryReferenceType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeAccountingEntryReferenceType;
Modeler.register(TypeAccountingEntryReferenceType, "TypeAccountingEntryReferenceType");
