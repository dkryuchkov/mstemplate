var Modeler = require("../Modeler.js");
var className = 'TypeSyncCustomerPartyAccountListResponseDataAreaType';

var TypeSyncCustomerPartyAccountListResponseDataAreaType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  SyncResponse: {
      type: "TypeSyncResponseType",
      wsdlDefinition: {
        name: "WL5G3N2:SyncResponse",
        type: "SyncResponseType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    SyncCustomerPartyAccountListResponse: {
      type: "TypeSyncCustomerPartyAccountListResponseType",
      wsdlDefinition: {
        name: "WL5G3N1:SyncCustomerPartyAccountListResponse",
        type: "SyncCustomerPartyAccountListResponseType",
        attribute: false,
        ns: "WL5G3N1"
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
	  SyncResponse: {
      type: "TypeSyncResponseType",
      wsdlDefinition: {
        name: "WL5G3N2:SyncResponse",
        type: "SyncResponseType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    SyncCustomerPartyAccountListResponse: {
      type: "TypeSyncCustomerPartyAccountListResponseType",
      wsdlDefinition: {
        name: "WL5G3N1:SyncCustomerPartyAccountListResponse",
        type: "SyncCustomerPartyAccountListResponseType",
        attribute: false,
        ns: "WL5G3N1"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeSyncCustomerPartyAccountListResponseDataAreaType;
Modeler.register(TypeSyncCustomerPartyAccountListResponseDataAreaType, "TypeSyncCustomerPartyAccountListResponseDataAreaType");
