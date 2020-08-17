var Modeler = require("../Modeler.js");
var className = 'TypeCustomCustomerPartyAccountSiteBillingProfileType';

var TypeCustomCustomerPartyAccountSiteBillingProfileType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomCustomerPartyAccountSiteBillingProfileType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomCustomerPartyAccountSiteBillingProfileType",
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
	  CustomCustomerPartyAccountSiteBillingProfileType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomCustomerPartyAccountSiteBillingProfileType",
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCustomCustomerPartyAccountSiteBillingProfileType;
Modeler.register(TypeCustomCustomerPartyAccountSiteBillingProfileType, "TypeCustomCustomerPartyAccountSiteBillingProfileType");
