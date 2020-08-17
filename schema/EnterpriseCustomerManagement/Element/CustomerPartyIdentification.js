var Modeler = require("../Modeler.js");
var className = 'ElementCustomerPartyIdentification';

var ElementCustomerPartyIdentification = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomerPartyIdentification: {
      type: "TypeCustomerPartyIdentificationType",
      wsdlDefinition: {
        name: "CustomerPartyIdentification",
        type: "CustomerPartyIdentificationType",
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
	  CustomerPartyIdentification: {
      type: "TypeCustomerPartyIdentificationType",
      wsdlDefinition: {
        name: "CustomerPartyIdentification",
        type: "CustomerPartyIdentificationType",
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementCustomerPartyIdentification;
Modeler.register(ElementCustomerPartyIdentification, "ElementCustomerPartyIdentification");
