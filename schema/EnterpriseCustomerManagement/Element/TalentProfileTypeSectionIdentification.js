var Modeler = require("../Modeler.js");
var className = 'ElementTalentProfileTypeSectionIdentification';

var ElementTalentProfileTypeSectionIdentification = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  TalentProfileTypeSectionIdentification: {
      type: "TypeTalentProfileTypeSectionIdentificationType",
      wsdlDefinition: {
        name: "TalentProfileTypeSectionIdentification",
        type: "TalentProfileTypeSectionIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Unique identification of a Talent Profile Type Section in a Talent Profile Type object"
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
	  TalentProfileTypeSectionIdentification: {
      type: "TypeTalentProfileTypeSectionIdentificationType",
      wsdlDefinition: {
        name: "TalentProfileTypeSectionIdentification",
        type: "TalentProfileTypeSectionIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Unique identification of a Talent Profile Type Section in a Talent Profile Type object"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementTalentProfileTypeSectionIdentification;
Modeler.register(ElementTalentProfileTypeSectionIdentification, "ElementTalentProfileTypeSectionIdentification");
