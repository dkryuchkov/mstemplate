var Modeler = require("../Modeler.js");
var className = 'ElementPartyIdentification';

var ElementPartyIdentification = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  PartyIdentification: {
      type: "TypePartyIdentificationType",
      wsdlDefinition: {
        name: "PartyIdentification",
        type: "PartyIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Unique Identification of a Party"
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
	  PartyIdentification: {
      type: "TypePartyIdentificationType",
      wsdlDefinition: {
        name: "PartyIdentification",
        type: "PartyIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Unique Identification of a Party"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementPartyIdentification;
Modeler.register(ElementPartyIdentification, "ElementPartyIdentification");
