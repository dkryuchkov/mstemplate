var Modeler = require("../Modeler.js");
var className = 'ElementTalentProfileContentTypePropertyIdentification';

var ElementTalentProfileContentTypePropertyIdentification = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  TalentProfileContentTypePropertyIdentification: {
      type: "TypeTalentProfileContentTypePropertyIdentificationType",
      wsdlDefinition: {
        name: "TalentProfileContentTypePropertyIdentification",
        type: "TalentProfileContentTypePropertyIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Unique identification of a Talent Profile Content Type Property in the Talent Profile Content Type object"
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
	  TalentProfileContentTypePropertyIdentification: {
      type: "TypeTalentProfileContentTypePropertyIdentificationType",
      wsdlDefinition: {
        name: "TalentProfileContentTypePropertyIdentification",
        type: "TalentProfileContentTypePropertyIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Unique identification of a Talent Profile Content Type Property in the Talent Profile Content Type object"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementTalentProfileContentTypePropertyIdentification;
Modeler.register(ElementTalentProfileContentTypePropertyIdentification, "ElementTalentProfileContentTypePropertyIdentification");
