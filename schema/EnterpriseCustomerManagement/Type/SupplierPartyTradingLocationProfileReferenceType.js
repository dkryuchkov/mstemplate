var Modeler = require("../Modeler.js");
var className = 'TypeSupplierPartyTradingLocationProfileReferenceType';

var TypeSupplierPartyTradingLocationProfileReferenceType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  PartyIdentification: {
      type: "TypePartyIdentificationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:PartyIdentification",
        type: "PartyIdentificationType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    SupplierPartyTradingLocationProfileIdentification: {
      type: "TypeSupplierPartyTradingLocationProfileIdentificationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:SupplierPartyTradingLocationProfileIdentification",
        type: "SupplierPartyTradingLocationProfileIdentificationType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Custom: {
      type: "TypeCustomSupplierPartyTradingLocationProfileReferenceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Custom",
        type: "corecomcust:CustomSupplierPartyTradingLocationProfileReferenceType",
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
	  PartyIdentification: {
      type: "TypePartyIdentificationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:PartyIdentification",
        type: "PartyIdentificationType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    SupplierPartyTradingLocationProfileIdentification: {
      type: "TypeSupplierPartyTradingLocationProfileIdentificationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:SupplierPartyTradingLocationProfileIdentification",
        type: "SupplierPartyTradingLocationProfileIdentificationType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Custom: {
      type: "TypeCustomSupplierPartyTradingLocationProfileReferenceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Custom",
        type: "corecomcust:CustomSupplierPartyTradingLocationProfileReferenceType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeSupplierPartyTradingLocationProfileReferenceType;
Modeler.register(TypeSupplierPartyTradingLocationProfileReferenceType, "TypeSupplierPartyTradingLocationProfileReferenceType");
