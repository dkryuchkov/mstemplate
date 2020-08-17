var Modeler = require("../Modeler.js");
var className = 'TypePartyRelatedPartyType';

var TypePartyRelatedPartyType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  Identification: {
      type: "TypeIdentificationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Identification",
        type: "IdentificationType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    PartyRelationship: {
      type: "TypePartyRelationshipType",
      wsdlDefinition: {
        maxOccurs: "unbounded",
        minOccurs: "0",
        name: "WL5G3N2:PartyRelationship",
        type: "PartyRelationshipType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    },
    Custom: {
      type: "TypeCustomPartyRelatedPartyType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Custom",
        type: "corecomcust:CustomPartyRelatedPartyType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    PartyRelatedPersonParty: {
      type: "TypePartyRelatedPersonPartyType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:PartyRelatedPersonParty",
        type: "PartyRelatedPersonPartyType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    PartyRelatedOrganizationParty: {
      type: "TypePartyRelatedOrganizationPartyType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:PartyRelatedOrganizationParty",
        type: "PartyRelatedOrganizationPartyType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    PartyRelatedHouseholdParty: {
      type: "TypePartyRelatedHouseholdPartyType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:PartyRelatedHouseholdParty",
        type: "PartyRelatedHouseholdPartyType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    actionCode: {
      type: "TypeActionCodeType",
      wsdlDefinition: {
        name: "actionCode",
        type: "ActionCodeType",
        attribute: true
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
	  Identification: {
      type: "TypeIdentificationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Identification",
        type: "IdentificationType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    PartyRelationship: {
      type: "TypePartyRelationshipType",
      wsdlDefinition: {
        maxOccurs: "unbounded",
        minOccurs: "0",
        name: "WL5G3N2:PartyRelationship",
        type: "PartyRelationshipType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    },
    Custom: {
      type: "TypeCustomPartyRelatedPartyType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Custom",
        type: "corecomcust:CustomPartyRelatedPartyType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    PartyRelatedPersonParty: {
      type: "TypePartyRelatedPersonPartyType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:PartyRelatedPersonParty",
        type: "PartyRelatedPersonPartyType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    PartyRelatedOrganizationParty: {
      type: "TypePartyRelatedOrganizationPartyType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:PartyRelatedOrganizationParty",
        type: "PartyRelatedOrganizationPartyType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    PartyRelatedHouseholdParty: {
      type: "TypePartyRelatedHouseholdPartyType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:PartyRelatedHouseholdParty",
        type: "PartyRelatedHouseholdPartyType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    actionCode: {
      type: "TypeActionCodeType",
      wsdlDefinition: {
        name: "actionCode",
        type: "ActionCodeType",
        attribute: true
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypePartyRelatedPartyType;
Modeler.register(TypePartyRelatedPartyType, "TypePartyRelatedPartyType");
