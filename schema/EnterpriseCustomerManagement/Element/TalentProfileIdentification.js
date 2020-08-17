var Modeler = require("../Modeler.js");
var className = 'ElementTalentProfileIdentification';

var ElementTalentProfileIdentification = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  TalentProfileIdentification: {
      type: "TypeTalentProfileIdentificationType",
      wsdlDefinition: {
        name: "TalentProfileIdentification",
        type: "TalentProfileIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Unique identification of a Talent Profile object"
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
	  TalentProfileIdentification: {
      type: "TypeTalentProfileIdentificationType",
      wsdlDefinition: {
        name: "TalentProfileIdentification",
        type: "TalentProfileIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Unique identification of a Talent Profile object"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementTalentProfileIdentification;
Modeler.register(ElementTalentProfileIdentification, "ElementTalentProfileIdentification");
