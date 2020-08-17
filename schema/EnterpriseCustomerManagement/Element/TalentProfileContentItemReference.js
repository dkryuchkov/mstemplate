var Modeler = require("../Modeler.js");
var className = 'ElementTalentProfileContentItemReference';

var ElementTalentProfileContentItemReference = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  TalentProfileContentItemReference: {
      type: "TypeTalentProfileContentItemReferenceType",
      wsdlDefinition: {
        name: "TalentProfileContentItemReference",
        type: "TalentProfileContentItemReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Refer to a Talent Profile Content Item object (which is of a particular Talent Profile Content Type). It defines the attributes for concepts like a bachelor degree (which is of the degree content type), a psychological competency (which is of the competency content type)."
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
	  TalentProfileContentItemReference: {
      type: "TypeTalentProfileContentItemReferenceType",
      wsdlDefinition: {
        name: "TalentProfileContentItemReference",
        type: "TalentProfileContentItemReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Refer to a Talent Profile Content Item object (which is of a particular Talent Profile Content Type). It defines the attributes for concepts like a bachelor degree (which is of the degree content type), a psychological competency (which is of the competency content type)."
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementTalentProfileContentItemReference;
Modeler.register(ElementTalentProfileContentItemReference, "ElementTalentProfileContentItemReference");
