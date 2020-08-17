var Modeler = require("../Modeler.js");
var className = 'ElementPartyRelatedParty';

var ElementPartyRelatedParty = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  PartyRelatedParty: {
      type: "TypePartyRelatedPartyType",
      wsdlDefinition: {
        name: "PartyRelatedParty",
        type: "PartyRelatedPartyType",
        "xsd:annotation": {
          "xsd:documentation": "This component allows for specification of one or more relationships between the containing party and another party (the inverse relationship will typically be specified in this party as well). The relationship can be contact, employer/employee, member (e.g., of a household, association), investment manager, guardian"
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
	  PartyRelatedParty: {
      type: "TypePartyRelatedPartyType",
      wsdlDefinition: {
        name: "PartyRelatedParty",
        type: "PartyRelatedPartyType",
        "xsd:annotation": {
          "xsd:documentation": "This component allows for specification of one or more relationships between the containing party and another party (the inverse relationship will typically be specified in this party as well). The relationship can be contact, employer/employee, member (e.g., of a household, association), investment manager, guardian"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementPartyRelatedParty;
Modeler.register(ElementPartyRelatedParty, "ElementPartyRelatedParty");
