var Modeler = require("../Modeler.js");
var className = 'ElementStopPaymentInstruction';

var ElementStopPaymentInstruction = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  StopPaymentInstruction: {
      type: "TypeStopPaymentInstructionType",
      wsdlDefinition: {
        name: "StopPaymentInstruction",
        type: "StopPaymentInstructionType",
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
	  StopPaymentInstruction: {
      type: "TypeStopPaymentInstructionType",
      wsdlDefinition: {
        name: "StopPaymentInstruction",
        type: "StopPaymentInstructionType",
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementStopPaymentInstruction;
Modeler.register(ElementStopPaymentInstruction, "ElementStopPaymentInstruction");
