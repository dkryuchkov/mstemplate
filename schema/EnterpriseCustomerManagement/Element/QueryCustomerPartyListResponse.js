var Modeler = require("../Modeler.js");
var className = 'ElementQueryCustomerPartyListResponse';

var ElementQueryCustomerPartyListResponse = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  QueryCustomerPartyListResponse: {
      type: "TypeQueryCustomerPartyListResponseType",
      wsdlDefinition: {
        name: "QueryCustomerPartyListResponse",
        type: "QueryCustomerPartyListResponseType",
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
	  QueryCustomerPartyListResponse: {
      type: "TypeQueryCustomerPartyListResponseType",
      wsdlDefinition: {
        name: "QueryCustomerPartyListResponse",
        type: "QueryCustomerPartyListResponseType",
        ns: "WL5G3N1",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementQueryCustomerPartyListResponse;
Modeler.register(ElementQueryCustomerPartyListResponse, "ElementQueryCustomerPartyListResponse");
