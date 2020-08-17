var Modeler = require("../Modeler.js");
var className = 'ElementDeleteCustomerPartyListResponse';

var ElementDeleteCustomerPartyListResponse = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  DeleteCustomerPartyListResponse: {
      type: "TypeDeleteCustomerPartyListResponseType",
      wsdlDefinition: {
        name: "DeleteCustomerPartyListResponse",
        type: "DeleteCustomerPartyListResponseType",
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
	  DeleteCustomerPartyListResponse: {
      type: "TypeDeleteCustomerPartyListResponseType",
      wsdlDefinition: {
        name: "DeleteCustomerPartyListResponse",
        type: "DeleteCustomerPartyListResponseType",
        ns: "WL5G3N1",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementDeleteCustomerPartyListResponse;
Modeler.register(ElementDeleteCustomerPartyListResponse, "ElementDeleteCustomerPartyListResponse");
