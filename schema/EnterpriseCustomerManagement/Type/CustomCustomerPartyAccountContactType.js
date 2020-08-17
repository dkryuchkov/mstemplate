var Modeler = require("../Modeler.js");
var className = 'TypeCustomCustomerPartyAccountContactType';

var TypeCustomCustomerPartyAccountContactType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomCustomerPartyAccountContactType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomCustomerPartyAccountContactType",
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
	  CustomCustomerPartyAccountContactType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomCustomerPartyAccountContactType",
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCustomCustomerPartyAccountContactType;
Modeler.register(TypeCustomCustomerPartyAccountContactType, "TypeCustomCustomerPartyAccountContactType");
