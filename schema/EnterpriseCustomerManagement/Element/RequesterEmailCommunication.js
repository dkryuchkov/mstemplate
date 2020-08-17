var Modeler = require("../Modeler.js");
var className = 'ElementRequesterEmailCommunication';

var ElementRequesterEmailCommunication = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  RequesterEmailCommunication: {
      type: "TypeEmailCommunicationType",
      wsdlDefinition: {
        name: "RequesterEmailCommunication",
        type: "EmailCommunicationType",
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
	  RequesterEmailCommunication: {
      type: "TypeEmailCommunicationType",
      wsdlDefinition: {
        name: "RequesterEmailCommunication",
        type: "EmailCommunicationType",
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementRequesterEmailCommunication;
Modeler.register(ElementRequesterEmailCommunication, "ElementRequesterEmailCommunication");
