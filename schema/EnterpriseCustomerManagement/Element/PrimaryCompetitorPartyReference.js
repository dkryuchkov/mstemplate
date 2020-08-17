var Modeler = require("../Modeler.js");
var className = 'ElementPrimaryCompetitorPartyReference';

var ElementPrimaryCompetitorPartyReference = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  PrimaryCompetitorPartyReference: {
      type: "TypeCompetitorPartyReferenceType",
      wsdlDefinition: {
        name: "PrimaryCompetitorPartyReference",
        type: "CompetitorPartyReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Refers to the Primary Competitor."
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
	  PrimaryCompetitorPartyReference: {
      type: "TypeCompetitorPartyReferenceType",
      wsdlDefinition: {
        name: "PrimaryCompetitorPartyReference",
        type: "CompetitorPartyReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Refers to the Primary Competitor."
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementPrimaryCompetitorPartyReference;
Modeler.register(ElementPrimaryCompetitorPartyReference, "ElementPrimaryCompetitorPartyReference");
