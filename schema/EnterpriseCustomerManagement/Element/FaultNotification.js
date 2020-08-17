var Modeler = require("../Modeler.js");
var className = 'ElementFaultNotification';

var ElementFaultNotification = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  FaultNotification: {
      type: "TypeFaultNotificationType",
      wsdlDefinition: {
        name: "FaultNotification",
        type: "FaultNotificationType",
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
	  FaultNotification: {
      type: "TypeFaultNotificationType",
      wsdlDefinition: {
        name: "FaultNotification",
        type: "FaultNotificationType",
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementFaultNotification;
Modeler.register(ElementFaultNotification, "ElementFaultNotification");
