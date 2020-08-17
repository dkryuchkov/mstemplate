var Modeler = require("../Modeler.js");
var className = 'ElementContactEmailCommunication';

var ElementContactEmailCommunication = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  ContactEmailCommunication: {
      type: "TypeContactEmailCommunicationType",
      wsdlDefinition: {
        name: "ContactEmailCommunication",
        type: "ContactEmailCommunicationType",
        "xsd:annotation": {
          "xsd:documentation": "Email Addresses associated with a Contact"
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
	  ContactEmailCommunication: {
      type: "TypeContactEmailCommunicationType",
      wsdlDefinition: {
        name: "ContactEmailCommunication",
        type: "ContactEmailCommunicationType",
        "xsd:annotation": {
          "xsd:documentation": "Email Addresses associated with a Contact"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementContactEmailCommunication;
Modeler.register(ElementContactEmailCommunication, "ElementContactEmailCommunication");
