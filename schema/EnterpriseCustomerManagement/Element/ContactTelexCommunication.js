var Modeler = require("../Modeler.js");
var className = 'ElementContactTelexCommunication';

var ElementContactTelexCommunication = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  ContactTelexCommunication: {
      type: "TypeContactTelexCommunicationType",
      wsdlDefinition: {
        name: "ContactTelexCommunication",
        type: "ContactTelexCommunicationType",
        "xsd:annotation": {
          "xsd:documentation": "Telex communication detail associated with the Contact"
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
	  ContactTelexCommunication: {
      type: "TypeContactTelexCommunicationType",
      wsdlDefinition: {
        name: "ContactTelexCommunication",
        type: "ContactTelexCommunicationType",
        "xsd:annotation": {
          "xsd:documentation": "Telex communication detail associated with the Contact"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementContactTelexCommunication;
Modeler.register(ElementContactTelexCommunication, "ElementContactTelexCommunication");
