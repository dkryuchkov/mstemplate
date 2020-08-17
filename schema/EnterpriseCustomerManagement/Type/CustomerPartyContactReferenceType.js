var Modeler = require("../Modeler.js");
var className = 'TypeCustomerPartyContactReferenceType';

var TypeCustomerPartyContactReferenceType = function(json, parentObj) {
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
    PartyContactIdentification: {
      type: "TypePartyContactIdentificationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:PartyContactIdentification",
        type: "PartyContactIdentificationType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Custom: {
      type: "TypeCustomCustomerPartyContactReferenceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Custom",
        type: "corecomcust:CustomCustomerPartyContactReferenceType",
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
    PartyContactIdentification: {
      type: "TypePartyContactIdentificationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:PartyContactIdentification",
        type: "PartyContactIdentificationType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Custom: {
      type: "TypeCustomCustomerPartyContactReferenceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Custom",
        type: "corecomcust:CustomCustomerPartyContactReferenceType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCustomerPartyContactReferenceType;
Modeler.register(TypeCustomerPartyContactReferenceType, "TypeCustomerPartyContactReferenceType");
