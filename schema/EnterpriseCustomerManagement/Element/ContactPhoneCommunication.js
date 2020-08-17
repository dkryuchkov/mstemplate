var Modeler = require("../Modeler.js");
var className = 'ElementContactPhoneCommunication';

var ElementContactPhoneCommunication = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  ContactPhoneCommunication: {
      type: "TypeContactPhoneCommunicationType",
      wsdlDefinition: {
        name: "ContactPhoneCommunication",
        type: "ContactPhoneCommunicationType",
        "xsd:annotation": {
          "xsd:documentation": "Phone Numbers associated with a Contact"
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
	  ContactPhoneCommunication: {
      type: "TypeContactPhoneCommunicationType",
      wsdlDefinition: {
        name: "ContactPhoneCommunication",
        type: "ContactPhoneCommunicationType",
        "xsd:annotation": {
          "xsd:documentation": "Phone Numbers associated with a Contact"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementContactPhoneCommunication;
Modeler.register(ElementContactPhoneCommunication, "ElementContactPhoneCommunication");
