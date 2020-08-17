var Modeler = require("../Modeler.js");
var className = 'ElementTalentProfileTypeIdentification';

var ElementTalentProfileTypeIdentification = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  TalentProfileTypeIdentification: {
      type: "TypeTalentProfileTypeIdentificationType",
      wsdlDefinition: {
        name: "TalentProfileTypeIdentification",
        type: "TalentProfileTypeIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Unique identification of a Talent Profile Type object"
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
	  TalentProfileTypeIdentification: {
      type: "TypeTalentProfileTypeIdentificationType",
      wsdlDefinition: {
        name: "TalentProfileTypeIdentification",
        type: "TalentProfileTypeIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Unique identification of a Talent Profile Type object"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementTalentProfileTypeIdentification;
Modeler.register(ElementTalentProfileTypeIdentification, "ElementTalentProfileTypeIdentification");
