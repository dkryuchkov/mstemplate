var Modeler = require("../Modeler.js");
var className = 'TypeCustomCustomerPartySellingProfileType';

var TypeCustomCustomerPartySellingProfileType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomCustomerPartySellingProfileType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomCustomerPartySellingProfileType",
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
	  CustomCustomerPartySellingProfileType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomCustomerPartySellingProfileType",
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCustomCustomerPartySellingProfileType;
Modeler.register(TypeCustomCustomerPartySellingProfileType, "TypeCustomCustomerPartySellingProfileType");
