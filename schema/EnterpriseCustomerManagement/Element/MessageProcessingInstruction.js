var Modeler = require("../Modeler.js");
var className = 'ElementMessageProcessingInstruction';

var ElementMessageProcessingInstruction = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  MessageProcessingInstruction: {
      type: "TypeMessageProcessingInstructionType",
      wsdlDefinition: {
        name: "MessageProcessingInstruction",
        type: "MessageProcessingInstructionType",
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
	  MessageProcessingInstruction: {
      type: "TypeMessageProcessingInstructionType",
      wsdlDefinition: {
        name: "MessageProcessingInstruction",
        type: "MessageProcessingInstructionType",
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementMessageProcessingInstruction;
Modeler.register(ElementMessageProcessingInstruction, "ElementMessageProcessingInstruction");
