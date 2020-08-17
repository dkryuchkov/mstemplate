var Modeler = require("../Modeler.js");
var className = 'TypeCustomCustomerPartyAccountContactUsageType';

var TypeCustomCustomerPartyAccountContactUsageType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomCustomerPartyAccountContactUsageType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomCustomerPartyAccountContactUsageType",
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
	  CustomCustomerPartyAccountContactUsageType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomCustomerPartyAccountContactUsageType",
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCustomCustomerPartyAccountContactUsageType;
Modeler.register(TypeCustomCustomerPartyAccountContactUsageType, "TypeCustomCustomerPartyAccountContactUsageType");
