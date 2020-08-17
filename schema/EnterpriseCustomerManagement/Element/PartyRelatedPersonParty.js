var Modeler = require("../Modeler.js");
var className = 'ElementPartyRelatedPersonParty';

var ElementPartyRelatedPersonParty = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  PartyRelatedPersonParty: {
      type: "TypePartyRelatedPersonPartyType",
      wsdlDefinition: {
        name: "PartyRelatedPersonParty",
        type: "PartyRelatedPersonPartyType",
        "xsd:annotation": {
          "xsd:documentation": "This is a business reference component referring to a related person party and some important (denormalized) attributes."
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
	  PartyRelatedPersonParty: {
      type: "TypePartyRelatedPersonPartyType",
      wsdlDefinition: {
        name: "PartyRelatedPersonParty",
        type: "PartyRelatedPersonPartyType",
        "xsd:annotation": {
          "xsd:documentation": "This is a business reference component referring to a related person party and some important (denormalized) attributes."
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementPartyRelatedPersonParty;
Modeler.register(ElementPartyRelatedPersonParty, "ElementPartyRelatedPersonParty");
