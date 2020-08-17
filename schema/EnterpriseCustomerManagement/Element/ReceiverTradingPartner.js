var Modeler = require("../Modeler.js");
var className = 'ElementReceiverTradingPartner';

var ElementReceiverTradingPartner = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  ReceiverTradingPartner: {
      type: "TypeReceiverTradingPartnerType",
      wsdlDefinition: {
        name: "ReceiverTradingPartner",
        type: "ReceiverTradingPartnerType",
        "xsd:annotation": {
          "xsd:documentation": "The trading partner information as defined in the B2B gateway for the receiver of the B2B document."
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
	  ReceiverTradingPartner: {
      type: "TypeReceiverTradingPartnerType",
      wsdlDefinition: {
        name: "ReceiverTradingPartner",
        type: "ReceiverTradingPartnerType",
        "xsd:annotation": {
          "xsd:documentation": "The trading partner information as defined in the B2B gateway for the receiver of the B2B document."
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementReceiverTradingPartner;
Modeler.register(ElementReceiverTradingPartner, "ElementReceiverTradingPartner");
