var Modeler = require("../Modeler.js");
var className = 'ElementCustomerPartyAccountContactAddressCommunication';

var ElementCustomerPartyAccountContactAddressCommunication = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomerPartyAccountContactAddressCommunication: {
      type: "TypeContactAddressCommunicationType",
      wsdlDefinition: {
        name: "CustomerPartyAccountContactAddressCommunication",
        type: "ContactAddressCommunicationType",
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
	  CustomerPartyAccountContactAddressCommunication: {
      type: "TypeContactAddressCommunicationType",
      wsdlDefinition: {
        name: "CustomerPartyAccountContactAddressCommunication",
        type: "ContactAddressCommunicationType",
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementCustomerPartyAccountContactAddressCommunication;
Modeler.register(ElementCustomerPartyAccountContactAddressCommunication, "ElementCustomerPartyAccountContactAddressCommunication");
