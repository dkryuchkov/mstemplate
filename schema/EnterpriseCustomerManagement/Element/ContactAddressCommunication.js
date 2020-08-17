var Modeler = require("../Modeler.js");
var className = 'ElementContactAddressCommunication';

var ElementContactAddressCommunication = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  ContactAddressCommunication: {
      type: "TypeContactAddressCommunicationType",
      wsdlDefinition: {
        name: "ContactAddressCommunication",
        type: "ContactAddressCommunicationType",
        "xsd:annotation": {
          "xsd:documentation": "Addresses associated with a Contact"
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
	  ContactAddressCommunication: {
      type: "TypeContactAddressCommunicationType",
      wsdlDefinition: {
        name: "ContactAddressCommunication",
        type: "ContactAddressCommunicationType",
        "xsd:annotation": {
          "xsd:documentation": "Addresses associated with a Contact"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementContactAddressCommunication;
Modeler.register(ElementContactAddressCommunication, "ElementContactAddressCommunication");
