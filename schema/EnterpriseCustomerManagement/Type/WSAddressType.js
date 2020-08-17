var Modeler = require("../Modeler.js");
var className = 'TypeWSAddressType';

var TypeWSAddressType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  From: {
      type: "TypeEndpointReferenceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "wsa:From",
        type: "wsa:EndpointReferenceType",
        attribute: false,
        ns: "wsa"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    To: {
      type: "TypeAttributedURI",
      wsdlDefinition: {
        minOccurs: "0",
        name: "wsa:To",
        type: "wsa:AttributedURI",
        attribute: false,
        ns: "wsa"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    ReplyTo: {
      type: "TypeEndpointReferenceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "wsa:ReplyTo",
        type: "wsa:EndpointReferenceType",
        attribute: false,
        ns: "wsa"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    FaultTo: {
      type: "TypeEndpointReferenceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "wsa:FaultTo",
        type: "wsa:EndpointReferenceType",
        attribute: false,
        ns: "wsa"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Recipient: {
      type: "TypeEndpointReferenceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "wsa:Recipient",
        type: "wsa:EndpointReferenceType",
        attribute: false,
        ns: "wsa"
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
	  From: {
      type: "TypeEndpointReferenceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "wsa:From",
        type: "wsa:EndpointReferenceType",
        attribute: false,
        ns: "wsa"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    To: {
      type: "TypeAttributedURI",
      wsdlDefinition: {
        minOccurs: "0",
        name: "wsa:To",
        type: "wsa:AttributedURI",
        attribute: false,
        ns: "wsa"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    ReplyTo: {
      type: "TypeEndpointReferenceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "wsa:ReplyTo",
        type: "wsa:EndpointReferenceType",
        attribute: false,
        ns: "wsa"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    FaultTo: {
      type: "TypeEndpointReferenceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "wsa:FaultTo",
        type: "wsa:EndpointReferenceType",
        attribute: false,
        ns: "wsa"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Recipient: {
      type: "TypeEndpointReferenceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "wsa:Recipient",
        type: "wsa:EndpointReferenceType",
        attribute: false,
        ns: "wsa"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeWSAddressType;
Modeler.register(TypeWSAddressType, "TypeWSAddressType");
