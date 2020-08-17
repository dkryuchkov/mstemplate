var Modeler = require("../Modeler.js");
var className = 'ElementTalentProfileContentTypeIdentification';

var ElementTalentProfileContentTypeIdentification = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  TalentProfileContentTypeIdentification: {
      type: "TypeTalentProfileContentTypeIdentificationType",
      wsdlDefinition: {
        name: "TalentProfileContentTypeIdentification",
        type: "TalentProfileContentTypeIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Unique identification of a Talent Profile Content Type object"
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
	  TalentProfileContentTypeIdentification: {
      type: "TypeTalentProfileContentTypeIdentificationType",
      wsdlDefinition: {
        name: "TalentProfileContentTypeIdentification",
        type: "TalentProfileContentTypeIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Unique identification of a Talent Profile Content Type object"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementTalentProfileContentTypeIdentification;
Modeler.register(ElementTalentProfileContentTypeIdentification, "ElementTalentProfileContentTypeIdentification");
