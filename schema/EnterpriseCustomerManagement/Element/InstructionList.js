var Modeler = require("../Modeler.js");
var className = 'ElementInstructionList';

var ElementInstructionList = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  InstructionList: {
      type: "TypeInstructionListType",
      wsdlDefinition: {
        name: "InstructionList",
        type: "InstructionListType",
        "xsd:annotation": {
          "xsd:documentation": "Instruction List represents the concept of a list of instructions."
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
	  InstructionList: {
      type: "TypeInstructionListType",
      wsdlDefinition: {
        name: "InstructionList",
        type: "InstructionListType",
        "xsd:annotation": {
          "xsd:documentation": "Instruction List represents the concept of a list of instructions."
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementInstructionList;
Modeler.register(ElementInstructionList, "ElementInstructionList");
