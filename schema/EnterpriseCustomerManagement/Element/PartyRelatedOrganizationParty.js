var Modeler = require("../Modeler.js");
var className = 'ElementPartyRelatedOrganizationParty';

var ElementPartyRelatedOrganizationParty = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  PartyRelatedOrganizationParty: {
      type: "TypePartyRelatedOrganizationPartyType",
      wsdlDefinition: {
        name: "PartyRelatedOrganizationParty",
        type: "PartyRelatedOrganizationPartyType",
        "xsd:annotation": {
          "xsd:documentation": "This is a business reference component referring to a related organization party and some important (denormalized) attributes."
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
	  PartyRelatedOrganizationParty: {
      type: "TypePartyRelatedOrganizationPartyType",
      wsdlDefinition: {
        name: "PartyRelatedOrganizationParty",
        type: "PartyRelatedOrganizationPartyType",
        "xsd:annotation": {
          "xsd:documentation": "This is a business reference component referring to a related organization party and some important (denormalized) attributes."
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementPartyRelatedOrganizationParty;
Modeler.register(ElementPartyRelatedOrganizationParty, "ElementPartyRelatedOrganizationParty");
