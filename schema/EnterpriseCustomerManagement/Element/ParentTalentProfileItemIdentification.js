var Modeler = require("../Modeler.js");
var className = 'ElementParentTalentProfileItemIdentification';

var ElementParentTalentProfileItemIdentification = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  ParentTalentProfileItemIdentification: {
      type: "TypeTalentProfileItemIdentificationType",
      wsdlDefinition: {
        name: "ParentTalentProfileItemIdentification",
        type: "TalentProfileItemIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Unique identification of a Talent Profile Item which is a parent of another Talent Profile Item."
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
	  ParentTalentProfileItemIdentification: {
      type: "TypeTalentProfileItemIdentificationType",
      wsdlDefinition: {
        name: "ParentTalentProfileItemIdentification",
        type: "TalentProfileItemIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Unique identification of a Talent Profile Item which is a parent of another Talent Profile Item."
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementParentTalentProfileItemIdentification;
Modeler.register(ElementParentTalentProfileItemIdentification, "ElementParentTalentProfileItemIdentification");
