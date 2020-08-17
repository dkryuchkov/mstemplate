var Modeler = require("../Modeler.js");
var className = 'ElementSyncCustomerPartyAccountList';

var ElementSyncCustomerPartyAccountList = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  SyncCustomerPartyAccountList: {
      type: "TypeSyncCustomerPartyAccountListType",
      wsdlDefinition: {
        name: "SyncCustomerPartyAccountList",
        type: "SyncCustomerPartyAccountListType",
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
	  SyncCustomerPartyAccountList: {
      type: "TypeSyncCustomerPartyAccountListType",
      wsdlDefinition: {
        name: "SyncCustomerPartyAccountList",
        type: "SyncCustomerPartyAccountListType",
        ns: "WL5G3N1",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementSyncCustomerPartyAccountList;
Modeler.register(ElementSyncCustomerPartyAccountList, "ElementSyncCustomerPartyAccountList");
