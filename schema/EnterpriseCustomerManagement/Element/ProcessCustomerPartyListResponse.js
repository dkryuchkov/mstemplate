var Modeler = require("../Modeler.js");
var className = 'ElementProcessCustomerPartyListResponse';

var ElementProcessCustomerPartyListResponse = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  ProcessCustomerPartyListResponse: {
      type: "TypeProcessCustomerPartyListResponseType",
      wsdlDefinition: {
        name: "ProcessCustomerPartyListResponse",
        type: "ProcessCustomerPartyListResponseType",
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
	  ProcessCustomerPartyListResponse: {
      type: "TypeProcessCustomerPartyListResponseType",
      wsdlDefinition: {
        name: "ProcessCustomerPartyListResponse",
        type: "ProcessCustomerPartyListResponseType",
        ns: "WL5G3N1",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementProcessCustomerPartyListResponse;
Modeler.register(ElementProcessCustomerPartyListResponse, "ElementProcessCustomerPartyListResponse");
