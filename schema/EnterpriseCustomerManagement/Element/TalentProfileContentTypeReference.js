var Modeler = require("../Modeler.js");
var className = 'ElementTalentProfileContentTypeReference';

var ElementTalentProfileContentTypeReference = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  TalentProfileContentTypeReference: {
      type: "TypeTalentProfileContentTypeReferenceType",
      wsdlDefinition: {
        name: "TalentProfileContentTypeReference",
        type: "TalentProfileContentTypeReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Refer to a Talent Profile Content Type object (e.g. degrees, competencies, qualifications, or skills)  in the human resource area which defines the attributes which can be associated with either a person or a non-person (e.g. job code, role)"
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
	  TalentProfileContentTypeReference: {
      type: "TypeTalentProfileContentTypeReferenceType",
      wsdlDefinition: {
        name: "TalentProfileContentTypeReference",
        type: "TalentProfileContentTypeReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Refer to a Talent Profile Content Type object (e.g. degrees, competencies, qualifications, or skills)  in the human resource area which defines the attributes which can be associated with either a person or a non-person (e.g. job code, role)"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementTalentProfileContentTypeReference;
Modeler.register(ElementTalentProfileContentTypeReference, "ElementTalentProfileContentTypeReference");
