var Modeler = require("../Modeler.js");
var className = 'ElementPhoneCommunication';

var ElementPhoneCommunication = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  PhoneCommunication: {
      type: "TypePhoneCommunicationType",
      wsdlDefinition: {
        name: "PhoneCommunication",
        type: "PhoneCommunicationType",
        "xsd:annotation": {
          "xsd:documentation": "Details about the phone number of an  organization or person, including information about how that phone number is used"
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
	  PhoneCommunication: {
      type: "TypePhoneCommunicationType",
      wsdlDefinition: {
        name: "PhoneCommunication",
        type: "PhoneCommunicationType",
        "xsd:annotation": {
          "xsd:documentation": "Details about the phone number of an  organization or person, including information about how that phone number is used"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementPhoneCommunication;
Modeler.register(ElementPhoneCommunication, "ElementPhoneCommunication");
