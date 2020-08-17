var Modeler = require("../Modeler.js");
var className = 'ElementTalentProfileTypeReference';

var ElementTalentProfileTypeReference = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  TalentProfileTypeReference: {
      type: "TypeTalentProfileTypeReferenceType",
      wsdlDefinition: {
        name: "TalentProfileTypeReference",
        type: "TalentProfileTypeReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Refers to a Talent Profile Type object which defines the content structure, security and approvals for a Talent Profile"
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
	  TalentProfileTypeReference: {
      type: "TypeTalentProfileTypeReferenceType",
      wsdlDefinition: {
        name: "TalentProfileTypeReference",
        type: "TalentProfileTypeReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Refers to a Talent Profile Type object which defines the content structure, security and approvals for a Talent Profile"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementTalentProfileTypeReference;
Modeler.register(ElementTalentProfileTypeReference, "ElementTalentProfileTypeReference");
