var Modeler = require("../Modeler.js");
var className = 'ElementEducationalInstitutionReference';

var ElementEducationalInstitutionReference = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  EducationalInstitutionReference: {
      type: "TypeEducationalInstitutionReferenceType",
      wsdlDefinition: {
        name: "EducationalInstitutionReference",
        type: "EducationalInstitutionReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "An established organization or corporation, often of a public character, which is dedicated to teaching and learning"
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
	  EducationalInstitutionReference: {
      type: "TypeEducationalInstitutionReferenceType",
      wsdlDefinition: {
        name: "EducationalInstitutionReference",
        type: "EducationalInstitutionReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "An established organization or corporation, often of a public character, which is dedicated to teaching and learning"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementEducationalInstitutionReference;
Modeler.register(ElementEducationalInstitutionReference, "ElementEducationalInstitutionReference");
