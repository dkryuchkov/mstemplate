var Modeler = require("../Modeler.js");
var className = 'ElementTrainingProgramReference';

var ElementTrainingProgramReference = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  TrainingProgramReference: {
      type: "TypeTrainingProgramReferenceType",
      wsdlDefinition: {
        name: "TrainingProgramReference",
        type: "TrainingProgramReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Reference to a job Training Program."
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
	  TrainingProgramReference: {
      type: "TypeTrainingProgramReferenceType",
      wsdlDefinition: {
        name: "TrainingProgramReference",
        type: "TrainingProgramReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Reference to a job Training Program."
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementTrainingProgramReference;
Modeler.register(ElementTrainingProgramReference, "ElementTrainingProgramReference");
