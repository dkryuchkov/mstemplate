var Modeler = require("../Modeler.js");
var className = 'ElementContactSWIFTCommunication';

var ElementContactSWIFTCommunication = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  ContactSWIFTCommunication: {
      type: "TypeContactSWIFTCommunicationType",
      wsdlDefinition: {
        name: "ContactSWIFTCommunication",
        type: "ContactSWIFTCommunicationType",
        "xsd:annotation": {
          "xsd:documentation": "SWIFT communiction detail associated with the contact. It is typically used between financial institutions or between financial institution and another organization.",
          "xsd:appinfo": {
            "ebocontext:BusinessContext": "BankingAndWealthManagement"
          }
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
	  ContactSWIFTCommunication: {
      type: "TypeContactSWIFTCommunicationType",
      wsdlDefinition: {
        name: "ContactSWIFTCommunication",
        type: "ContactSWIFTCommunicationType",
        "xsd:annotation": {
          "xsd:documentation": "SWIFT communiction detail associated with the contact. It is typically used between financial institutions or between financial institution and another organization.",
          "xsd:appinfo": {
            "ebocontext:BusinessContext": "BankingAndWealthManagement"
          }
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementContactSWIFTCommunication;
Modeler.register(ElementContactSWIFTCommunication, "ElementContactSWIFTCommunication");
