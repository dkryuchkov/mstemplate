var Modeler = require("../Modeler.js");
var className = 'ElementCustomerPartyContactIdentification';

var ElementCustomerPartyContactIdentification = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomerPartyContactIdentification: {
      type: "TypeContactIdentificationType",
      wsdlDefinition: {
        name: "CustomerPartyContactIdentification",
        type: "ContactIdentificationType",
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
	  CustomerPartyContactIdentification: {
      type: "TypeContactIdentificationType",
      wsdlDefinition: {
        name: "CustomerPartyContactIdentification",
        type: "ContactIdentificationType",
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementCustomerPartyContactIdentification;
Modeler.register(ElementCustomerPartyContactIdentification, "ElementCustomerPartyContactIdentification");
