var Modeler = require("../Modeler.js");
var className = 'ElementSyncCustomerPartyListResponseEBM';

var ElementSyncCustomerPartyListResponseEBM = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  SyncCustomerPartyListResponseEBM: {
      type: "TypeSyncCustomerPartyListResponseEBMType",
      wsdlDefinition: {
        name: "SyncCustomerPartyListResponseEBM",
        type: "SyncCustomerPartyListResponseEBMType",
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
	  SyncCustomerPartyListResponseEBM: {
      type: "TypeSyncCustomerPartyListResponseEBMType",
      wsdlDefinition: {
        name: "SyncCustomerPartyListResponseEBM",
        type: "SyncCustomerPartyListResponseEBMType",
        ns: "WL5G3N1",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementSyncCustomerPartyListResponseEBM;
Modeler.register(ElementSyncCustomerPartyListResponseEBM, "ElementSyncCustomerPartyListResponseEBM");
