var Modeler = require("../Modeler.js");
var className = 'TypeSyncCustomerPartyListResponseDataAreaType';

var TypeSyncCustomerPartyListResponseDataAreaType = function(json, parentObj) {
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
    SyncCustomerPartyListResponse: {
      type: "TypeSyncCustomerPartyListResponseType",
      wsdlDefinition: {
        name: "WL5G3N1:SyncCustomerPartyListResponse",
        type: "SyncCustomerPartyListResponseType",
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
    SyncCustomerPartyListResponse: {
      type: "TypeSyncCustomerPartyListResponseType",
      wsdlDefinition: {
        name: "WL5G3N1:SyncCustomerPartyListResponse",
        type: "SyncCustomerPartyListResponseType",
        attribute: false,
        ns: "WL5G3N1"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeSyncCustomerPartyListResponseDataAreaType;
Modeler.register(TypeSyncCustomerPartyListResponseDataAreaType, "TypeSyncCustomerPartyListResponseDataAreaType");
