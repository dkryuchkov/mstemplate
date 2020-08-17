var Modeler = require("../Modeler.js");
var className = 'TypePartyAccountReferenceType';

var TypePartyAccountReferenceType = function(json, parentObj) {
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
    PartyAccountIdentification: {
      type: "TypePartyAccountIdentificationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:PartyAccountIdentification",
        type: "PartyAccountIdentificationType",
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
    PartyAccountIdentification: {
      type: "TypePartyAccountIdentificationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:PartyAccountIdentification",
        type: "PartyAccountIdentificationType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypePartyAccountReferenceType;
Modeler.register(TypePartyAccountReferenceType, "TypePartyAccountReferenceType");
