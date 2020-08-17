var Modeler = require("../Modeler.js");
var className = 'ElementCustomerPartyLocationIdentification';

var ElementCustomerPartyLocationIdentification = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomerPartyLocationIdentification: {
      type: "TypeLocationIdentificationType",
      wsdlDefinition: {
        name: "CustomerPartyLocationIdentification",
        type: "LocationIdentificationType",
        ns: "WL5G3N2",
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
	  CustomerPartyLocationIdentification: {
      type: "TypeLocationIdentificationType",
      wsdlDefinition: {
        name: "CustomerPartyLocationIdentification",
        type: "LocationIdentificationType",
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementCustomerPartyLocationIdentification;
Modeler.register(ElementCustomerPartyLocationIdentification, "ElementCustomerPartyLocationIdentification");
