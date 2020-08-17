var Modeler = require("../Modeler.js");
var className = 'ElementSenderTradingPartner';

var ElementSenderTradingPartner = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  SenderTradingPartner: {
      type: "TypeSenderTradingPartnerType",
      wsdlDefinition: {
        name: "SenderTradingPartner",
        type: "SenderTradingPartnerType",
        "xsd:annotation": {
          "xsd:documentation": "The trading partner information as defined in the B2B gateway for the sender of the B2B document."
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
	  SenderTradingPartner: {
      type: "TypeSenderTradingPartnerType",
      wsdlDefinition: {
        name: "SenderTradingPartner",
        type: "SenderTradingPartnerType",
        "xsd:annotation": {
          "xsd:documentation": "The trading partner information as defined in the B2B gateway for the sender of the B2B document."
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementSenderTradingPartner;
Modeler.register(ElementSenderTradingPartner, "ElementSenderTradingPartner");
