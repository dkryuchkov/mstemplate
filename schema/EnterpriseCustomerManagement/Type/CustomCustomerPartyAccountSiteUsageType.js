var Modeler = require("../Modeler.js");
var className = 'TypeCustomCustomerPartyAccountSiteUsageType';

var TypeCustomCustomerPartyAccountSiteUsageType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomCustomerPartyAccountSiteUsageType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomCustomerPartyAccountSiteUsageType",
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
	  CustomCustomerPartyAccountSiteUsageType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomCustomerPartyAccountSiteUsageType",
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCustomCustomerPartyAccountSiteUsageType;
Modeler.register(TypeCustomCustomerPartyAccountSiteUsageType, "TypeCustomCustomerPartyAccountSiteUsageType");
