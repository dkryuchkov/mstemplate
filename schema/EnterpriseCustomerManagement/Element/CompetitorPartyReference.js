var Modeler = require("../Modeler.js");
var className = 'ElementCompetitorPartyReference';

var ElementCompetitorPartyReference = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CompetitorPartyReference: {
      type: "TypeCompetitorPartyReferenceType",
      wsdlDefinition: {
        name: "CompetitorPartyReference",
        type: "CompetitorPartyReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Refers to the Competitor."
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
	  CompetitorPartyReference: {
      type: "TypeCompetitorPartyReferenceType",
      wsdlDefinition: {
        name: "CompetitorPartyReference",
        type: "CompetitorPartyReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Refers to the Competitor."
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementCompetitorPartyReference;
Modeler.register(ElementCompetitorPartyReference, "ElementCompetitorPartyReference");
