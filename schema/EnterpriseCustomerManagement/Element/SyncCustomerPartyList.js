var Modeler = require("../Modeler.js");
var className = 'ElementSyncCustomerPartyList';

var ElementSyncCustomerPartyList = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  SyncCustomerPartyList: {
      type: "TypeSyncCustomerPartyListType",
      wsdlDefinition: {
        name: "SyncCustomerPartyList",
        type: "SyncCustomerPartyListType",
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
	  SyncCustomerPartyList: {
      type: "TypeSyncCustomerPartyListType",
      wsdlDefinition: {
        name: "SyncCustomerPartyList",
        type: "SyncCustomerPartyListType",
        ns: "WL5G3N1",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementSyncCustomerPartyList;
Modeler.register(ElementSyncCustomerPartyList, "ElementSyncCustomerPartyList");
