var Modeler = require("../Modeler.js");
var className = 'ElementSyncCustomerPartyAccountListEBM';

var ElementSyncCustomerPartyAccountListEBM = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  SyncCustomerPartyAccountListEBM: {
      type: "TypeSyncCustomerPartyAccountListEBMType",
      wsdlDefinition: {
        name: "SyncCustomerPartyAccountListEBM",
        type: "SyncCustomerPartyAccountListEBMType",
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
	  SyncCustomerPartyAccountListEBM: {
      type: "TypeSyncCustomerPartyAccountListEBMType",
      wsdlDefinition: {
        name: "SyncCustomerPartyAccountListEBM",
        type: "SyncCustomerPartyAccountListEBMType",
        ns: "WL5G3N1",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementSyncCustomerPartyAccountListEBM;
Modeler.register(ElementSyncCustomerPartyAccountListEBM, "ElementSyncCustomerPartyAccountListEBM");
