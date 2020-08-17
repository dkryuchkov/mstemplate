var Modeler = require("../Modeler.js");
var className = 'ElementPartyRelationship';

var ElementPartyRelationship = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  PartyRelationship: {
      type: "TypePartyRelationshipType",
      wsdlDefinition: {
        name: "PartyRelationship",
        type: "PartyRelationshipType",
        "xsd:annotation": {
          "xsd:documentation": "Capture relationship detail between two parties. The preference is assumed to apply across related parties with the same relationship code."
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
	  PartyRelationship: {
      type: "TypePartyRelationshipType",
      wsdlDefinition: {
        name: "PartyRelationship",
        type: "PartyRelationshipType",
        "xsd:annotation": {
          "xsd:documentation": "Capture relationship detail between two parties. The preference is assumed to apply across related parties with the same relationship code."
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementPartyRelationship;
Modeler.register(ElementPartyRelationship, "ElementPartyRelationship");
