var Modeler = require("../Modeler.js");
var className = 'ElementTalentProfileInstanceQualifierSetReference';

var ElementTalentProfileInstanceQualifierSetReference = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  TalentProfileInstanceQualifierSetReference: {
      type: "TypeTalentProfileInstanceQualifierSetReferenceType",
      wsdlDefinition: {
        name: "TalentProfileInstanceQualifierSetReference",
        type: "TalentProfileInstanceQualifierSetReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Reference to a Talent Profile Instance Qualifier Set object"
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
	  TalentProfileInstanceQualifierSetReference: {
      type: "TypeTalentProfileInstanceQualifierSetReferenceType",
      wsdlDefinition: {
        name: "TalentProfileInstanceQualifierSetReference",
        type: "TalentProfileInstanceQualifierSetReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Reference to a Talent Profile Instance Qualifier Set object"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementTalentProfileInstanceQualifierSetReference;
Modeler.register(ElementTalentProfileInstanceQualifierSetReference, "ElementTalentProfileInstanceQualifierSetReference");
