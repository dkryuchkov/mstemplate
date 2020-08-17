var Modeler = require("../Modeler.js");
var className = 'TypeCustomCustomerPartyAccountSiteShippingProfileType';

var TypeCustomCustomerPartyAccountSiteShippingProfileType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomCustomerPartyAccountSiteShippingProfileType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomCustomerPartyAccountSiteShippingProfileType",
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
	  CustomCustomerPartyAccountSiteShippingProfileType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomCustomerPartyAccountSiteShippingProfileType",
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCustomCustomerPartyAccountSiteShippingProfileType;
Modeler.register(TypeCustomCustomerPartyAccountSiteShippingProfileType, "TypeCustomCustomerPartyAccountSiteShippingProfileType");
