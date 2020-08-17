var Modeler = require("../Modeler.js");
var className = 'ElementTalentProfileItemIdentification';

var ElementTalentProfileItemIdentification = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  TalentProfileItemIdentification: {
      type: "TypeTalentProfileItemIdentificationType",
      wsdlDefinition: {
        name: "TalentProfileItemIdentification",
        type: "TalentProfileItemIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Unique identification of a Talent Profile Item in a Talent Profile object"
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
	  TalentProfileItemIdentification: {
      type: "TypeTalentProfileItemIdentificationType",
      wsdlDefinition: {
        name: "TalentProfileItemIdentification",
        type: "TalentProfileItemIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Unique identification of a Talent Profile Item in a Talent Profile object"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementTalentProfileItemIdentification;
Modeler.register(ElementTalentProfileItemIdentification, "ElementTalentProfileItemIdentification");
