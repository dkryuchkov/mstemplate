var Modeler = require("../Modeler.js");
var className = 'ElementTeamReference';

var ElementTeamReference = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  TeamReference: {
      type: "TypeTeamReferenceType",
      wsdlDefinition: {
        name: "TeamReference",
        type: "TeamReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Refer to a Team. Team is a group of persons or workers set up for a particular objective, e.g., a team of workers for a particular work order"
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
	  TeamReference: {
      type: "TypeTeamReferenceType",
      wsdlDefinition: {
        name: "TeamReference",
        type: "TeamReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Refer to a Team. Team is a group of persons or workers set up for a particular objective, e.g., a team of workers for a particular work order"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementTeamReference;
Modeler.register(ElementTeamReference, "ElementTeamReference");
