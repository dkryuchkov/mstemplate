var Modeler = require("../Modeler.js");
var className = 'TypeCustomCustomerPartyBillingProfileReferenceType';

var TypeCustomCustomerPartyBillingProfileReferenceType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomCustomerPartyBillingProfileReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomCustomerPartyBillingProfileReferenceType",
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
	  CustomCustomerPartyBillingProfileReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomCustomerPartyBillingProfileReferenceType",
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCustomCustomerPartyBillingProfileReferenceType;
Modeler.register(TypeCustomCustomerPartyBillingProfileReferenceType, "TypeCustomCustomerPartyBillingProfileReferenceType");
