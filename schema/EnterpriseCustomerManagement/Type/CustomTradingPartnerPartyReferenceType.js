var Modeler = require("../Modeler.js");
var className = 'TypeCustomTradingPartnerPartyReferenceType';

var TypeCustomTradingPartnerPartyReferenceType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomTradingPartnerPartyReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomTradingPartnerPartyReferenceType",
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
	  CustomTradingPartnerPartyReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomTradingPartnerPartyReferenceType",
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCustomTradingPartnerPartyReferenceType;
Modeler.register(TypeCustomTradingPartnerPartyReferenceType, "TypeCustomTradingPartnerPartyReferenceType");
