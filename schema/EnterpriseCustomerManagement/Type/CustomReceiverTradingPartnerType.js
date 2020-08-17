var Modeler = require("../Modeler.js");
var className = 'TypeCustomReceiverTradingPartnerType';

var TypeCustomReceiverTradingPartnerType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomReceiverTradingPartnerType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomReceiverTradingPartnerType",
        attribute: false,
        type: "xsd:string"
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
	  CustomReceiverTradingPartnerType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomReceiverTradingPartnerType",
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCustomReceiverTradingPartnerType;
Modeler.register(TypeCustomReceiverTradingPartnerType, "TypeCustomReceiverTradingPartnerType");
