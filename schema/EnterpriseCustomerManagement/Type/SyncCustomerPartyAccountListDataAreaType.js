var Modeler = require("../Modeler.js");
var className = 'TypeSyncCustomerPartyAccountListDataAreaType';

var TypeSyncCustomerPartyAccountListDataAreaType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  Sync: {
      type: "TypeSyncType",
      wsdlDefinition: {
        name: "WL5G3N2:Sync",
        type: "SyncType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    SyncCustomerPartyAccountList: {
      type: "TypeSyncCustomerPartyAccountListType",
      wsdlDefinition: {
        name: "WL5G3N1:SyncCustomerPartyAccountList",
        type: "SyncCustomerPartyAccountListType",
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
	  Sync: {
      type: "TypeSyncType",
      wsdlDefinition: {
        name: "WL5G3N2:Sync",
        type: "SyncType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    SyncCustomerPartyAccountList: {
      type: "TypeSyncCustomerPartyAccountListType",
      wsdlDefinition: {
        name: "WL5G3N1:SyncCustomerPartyAccountList",
        type: "SyncCustomerPartyAccountListType",
        attribute: false,
        ns: "WL5G3N1"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeSyncCustomerPartyAccountListDataAreaType;
Modeler.register(TypeSyncCustomerPartyAccountListDataAreaType, "TypeSyncCustomerPartyAccountListDataAreaType");
