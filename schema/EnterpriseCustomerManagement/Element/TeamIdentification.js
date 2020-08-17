var Modeler = require("../Modeler.js");
var className = 'ElementTeamIdentification';

var ElementTeamIdentification = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  TeamIdentification: {
      type: "TypeTeamIdentificationType",
      wsdlDefinition: {
        name: "TeamIdentification",
        type: "TeamIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Unique identification of a Team. Team is a group of persons or workers set up for a particular objective, e.g., a team of workers for a particular work order"
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
	  TeamIdentification: {
      type: "TypeTeamIdentificationType",
      wsdlDefinition: {
        name: "TeamIdentification",
        type: "TeamIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Unique identification of a Team. Team is a group of persons or workers set up for a particular objective, e.g., a team of workers for a particular work order"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementTeamIdentification;
Modeler.register(ElementTeamIdentification, "ElementTeamIdentification");
