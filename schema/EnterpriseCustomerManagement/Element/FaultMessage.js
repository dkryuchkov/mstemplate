var Modeler = require("../Modeler.js");
var className = 'ElementFaultMessage';

var ElementFaultMessage = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  FaultMessage: {
      type: "TypeFaultMessageType",
      wsdlDefinition: {
        name: "FaultMessage",
        type: "FaultMessageType",
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
	  FaultMessage: {
      type: "TypeFaultMessageType",
      wsdlDefinition: {
        name: "FaultMessage",
        type: "FaultMessageType",
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementFaultMessage;
Modeler.register(ElementFaultMessage, "ElementFaultMessage");
