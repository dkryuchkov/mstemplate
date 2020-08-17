var Modeler = require("../Modeler.js");
var className = 'ElementSyncCustomerPartyListResponse';

var ElementSyncCustomerPartyListResponse = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  SyncCustomerPartyListResponse: {
      type: "TypeSyncCustomerPartyListResponseType",
      wsdlDefinition: {
        name: "SyncCustomerPartyListResponse",
        type: "SyncCustomerPartyListResponseType",
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
	  SyncCustomerPartyListResponse: {
      type: "TypeSyncCustomerPartyListResponseType",
      wsdlDefinition: {
        name: "SyncCustomerPartyListResponse",
        type: "SyncCustomerPartyListResponseType",
        ns: "WL5G3N1",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementSyncCustomerPartyListResponse;
Modeler.register(ElementSyncCustomerPartyListResponse, "ElementSyncCustomerPartyListResponse");
