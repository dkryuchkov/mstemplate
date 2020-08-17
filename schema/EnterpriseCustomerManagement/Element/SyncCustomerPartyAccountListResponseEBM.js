var Modeler = require("../Modeler.js");
var className = 'ElementSyncCustomerPartyAccountListResponseEBM';

var ElementSyncCustomerPartyAccountListResponseEBM = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  SyncCustomerPartyAccountListResponseEBM: {
      type: "TypeSyncCustomerPartyAccountListResponseEBMType",
      wsdlDefinition: {
        name: "SyncCustomerPartyAccountListResponseEBM",
        type: "SyncCustomerPartyAccountListResponseEBMType",
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
	  SyncCustomerPartyAccountListResponseEBM: {
      type: "TypeSyncCustomerPartyAccountListResponseEBMType",
      wsdlDefinition: {
        name: "SyncCustomerPartyAccountListResponseEBM",
        type: "SyncCustomerPartyAccountListResponseEBMType",
        ns: "WL5G3N1",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementSyncCustomerPartyAccountListResponseEBM;
Modeler.register(ElementSyncCustomerPartyAccountListResponseEBM, "ElementSyncCustomerPartyAccountListResponseEBM");
