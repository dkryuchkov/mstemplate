var Modeler = require("../Modeler.js");
var className = 'ElementPrivacyNoticeCommunication';

var ElementPrivacyNoticeCommunication = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  PrivacyNoticeCommunication: {
      type: "TypePrivacyNoticeCommunicationType",
      wsdlDefinition: {
        name: "PrivacyNoticeCommunication",
        type: "PrivacyNoticeCommunicationType",
        "xsd:annotation": {
          "xsd:documentation": "Setting related to annual privacy notice"
        },
        ns: "WL5G3N1",
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
	  PrivacyNoticeCommunication: {
      type: "TypePrivacyNoticeCommunicationType",
      wsdlDefinition: {
        name: "PrivacyNoticeCommunication",
        type: "PrivacyNoticeCommunicationType",
        "xsd:annotation": {
          "xsd:documentation": "Setting related to annual privacy notice"
        },
        ns: "WL5G3N1",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementPrivacyNoticeCommunication;
Modeler.register(ElementPrivacyNoticeCommunication, "ElementPrivacyNoticeCommunication");
