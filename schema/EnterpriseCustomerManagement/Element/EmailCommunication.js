var Modeler = require("../Modeler.js");
var className = 'ElementEmailCommunication';

var ElementEmailCommunication = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  EmailCommunication: {
      type: "TypeEmailCommunicationType",
      wsdlDefinition: {
        name: "EmailCommunication",
        type: "EmailCommunicationType",
        "xsd:annotation": {
          "xsd:documentation": "Details about the email address of an  organization or person, including information about how that email address is used"
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
	  EmailCommunication: {
      type: "TypeEmailCommunicationType",
      wsdlDefinition: {
        name: "EmailCommunication",
        type: "EmailCommunicationType",
        "xsd:annotation": {
          "xsd:documentation": "Details about the email address of an  organization or person, including information about how that email address is used"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementEmailCommunication;
Modeler.register(ElementEmailCommunication, "ElementEmailCommunication");
