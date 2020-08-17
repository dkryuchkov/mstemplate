var Modeler = require("../Modeler.js");
var className = 'ElementPartyAccountIdentification';

var ElementPartyAccountIdentification = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  PartyAccountIdentification: {
      type: "TypePartyAccountIdentificationType",
      wsdlDefinition: {
        name: "PartyAccountIdentification",
        type: "PartyAccountIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Unique Identification of an account within  a Party"
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
	  PartyAccountIdentification: {
      type: "TypePartyAccountIdentificationType",
      wsdlDefinition: {
        name: "PartyAccountIdentification",
        type: "PartyAccountIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Unique Identification of an account within  a Party"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementPartyAccountIdentification;
Modeler.register(ElementPartyAccountIdentification, "ElementPartyAccountIdentification");
