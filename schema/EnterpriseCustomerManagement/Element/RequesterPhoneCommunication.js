var Modeler = require("../Modeler.js");
var className = 'ElementRequesterPhoneCommunication';

var ElementRequesterPhoneCommunication = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  RequesterPhoneCommunication: {
      type: "TypePhoneCommunicationType",
      wsdlDefinition: {
        name: "RequesterPhoneCommunication",
        type: "PhoneCommunicationType",
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
	  RequesterPhoneCommunication: {
      type: "TypePhoneCommunicationType",
      wsdlDefinition: {
        name: "RequesterPhoneCommunication",
        type: "PhoneCommunicationType",
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementRequesterPhoneCommunication;
Modeler.register(ElementRequesterPhoneCommunication, "ElementRequesterPhoneCommunication");
