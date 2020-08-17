var Modeler = require("../Modeler.js");
var className = 'ElementSyncCustomerPartyAccountListResponse';

var ElementSyncCustomerPartyAccountListResponse = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  SyncCustomerPartyAccountListResponse: {
      type: "TypeSyncCustomerPartyAccountListResponseType",
      wsdlDefinition: {
        name: "SyncCustomerPartyAccountListResponse",
        type: "SyncCustomerPartyAccountListResponseType",
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
	  SyncCustomerPartyAccountListResponse: {
      type: "TypeSyncCustomerPartyAccountListResponseType",
      wsdlDefinition: {
        name: "SyncCustomerPartyAccountListResponse",
        type: "SyncCustomerPartyAccountListResponseType",
        ns: "WL5G3N1",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementSyncCustomerPartyAccountListResponse;
Modeler.register(ElementSyncCustomerPartyAccountListResponse, "ElementSyncCustomerPartyAccountListResponse");
