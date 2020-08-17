var Modeler = require("../Modeler.js");
var className = 'ElementInstructionListLine';

var ElementInstructionListLine = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  InstructionListLine: {
      type: "TypeInstructionListLineType",
      wsdlDefinition: {
        name: "InstructionListLine",
        type: "InstructionListLineType",
        "xsd:annotation": {
          "xsd:documentation": "Instruction List Line represents the detail of the concept of a list of instructions."
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
	  InstructionListLine: {
      type: "TypeInstructionListLineType",
      wsdlDefinition: {
        name: "InstructionListLine",
        type: "InstructionListLineType",
        "xsd:annotation": {
          "xsd:documentation": "Instruction List Line represents the detail of the concept of a list of instructions."
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementInstructionListLine;
Modeler.register(ElementInstructionListLine, "ElementInstructionListLine");
