var Modeler = require("../Modeler.js");
var className = 'TypeCustomMessageProcessingInstructionType';

var TypeCustomMessageProcessingInstructionType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomMessageProcessingInstructionType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomMessageProcessingInstructionType",
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
	  CustomMessageProcessingInstructionType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomMessageProcessingInstructionType",
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCustomMessageProcessingInstructionType;
Modeler.register(TypeCustomMessageProcessingInstructionType, "TypeCustomMessageProcessingInstructionType");
