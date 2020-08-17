var Modeler = require("../Modeler.js");
var className = 'TypeCustomCustomerPartyPaymentProfileType';

var TypeCustomCustomerPartyPaymentProfileType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomCustomerPartyPaymentProfileType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomCustomerPartyPaymentProfileType",
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
	  CustomCustomerPartyPaymentProfileType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomCustomerPartyPaymentProfileType",
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCustomCustomerPartyPaymentProfileType;
Modeler.register(TypeCustomCustomerPartyPaymentProfileType, "TypeCustomCustomerPartyPaymentProfileType");
