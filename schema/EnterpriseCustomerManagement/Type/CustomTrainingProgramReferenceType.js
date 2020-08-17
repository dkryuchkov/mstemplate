var Modeler = require("../Modeler.js");
var className = 'TypeCustomTrainingProgramReferenceType';

var TypeCustomTrainingProgramReferenceType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomTrainingProgramReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomTrainingProgramReferenceType",
        attribute: false,
        type: "xsd:string"
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
	  CustomTrainingProgramReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomTrainingProgramReferenceType",
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCustomTrainingProgramReferenceType;
Modeler.register(TypeCustomTrainingProgramReferenceType, "TypeCustomTrainingProgramReferenceType");
