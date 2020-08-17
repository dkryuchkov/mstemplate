var Modeler = require("../Modeler.js");
var className = 'ElementSender';

var ElementSender = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  Sender: {
      type: "TypeSenderType",
      wsdlDefinition: {
        name: "Sender",
        type: "SenderType",
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
	  Sender: {
      type: "TypeSenderType",
      wsdlDefinition: {
        name: "Sender",
        type: "SenderType",
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementSender;
Modeler.register(ElementSender, "ElementSender");
