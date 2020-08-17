var Modeler = require("../Modeler.js");
var className = 'TypeTrainingProgramReferenceType';

var TypeTrainingProgramReferenceType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  TrainingProgramIdentification: {
      type: "TypeTrainingProgramIdentificationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:TrainingProgramIdentification",
        type: "TrainingProgramIdentificationType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Custom: {
      type: "TypeCustomTrainingProgramReferenceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Custom",
        type: "corecomcust:CustomTrainingProgramReferenceType",
        attribute: false,
        ns: "WL5G3N2"
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
        minOccurs: "0",
        name: "WL5G3N2:TrainingProgramIdentification",
        type: "TrainingProgramIdentificationType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Custom: {
      type: "TypeCustomTrainingProgramReferenceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Custom",
        type: "corecomcust:CustomTrainingProgramReferenceType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeTrainingProgramReferenceType;
Modeler.register(TypeTrainingProgramReferenceType, "TypeTrainingProgramReferenceType");
