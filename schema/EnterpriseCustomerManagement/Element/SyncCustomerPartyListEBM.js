var Modeler = require("../Modeler.js");
var className = 'ElementSyncCustomerPartyListEBM';

var ElementSyncCustomerPartyListEBM = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  SyncCustomerPartyListEBM: {
      type: "TypeSyncCustomerPartyListEBMType",
      wsdlDefinition: {
        name: "SyncCustomerPartyListEBM",
        type: "SyncCustomerPartyListEBMType",
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
	  SyncCustomerPartyListEBM: {
      type: "TypeSyncCustomerPartyListEBMType",
      wsdlDefinition: {
        name: "SyncCustomerPartyListEBM",
        type: "SyncCustomerPartyListEBMType",
        ns: "WL5G3N1",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementSyncCustomerPartyListEBM;
Modeler.register(ElementSyncCustomerPartyListEBM, "ElementSyncCustomerPartyListEBM");
