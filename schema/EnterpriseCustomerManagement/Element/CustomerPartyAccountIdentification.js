var Modeler = require("../Modeler.js");
var className = 'ElementCustomerPartyAccountIdentification';

var ElementCustomerPartyAccountIdentification = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomerPartyAccountIdentification: {
      type: "TypeCustomerPartyAccountIdentificationType",
      wsdlDefinition: {
        name: "CustomerPartyAccountIdentification",
        type: "CustomerPartyAccountIdentificationType",
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
	  CustomerPartyAccountIdentification: {
      type: "TypeCustomerPartyAccountIdentificationType",
      wsdlDefinition: {
        name: "CustomerPartyAccountIdentification",
        type: "CustomerPartyAccountIdentificationType",
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementCustomerPartyAccountIdentification;
Modeler.register(ElementCustomerPartyAccountIdentification, "ElementCustomerPartyAccountIdentification");
