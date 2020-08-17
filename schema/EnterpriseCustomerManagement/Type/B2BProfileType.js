var Modeler = require("../Modeler.js");
var className = 'TypeB2BProfileType';

var TypeB2BProfileType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
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
      type: "TypeCustomB2BProfileType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Custom",
        type: "corecomcust:CustomB2BProfileType",
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
      type: "TypeCustomB2BProfileType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Custom",
        type: "corecomcust:CustomB2BProfileType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeB2BProfileType;
Modeler.register(TypeB2BProfileType, "TypeB2BProfileType");
