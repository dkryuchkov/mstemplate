var Modeler = require("../Modeler.js");
var className = 'ElementCustomerPartyShippingExceptionConfiguration';

var ElementCustomerPartyShippingExceptionConfiguration = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomerPartyShippingExceptionConfiguration: {
      type: "TypeCustomerPartyShippingExceptionConfigurationType",
      wsdlDefinition: {
        name: "CustomerPartyShippingExceptionConfiguration",
        type: "CustomerPartyShippingExceptionConfigurationType",
        "xsd:annotation": {
          "xsd:documentation": "Shipping Exception to this customer party by days of week or by a block of days"
        },
        ns: "WL5G3N1",
        attribute: false
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
	  CustomerPartyShippingExceptionConfiguration: {
      type: "TypeCustomerPartyShippingExceptionConfigurationType",
      wsdlDefinition: {
        name: "CustomerPartyShippingExceptionConfiguration",
        type: "CustomerPartyShippingExceptionConfigurationType",
        "xsd:annotation": {
          "xsd:documentation": "Shipping Exception to this customer party by days of week or by a block of days"
        },
        ns: "WL5G3N1",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementCustomerPartyShippingExceptionConfiguration;
Modeler.register(ElementCustomerPartyShippingExceptionConfiguration, "ElementCustomerPartyShippingExceptionConfiguration");
