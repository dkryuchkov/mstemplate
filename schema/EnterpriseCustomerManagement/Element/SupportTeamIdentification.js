var Modeler = require("../Modeler.js");
var className = 'ElementSupportTeamIdentification';

var ElementSupportTeamIdentification = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  SupportTeamIdentification: {
      type: "TypeSupportTeamIdentificationType",
      wsdlDefinition: {
        name: "SupportTeamIdentification",
        type: "SupportTeamIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Unique identification of a Support Team"
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
	  SupportTeamIdentification: {
      type: "TypeSupportTeamIdentificationType",
      wsdlDefinition: {
        name: "SupportTeamIdentification",
        type: "SupportTeamIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Unique identification of a Support Team"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementSupportTeamIdentification;
Modeler.register(ElementSupportTeamIdentification, "ElementSupportTeamIdentification");
