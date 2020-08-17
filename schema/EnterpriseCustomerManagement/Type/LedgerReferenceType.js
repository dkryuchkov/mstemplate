var Modeler = require("../Modeler.js");
var className = 'TypeLedgerReferenceType';

var TypeLedgerReferenceType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  LedgerIdentification: {
      type: "TypeLedgerIdentificationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:LedgerIdentification",
        type: "LedgerIdentificationType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Custom: {
      type: "TypeCustomLedgerReferenceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Custom",
        type: "corecomcust:CustomLedgerReferenceType",
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
	  LedgerIdentification: {
      type: "TypeLedgerIdentificationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:LedgerIdentification",
        type: "LedgerIdentificationType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Custom: {
      type: "TypeCustomLedgerReferenceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Custom",
        type: "corecomcust:CustomLedgerReferenceType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeLedgerReferenceType;
Modeler.register(TypeLedgerReferenceType, "TypeLedgerReferenceType");
