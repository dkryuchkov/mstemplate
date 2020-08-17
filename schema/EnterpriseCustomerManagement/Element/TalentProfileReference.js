var Modeler = require("../Modeler.js");
var className = 'ElementTalentProfileReference';

var ElementTalentProfileReference = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  TalentProfileReference: {
      type: "TypeTalentProfileReferenceType",
      wsdlDefinition: {
        name: "TalentProfileReference",
        type: "TalentProfileReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Refers to a Talent Profile object which defines the characteristics for either a person or a non-person. For a person it describes the characteristics of ultimate combination of the right innate characteristics (physical, intellectual, emotional), qualifications and competency. A Telent Profile consists of Talent Profile Items each of which is of a particular Talent Profile Content Item. A Talent Profile is of a particular Talent Profile Type."
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
	  TalentProfileReference: {
      type: "TypeTalentProfileReferenceType",
      wsdlDefinition: {
        name: "TalentProfileReference",
        type: "TalentProfileReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Refers to a Talent Profile object which defines the characteristics for either a person or a non-person. For a person it describes the characteristics of ultimate combination of the right innate characteristics (physical, intellectual, emotional), qualifications and competency. A Telent Profile consists of Talent Profile Items each of which is of a particular Talent Profile Content Item. A Talent Profile is of a particular Talent Profile Type."
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementTalentProfileReference;
Modeler.register(ElementTalentProfileReference, "ElementTalentProfileReference");
