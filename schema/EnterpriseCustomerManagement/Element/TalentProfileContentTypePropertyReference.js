var Modeler = require("../Modeler.js");
var className = 'ElementTalentProfileContentTypePropertyReference';

var ElementTalentProfileContentTypePropertyReference = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  TalentProfileContentTypePropertyReference: {
      type: "TypeTalentProfileContentTypePropertyReferenceType",
      wsdlDefinition: {
        name: "TalentProfileContentTypePropertyReference",
        type: "TalentProfileContentTypePropertyReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Refer to a Talent Profile Content Type Property defined in a Talent Profile Content Type object."
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
	  TalentProfileContentTypePropertyReference: {
      type: "TypeTalentProfileContentTypePropertyReferenceType",
      wsdlDefinition: {
        name: "TalentProfileContentTypePropertyReference",
        type: "TalentProfileContentTypePropertyReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Refer to a Talent Profile Content Type Property defined in a Talent Profile Content Type object."
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementTalentProfileContentTypePropertyReference;
Modeler.register(ElementTalentProfileContentTypePropertyReference, "ElementTalentProfileContentTypePropertyReference");
