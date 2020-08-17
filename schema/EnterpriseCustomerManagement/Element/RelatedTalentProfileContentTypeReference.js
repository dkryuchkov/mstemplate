var Modeler = require("../Modeler.js");
var className = 'ElementRelatedTalentProfileContentTypeReference';

var ElementRelatedTalentProfileContentTypeReference = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  RelatedTalentProfileContentTypeReference: {
      type: "TypeTalentProfileContentTypeReferenceType",
      wsdlDefinition: {
        name: "RelatedTalentProfileContentTypeReference",
        type: "TalentProfileContentTypeReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Refer to a Talent Profile related to the containing object/component"
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
	  RelatedTalentProfileContentTypeReference: {
      type: "TypeTalentProfileContentTypeReferenceType",
      wsdlDefinition: {
        name: "RelatedTalentProfileContentTypeReference",
        type: "TalentProfileContentTypeReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Refer to a Talent Profile related to the containing object/component"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementRelatedTalentProfileContentTypeReference;
Modeler.register(ElementRelatedTalentProfileContentTypeReference, "ElementRelatedTalentProfileContentTypeReference");
