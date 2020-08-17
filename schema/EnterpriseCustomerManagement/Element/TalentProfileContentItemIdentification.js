var Modeler = require("../Modeler.js");
var className = 'ElementTalentProfileContentItemIdentification';

var ElementTalentProfileContentItemIdentification = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  TalentProfileContentItemIdentification: {
      type: "TypeTalentProfileContentItemIdentificationType",
      wsdlDefinition: {
        name: "TalentProfileContentItemIdentification",
        type: "TalentProfileContentItemIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Unique identification of a Talent Profile Content Item object"
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
	  TalentProfileContentItemIdentification: {
      type: "TypeTalentProfileContentItemIdentificationType",
      wsdlDefinition: {
        name: "TalentProfileContentItemIdentification",
        type: "TalentProfileContentItemIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Unique identification of a Talent Profile Content Item object"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementTalentProfileContentItemIdentification;
Modeler.register(ElementTalentProfileContentItemIdentification, "ElementTalentProfileContentItemIdentification");
