var Modeler = require("../Modeler.js");
var className = 'ElementCreateCustomerPartyListResponse';

var ElementCreateCustomerPartyListResponse = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CreateCustomerPartyListResponse: {
      type: "TypeCreateCustomerPartyListResponseType",
      wsdlDefinition: {
        name: "CreateCustomerPartyListResponse",
        type: "CreateCustomerPartyListResponseType",
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
	  CreateCustomerPartyListResponse: {
      type: "TypeCreateCustomerPartyListResponseType",
      wsdlDefinition: {
        name: "CreateCustomerPartyListResponse",
        type: "CreateCustomerPartyListResponseType",
        ns: "WL5G3N1",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementCreateCustomerPartyListResponse;
Modeler.register(ElementCreateCustomerPartyListResponse, "ElementCreateCustomerPartyListResponse");
