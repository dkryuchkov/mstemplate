var Modeler = require("../Modeler.js");
var className = 'ElementUpdateCustomerPartyAccountResponse';

var ElementUpdateCustomerPartyAccountResponse = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  UpdateCustomerPartyAccountResponse: {
      type: "TypeUpdateCustomerPartyAccountResponseType",
      wsdlDefinition: {
        name: "UpdateCustomerPartyAccountResponse",
        type: "UpdateCustomerPartyAccountResponseType",
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
	  UpdateCustomerPartyAccountResponse: {
      type: "TypeUpdateCustomerPartyAccountResponseType",
      wsdlDefinition: {
        name: "UpdateCustomerPartyAccountResponse",
        type: "UpdateCustomerPartyAccountResponseType",
        ns: "WL5G3N1",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementUpdateCustomerPartyAccountResponse;
Modeler.register(ElementUpdateCustomerPartyAccountResponse, "ElementUpdateCustomerPartyAccountResponse");
