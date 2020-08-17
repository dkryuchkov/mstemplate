var Modeler = require("../Modeler.js");
var className = 'TypeB2BMReferenceType';

var TypeB2BMReferenceType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  B2BMID: {
      type: "TypeIdentifierType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:B2BMID",
        type: "IdentifierType",
        "xsd:annotation": {
          "xsd:documentation": "Unique identifier of the B2B message used to uniquely identify the B2B transaction in the B2B gateway software. E.g. Oracle B2B message identifier"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    CollaborationID: {
      type: "TypeIdentifierType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:CollaborationID",
        type: "IdentifierType",
        "xsd:annotation": {
          "xsd:documentation": "Unique identifier of the B2B collaboration. A B2B collaboration groups multiple B2B messages which together perform a common business function."
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    ReplyToMessageID: {
      type: "TypeIdentifierType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:ReplyToMessageID",
        type: "IdentifierType",
        "xsd:annotation": {
          "xsd:documentation": "If this B2B message is a acknowledgement to another B2B message, this element contains the B2B message identifier of the original message"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    B2BDocumentType: {
      type: "TypeB2BDocumentTypeType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:B2BDocumentType",
        type: "B2BDocumentTypeType",
        "xsd:annotation": {
          "xsd:documentation": "Information about the B2B document type, standard and version being exchanged between the trading partners using the B2B gateway"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    GatewayID: {
      type: "TypeIdentifierType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:GatewayID",
        type: "IdentifierType",
        "xsd:annotation": {
          "xsd:documentation": "Name of the B2B software. E.g. \"Oracle B2B\". Based on the value of this element, the B2B document can be routed to the correct B2B gateway"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    SenderTradingPartner: {
      type: "TypeSenderTradingPartnerType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:SenderTradingPartner",
        type: "SenderTradingPartnerType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    ReceiverTradingPartner: {
      type: "TypeReceiverTradingPartnerType",
      wsdlDefinition: {
        maxOccurs: "unbounded",
        minOccurs: "0",
        name: "WL5G3N2:ReceiverTradingPartner",
        type: "ReceiverTradingPartnerType",
        "xsd:annotation": {
          "xsd:documentation": "The trading partner information as defined in the B2B gateway for the receiver of the B2B document. The multiiple cardinality of the receiver is to support the case when a single document needs to be sent to multiple trading partners, e.g., a shipment document needs to be send to customer as well as a carrier."
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    },
    Custom: {
      type: "TypeCustomB2BMReferenceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Custom",
        type: "corecomcust:CustomB2BMReferenceType",
        attribute: false,
        ns: "WL5G3N2"
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
	  B2BMID: {
      type: "TypeIdentifierType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:B2BMID",
        type: "IdentifierType",
        "xsd:annotation": {
          "xsd:documentation": "Unique identifier of the B2B message used to uniquely identify the B2B transaction in the B2B gateway software. E.g. Oracle B2B message identifier"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    CollaborationID: {
      type: "TypeIdentifierType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:CollaborationID",
        type: "IdentifierType",
        "xsd:annotation": {
          "xsd:documentation": "Unique identifier of the B2B collaboration. A B2B collaboration groups multiple B2B messages which together perform a common business function."
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    ReplyToMessageID: {
      type: "TypeIdentifierType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:ReplyToMessageID",
        type: "IdentifierType",
        "xsd:annotation": {
          "xsd:documentation": "If this B2B message is a acknowledgement to another B2B message, this element contains the B2B message identifier of the original message"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    B2BDocumentType: {
      type: "TypeB2BDocumentTypeType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:B2BDocumentType",
        type: "B2BDocumentTypeType",
        "xsd:annotation": {
          "xsd:documentation": "Information about the B2B document type, standard and version being exchanged between the trading partners using the B2B gateway"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    GatewayID: {
      type: "TypeIdentifierType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:GatewayID",
        type: "IdentifierType",
        "xsd:annotation": {
          "xsd:documentation": "Name of the B2B software. E.g. \"Oracle B2B\". Based on the value of this element, the B2B document can be routed to the correct B2B gateway"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    SenderTradingPartner: {
      type: "TypeSenderTradingPartnerType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:SenderTradingPartner",
        type: "SenderTradingPartnerType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    ReceiverTradingPartner: {
      type: "TypeReceiverTradingPartnerType",
      wsdlDefinition: {
        maxOccurs: "unbounded",
        minOccurs: "0",
        name: "WL5G3N2:ReceiverTradingPartner",
        type: "ReceiverTradingPartnerType",
        "xsd:annotation": {
          "xsd:documentation": "The trading partner information as defined in the B2B gateway for the receiver of the B2B document. The multiiple cardinality of the receiver is to support the case when a single document needs to be sent to multiple trading partners, e.g., a shipment document needs to be send to customer as well as a carrier."
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    },
    Custom: {
      type: "TypeCustomB2BMReferenceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Custom",
        type: "corecomcust:CustomB2BMReferenceType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeB2BMReferenceType;
Modeler.register(TypeB2BMReferenceType, "TypeB2BMReferenceType");
