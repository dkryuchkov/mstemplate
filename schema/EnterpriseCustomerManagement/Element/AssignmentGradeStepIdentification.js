var Modeler = require("../Modeler.js");
var className = 'ElementAssignmentGradeStepIdentification';

var ElementAssignmentGradeStepIdentification = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  AssignmentGradeStepIdentification: {
      type: "TypeAssignmentGradeStepIdentificationType",
      wsdlDefinition: {
        name: "AssignmentGradeStepIdentification",
        type: "AssignmentGradeStepIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Unique identification of an Assignment Grade Step component within the Assignment Grade object"
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
	  AssignmentGradeStepIdentification: {
      type: "TypeAssignmentGradeStepIdentificationType",
      wsdlDefinition: {
        name: "AssignmentGradeStepIdentification",
        type: "AssignmentGradeStepIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Unique identification of an Assignment Grade Step component within the Assignment Grade object"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementAssignmentGradeStepIdentification;
Modeler.register(ElementAssignmentGradeStepIdentification, "ElementAssignmentGradeStepIdentification");
