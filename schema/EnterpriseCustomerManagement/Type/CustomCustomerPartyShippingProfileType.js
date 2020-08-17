var Modeler = require("../Modeler.js");
var className = 'TypeCustomCustomerPartyShippingProfileType';

var TypeCustomCustomerPartyShippingProfileType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomCustomerPartyShippingProfileType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomCustomerPartyShippingProfileType",
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
	  CustomCustomerPartyShippingProfileType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomCustomerPartyShippingProfileType",
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCustomCustomerPartyShippingProfileType;
Modeler.register(TypeCustomCustomerPartyShippingProfileType, "TypeCustomCustomerPartyShippingProfileType");
