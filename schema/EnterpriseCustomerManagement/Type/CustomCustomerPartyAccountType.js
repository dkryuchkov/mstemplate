var Modeler = require("../Modeler.js");
var className = 'TypeCustomCustomerPartyAccountType';

var TypeCustomCustomerPartyAccountType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomCustomerPartyAccountType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomCustomerPartyAccountType",
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
	  CustomCustomerPartyAccountType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomCustomerPartyAccountType",
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCustomCustomerPartyAccountType;
Modeler.register(TypeCustomCustomerPartyAccountType, "TypeCustomCustomerPartyAccountType");
