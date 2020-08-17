var Modeler = require("../Modeler.js");
var className = 'TypeCustomSenderTradingPartnerType';

var TypeCustomSenderTradingPartnerType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomSenderTradingPartnerType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomSenderTradingPartnerType",
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
	  CustomSenderTradingPartnerType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomSenderTradingPartnerType",
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCustomSenderTradingPartnerType;
Modeler.register(TypeCustomSenderTradingPartnerType, "TypeCustomSenderTradingPartnerType");
