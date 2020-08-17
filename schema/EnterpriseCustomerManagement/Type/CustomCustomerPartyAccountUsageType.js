var Modeler = require("../Modeler.js");
var className = 'TypeCustomCustomerPartyAccountUsageType';

var TypeCustomCustomerPartyAccountUsageType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomCustomerPartyAccountUsageType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomCustomerPartyAccountUsageType",
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
	  CustomCustomerPartyAccountUsageType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomCustomerPartyAccountUsageType",
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCustomCustomerPartyAccountUsageType;
Modeler.register(TypeCustomCustomerPartyAccountUsageType, "TypeCustomCustomerPartyAccountUsageType");
