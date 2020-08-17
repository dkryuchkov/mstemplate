var Modeler = require("../Modeler.js");
var className = 'ElementUpdateCustomerPartyAccount';

var ElementUpdateCustomerPartyAccount = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  UpdateCustomerPartyAccount: {
      type: "TypeUpdateCustomerPartyAccountType",
      wsdlDefinition: {
        name: "UpdateCustomerPartyAccount",
        type: "UpdateCustomerPartyAccountType",
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
	  UpdateCustomerPartyAccount: {
      type: "TypeUpdateCustomerPartyAccountType",
      wsdlDefinition: {
        name: "UpdateCustomerPartyAccount",
        type: "UpdateCustomerPartyAccountType",
        ns: "WL5G3N1",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementUpdateCustomerPartyAccount;
Modeler.register(ElementUpdateCustomerPartyAccount, "ElementUpdateCustomerPartyAccount");
