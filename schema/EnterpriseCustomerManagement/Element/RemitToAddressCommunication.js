var Modeler = require("../Modeler.js");
var className = 'ElementRemitToAddressCommunication';

var ElementRemitToAddressCommunication = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  RemitToAddressCommunication: {
      type: "TypeAddressCommunicationType",
      wsdlDefinition: {
        name: "RemitToAddressCommunication",
        type: "AddressCommunicationType",
        "xsd:annotation": {
          "xsd:documentation": "Remit To Address for a document"
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
	  RemitToAddressCommunication: {
      type: "TypeAddressCommunicationType",
      wsdlDefinition: {
        name: "RemitToAddressCommunication",
        type: "AddressCommunicationType",
        "xsd:annotation": {
          "xsd:documentation": "Remit To Address for a document"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementRemitToAddressCommunication;
Modeler.register(ElementRemitToAddressCommunication, "ElementRemitToAddressCommunication");
