var Modeler = require("../Modeler.js");
var className = 'ElementRequesterFaxCommunication';

var ElementRequesterFaxCommunication = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  RequesterFaxCommunication: {
      type: "TypeFaxCommunicationType",
      wsdlDefinition: {
        name: "RequesterFaxCommunication",
        type: "FaxCommunicationType",
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
	  RequesterFaxCommunication: {
      type: "TypeFaxCommunicationType",
      wsdlDefinition: {
        name: "RequesterFaxCommunication",
        type: "FaxCommunicationType",
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementRequesterFaxCommunication;
Modeler.register(ElementRequesterFaxCommunication, "ElementRequesterFaxCommunication");
