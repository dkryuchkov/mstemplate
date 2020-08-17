var Modeler = require("../Modeler.js");
var className = 'ElementContactWebsiteCommunication';

var ElementContactWebsiteCommunication = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  ContactWebsiteCommunication: {
      type: "TypeContactWebsiteCommunicationType",
      wsdlDefinition: {
        name: "ContactWebsiteCommunication",
        type: "ContactWebsiteCommunicationType",
        "xsd:annotation": {
          "xsd:documentation": "Web Addresses associated with a Contact"
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
	  ContactWebsiteCommunication: {
      type: "TypeContactWebsiteCommunicationType",
      wsdlDefinition: {
        name: "ContactWebsiteCommunication",
        type: "ContactWebsiteCommunicationType",
        "xsd:annotation": {
          "xsd:documentation": "Web Addresses associated with a Contact"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementContactWebsiteCommunication;
Modeler.register(ElementContactWebsiteCommunication, "ElementContactWebsiteCommunication");
