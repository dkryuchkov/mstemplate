var Modeler = require("../Modeler.js");
var className = 'ElementPartyContactIdentification';

var ElementPartyContactIdentification = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  PartyContactIdentification: {
      type: "TypePartyContactIdentificationType",
      wsdlDefinition: {
        name: "PartyContactIdentification",
        type: "PartyContactIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Unique Identification of a Contact of a Party"
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
	  PartyContactIdentification: {
      type: "TypePartyContactIdentificationType",
      wsdlDefinition: {
        name: "PartyContactIdentification",
        type: "PartyContactIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Unique Identification of a Contact of a Party"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementPartyContactIdentification;
Modeler.register(ElementPartyContactIdentification, "ElementPartyContactIdentification");
