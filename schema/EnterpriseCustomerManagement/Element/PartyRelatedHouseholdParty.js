var Modeler = require("../Modeler.js");
var className = 'ElementPartyRelatedHouseholdParty';

var ElementPartyRelatedHouseholdParty = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  PartyRelatedHouseholdParty: {
      type: "TypePartyRelatedHouseholdPartyType",
      wsdlDefinition: {
        name: "PartyRelatedHouseholdParty",
        type: "PartyRelatedHouseholdPartyType",
        "xsd:annotation": {
          "xsd:documentation": "This is a business reference component referring to a related household party and some important (denormalized) attributes."
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
	  PartyRelatedHouseholdParty: {
      type: "TypePartyRelatedHouseholdPartyType",
      wsdlDefinition: {
        name: "PartyRelatedHouseholdParty",
        type: "PartyRelatedHouseholdPartyType",
        "xsd:annotation": {
          "xsd:documentation": "This is a business reference component referring to a related household party and some important (denormalized) attributes."
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementPartyRelatedHouseholdParty;
Modeler.register(ElementPartyRelatedHouseholdParty, "ElementPartyRelatedHouseholdParty");
