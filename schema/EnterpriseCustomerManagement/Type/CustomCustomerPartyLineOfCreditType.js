var Modeler = require("../Modeler.js");
var className = 'TypeCustomCustomerPartyLineOfCreditType';

var TypeCustomCustomerPartyLineOfCreditType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomCustomerPartyLineOfCreditType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomCustomerPartyLineOfCreditType",
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
	  CustomCustomerPartyLineOfCreditType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomCustomerPartyLineOfCreditType",
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCustomCustomerPartyLineOfCreditType;
Modeler.register(TypeCustomCustomerPartyLineOfCreditType, "TypeCustomCustomerPartyLineOfCreditType");
