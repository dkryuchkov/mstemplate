var Modeler = require("../Modeler.js");
var className = 'ElementCommunication';

var ElementCommunication = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  Communication: {
      type: "TypeCommunicationType",
      wsdlDefinition: {
        name: "Communication",
        type: "CommunicationType",
        "xsd:annotation": {
          "xsd:documentation": "An abstract  representation of the different means of getting in touch or communicating verbally or in writing with a party"
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
	  Communication: {
      type: "TypeCommunicationType",
      wsdlDefinition: {
        name: "Communication",
        type: "CommunicationType",
        "xsd:annotation": {
          "xsd:documentation": "An abstract  representation of the different means of getting in touch or communicating verbally or in writing with a party"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementCommunication;
Modeler.register(ElementCommunication, "ElementCommunication");
