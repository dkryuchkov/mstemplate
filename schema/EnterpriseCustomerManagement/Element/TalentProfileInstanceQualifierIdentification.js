var Modeler = require("../Modeler.js");
var className = 'ElementTalentProfileInstanceQualifierIdentification';

var ElementTalentProfileInstanceQualifierIdentification = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  TalentProfileInstanceQualifierIdentification: {
      type: "TypeTalentProfileInstanceQualifierIdentificationType",
      wsdlDefinition: {
        name: "TalentProfileInstanceQualifierIdentification",
        type: "TalentProfileInstanceQualifierIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Unique Identification of a Talent Profile Instance Qualifier"
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
	  TalentProfileInstanceQualifierIdentification: {
      type: "TypeTalentProfileInstanceQualifierIdentificationType",
      wsdlDefinition: {
        name: "TalentProfileInstanceQualifierIdentification",
        type: "TalentProfileInstanceQualifierIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Unique Identification of a Talent Profile Instance Qualifier"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementTalentProfileInstanceQualifierIdentification;
Modeler.register(ElementTalentProfileInstanceQualifierIdentification, "ElementTalentProfileInstanceQualifierIdentification");
