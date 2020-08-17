var Modeler = require("../Modeler.js");
var className = 'ElementSourceTalentProfileReference';

var ElementSourceTalentProfileReference = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  SourceTalentProfileReference: {
      type: "TypeTalentProfileReferenceType",
      wsdlDefinition: {
        name: "SourceTalentProfileReference",
        type: "TalentProfileReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Refers to  the Talent Profile from which the Talent Profile Item is syndicated (i.e. copied)"
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
	  SourceTalentProfileReference: {
      type: "TypeTalentProfileReferenceType",
      wsdlDefinition: {
        name: "SourceTalentProfileReference",
        type: "TalentProfileReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Refers to  the Talent Profile from which the Talent Profile Item is syndicated (i.e. copied)"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementSourceTalentProfileReference;
Modeler.register(ElementSourceTalentProfileReference, "ElementSourceTalentProfileReference");
