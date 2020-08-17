var Modeler = require("../Modeler.js");
var className = 'ElementParentTalentProfileTypeSectionIdentification';

var ElementParentTalentProfileTypeSectionIdentification = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  ParentTalentProfileTypeSectionIdentification: {
      type: "TypeTalentProfileTypeSectionIdentificationType",
      wsdlDefinition: {
        name: "ParentTalentProfileTypeSectionIdentification",
        type: "TalentProfileTypeSectionIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Unique identification of a Talent Profile Type Section which is a parent of another Talent Profile Type Section"
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
	  ParentTalentProfileTypeSectionIdentification: {
      type: "TypeTalentProfileTypeSectionIdentificationType",
      wsdlDefinition: {
        name: "ParentTalentProfileTypeSectionIdentification",
        type: "TalentProfileTypeSectionIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Unique identification of a Talent Profile Type Section which is a parent of another Talent Profile Type Section"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementParentTalentProfileTypeSectionIdentification;
Modeler.register(ElementParentTalentProfileTypeSectionIdentification, "ElementParentTalentProfileTypeSectionIdentification");
