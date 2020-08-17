var Modeler = require("../Modeler.js");
var className = 'ElementCustomerPartyAccountContactIdentification';

var ElementCustomerPartyAccountContactIdentification = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomerPartyAccountContactIdentification: {
      type: "TypeCustomerPartyAccountContactIdentificationType",
      wsdlDefinition: {
        name: "CustomerPartyAccountContactIdentification",
        type: "CustomerPartyAccountContactIdentificationType",
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
	  CustomerPartyAccountContactIdentification: {
      type: "TypeCustomerPartyAccountContactIdentificationType",
      wsdlDefinition: {
        name: "CustomerPartyAccountContactIdentification",
        type: "CustomerPartyAccountContactIdentificationType",
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementCustomerPartyAccountContactIdentification;
Modeler.register(ElementCustomerPartyAccountContactIdentification, "ElementCustomerPartyAccountContactIdentification");
