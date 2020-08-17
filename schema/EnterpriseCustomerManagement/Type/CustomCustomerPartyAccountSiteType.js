var Modeler = require("../Modeler.js");
var className = 'TypeCustomCustomerPartyAccountSiteType';

var TypeCustomCustomerPartyAccountSiteType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomCustomerPartyAccountSiteType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomCustomerPartyAccountSiteType",
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
	  CustomCustomerPartyAccountSiteType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomCustomerPartyAccountSiteType",
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCustomCustomerPartyAccountSiteType;
Modeler.register(TypeCustomCustomerPartyAccountSiteType, "TypeCustomCustomerPartyAccountSiteType");
