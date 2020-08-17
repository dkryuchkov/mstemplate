var Modeler = require("../Modeler.js");
var className = 'TypeCustomCustomerPartySpecificationType';

var TypeCustomCustomerPartySpecificationType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomCustomerPartySpecificationType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomCustomerPartySpecificationType",
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
	  CustomCustomerPartySpecificationType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomCustomerPartySpecificationType",
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCustomCustomerPartySpecificationType;
Modeler.register(TypeCustomCustomerPartySpecificationType, "TypeCustomCustomerPartySpecificationType");
