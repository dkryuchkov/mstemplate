var Modeler = require("../Modeler.js");
var className = 'ElementWebsiteCommunication';

var ElementWebsiteCommunication = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  WebsiteCommunication: {
      type: "TypeWebsiteCommunicationType",
      wsdlDefinition: {
        name: "WebsiteCommunication",
        type: "WebsiteCommunicationType",
        "xsd:annotation": {
          "xsd:documentation": "Details about the web address of an organization or person, including information about what that web address is used for"
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
	  WebsiteCommunication: {
      type: "TypeWebsiteCommunicationType",
      wsdlDefinition: {
        name: "WebsiteCommunication",
        type: "WebsiteCommunicationType",
        "xsd:annotation": {
          "xsd:documentation": "Details about the web address of an organization or person, including information about what that web address is used for"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementWebsiteCommunication;
Modeler.register(ElementWebsiteCommunication, "ElementWebsiteCommunication");
