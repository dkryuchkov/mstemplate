var Modeler = require("../Modeler.js");
var className = 'ElementTrainingProgramIdentification';

var ElementTrainingProgramIdentification = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  TrainingProgramIdentification: {
      type: "TypeTrainingProgramIdentificationType",
      wsdlDefinition: {
        name: "TrainingProgramIdentification",
        type: "TrainingProgramIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Unique identification of a job Traning Program object."
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
	  TrainingProgramIdentification: {
      type: "TypeTrainingProgramIdentificationType",
      wsdlDefinition: {
        name: "TrainingProgramIdentification",
        type: "TrainingProgramIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Unique identification of a job Traning Program object."
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementTrainingProgramIdentification;
Modeler.register(ElementTrainingProgramIdentification, "ElementTrainingProgramIdentification");
