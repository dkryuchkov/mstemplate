var Modeler = require("../Modeler.js");
var className = 'TypeCustomCustomerPartyShippingExceptionConfigurationType';

var TypeCustomCustomerPartyShippingExceptionConfigurationType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomCustomerPartyShippingExceptionConfigurationType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomCustomerPartyShippingExceptionConfigurationType",
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
	  CustomCustomerPartyShippingExceptionConfigurationType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomCustomerPartyShippingExceptionConfigurationType",
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCustomCustomerPartyShippingExceptionConfigurationType;
Modeler.register(TypeCustomCustomerPartyShippingExceptionConfigurationType, "TypeCustomCustomerPartyShippingExceptionConfigurationType");
