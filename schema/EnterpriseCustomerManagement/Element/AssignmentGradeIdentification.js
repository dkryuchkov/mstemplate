var Modeler = require("../Modeler.js");
var className = 'ElementAssignmentGradeIdentification';

var ElementAssignmentGradeIdentification = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  AssignmentGradeIdentification: {
      type: "TypeAssignmentGradeIdentificationType",
      wsdlDefinition: {
        name: "AssignmentGradeIdentification",
        type: "AssignmentGradeIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Unique identification of an Assignment Grade object"
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
	  AssignmentGradeIdentification: {
      type: "TypeAssignmentGradeIdentificationType",
      wsdlDefinition: {
        name: "AssignmentGradeIdentification",
        type: "AssignmentGradeIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Unique identification of an Assignment Grade object"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementAssignmentGradeIdentification;
Modeler.register(ElementAssignmentGradeIdentification, "ElementAssignmentGradeIdentification");
