var Modeler = require("../Modeler.js");
var className = 'ElementTalentProfileInstanceQualifierReference';

var ElementTalentProfileInstanceQualifierReference = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  TalentProfileInstanceQualifierReference: {
      type: "TypeTalentProfileInstanceQualifierReferenceType",
      wsdlDefinition: {
        name: "TalentProfileInstanceQualifierReference",
        type: "TalentProfileInstanceQualifierReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Reference to an instance qualifier from the content catalog"
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
	  TalentProfileInstanceQualifierReference: {
      type: "TypeTalentProfileInstanceQualifierReferenceType",
      wsdlDefinition: {
        name: "TalentProfileInstanceQualifierReference",
        type: "TalentProfileInstanceQualifierReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Reference to an instance qualifier from the content catalog"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementTalentProfileInstanceQualifierReference;
Modeler.register(ElementTalentProfileInstanceQualifierReference, "ElementTalentProfileInstanceQualifierReference");
