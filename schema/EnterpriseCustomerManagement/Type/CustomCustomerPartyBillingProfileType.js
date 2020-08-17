var Modeler = require("../Modeler.js");
var className = 'TypeCustomCustomerPartyBillingProfileType';

var TypeCustomCustomerPartyBillingProfileType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomCustomerPartyBillingProfileType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomCustomerPartyBillingProfileType",
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
	  CustomCustomerPartyBillingProfileType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomCustomerPartyBillingProfileType",
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCustomCustomerPartyBillingProfileType;
Modeler.register(TypeCustomCustomerPartyBillingProfileType, "TypeCustomCustomerPartyBillingProfileType");
