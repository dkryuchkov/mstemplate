var Modeler = require("../Modeler.js");
var className = 'TypeSyncCustomerPartyListDataAreaType';

var TypeSyncCustomerPartyListDataAreaType = function(json, parentObj) {
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
    SyncCustomerPartyList: {
      type: "TypeSyncCustomerPartyListType",
      wsdlDefinition: {
        name: "WL5G3N1:SyncCustomerPartyList",
        type: "SyncCustomerPartyListType",
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
    SyncCustomerPartyList: {
      type: "TypeSyncCustomerPartyListType",
      wsdlDefinition: {
        name: "WL5G3N1:SyncCustomerPartyList",
        type: "SyncCustomerPartyListType",
        attribute: false,
        ns: "WL5G3N1"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeSyncCustomerPartyListDataAreaType;
Modeler.register(TypeSyncCustomerPartyListDataAreaType, "TypeSyncCustomerPartyListDataAreaType");
