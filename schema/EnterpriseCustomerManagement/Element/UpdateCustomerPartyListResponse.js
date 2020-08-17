var Modeler = require("../Modeler.js");
var className = 'ElementUpdateCustomerPartyListResponse';

var ElementUpdateCustomerPartyListResponse = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  UpdateCustomerPartyListResponse: {
      type: "TypeUpdateCustomerPartyListResponseType",
      wsdlDefinition: {
        name: "UpdateCustomerPartyListResponse",
        type: "UpdateCustomerPartyListResponseType",
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
	  UpdateCustomerPartyListResponse: {
      type: "TypeUpdateCustomerPartyListResponseType",
      wsdlDefinition: {
        name: "UpdateCustomerPartyListResponse",
        type: "UpdateCustomerPartyListResponseType",
        ns: "WL5G3N1",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementUpdateCustomerPartyListResponse;
Modeler.register(ElementUpdateCustomerPartyListResponse, "ElementUpdateCustomerPartyListResponse");
