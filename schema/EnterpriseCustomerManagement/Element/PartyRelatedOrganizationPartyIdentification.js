var Modeler = require("../Modeler.js");
var className = 'ElementPartyRelatedOrganizationPartyIdentification';

var ElementPartyRelatedOrganizationPartyIdentification = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  PartyRelatedOrganizationPartyIdentification: {
      type: "TypePartyRelatedOrganizationPartyIdentificationType",
      wsdlDefinition: {
        name: "PartyRelatedOrganizationPartyIdentification",
        type: "PartyRelatedOrganizationPartyIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Unique identification of a PartyRelatedParty which has a child PartyRelatedOrganization. It is used for pointing to an organization party which is related to a Party."
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
	  PartyRelatedOrganizationPartyIdentification: {
      type: "TypePartyRelatedOrganizationPartyIdentificationType",
      wsdlDefinition: {
        name: "PartyRelatedOrganizationPartyIdentification",
        type: "PartyRelatedOrganizationPartyIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Unique identification of a PartyRelatedParty which has a child PartyRelatedOrganization. It is used for pointing to an organization party which is related to a Party."
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementPartyRelatedOrganizationPartyIdentification;
Modeler.register(ElementPartyRelatedOrganizationPartyIdentification, "ElementPartyRelatedOrganizationPartyIdentification");
