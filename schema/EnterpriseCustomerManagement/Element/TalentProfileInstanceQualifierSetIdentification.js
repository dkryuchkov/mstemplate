var Modeler = require("../Modeler.js");
var className = 'ElementTalentProfileInstanceQualifierSetIdentification';

var ElementTalentProfileInstanceQualifierSetIdentification = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  TalentProfileInstanceQualifierSetIdentification: {
      type: "TypeTalentProfileInstanceQualifierSetIdentificationType",
      wsdlDefinition: {
        name: "TalentProfileInstanceQualifierSetIdentification",
        type: "TalentProfileInstanceQualifierSetIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Unique Identification of a Talent Profile Instance Qualifier Set"
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
	  TalentProfileInstanceQualifierSetIdentification: {
      type: "TypeTalentProfileInstanceQualifierSetIdentificationType",
      wsdlDefinition: {
        name: "TalentProfileInstanceQualifierSetIdentification",
        type: "TalentProfileInstanceQualifierSetIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Unique Identification of a Talent Profile Instance Qualifier Set"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementTalentProfileInstanceQualifierSetIdentification;
Modeler.register(ElementTalentProfileInstanceQualifierSetIdentification, "ElementTalentProfileInstanceQualifierSetIdentification");
