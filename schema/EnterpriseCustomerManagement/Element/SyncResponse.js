var Modeler = require("../Modeler.js");
var className = 'ElementSyncResponse';

var ElementSyncResponse = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  SyncResponse: {
      type: "TypeSyncResponseType",
      wsdlDefinition: {
        name: "SyncResponse",
        type: "SyncResponseType",
        ns: "WL5G3N2",
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
	  SyncResponse: {
      type: "TypeSyncResponseType",
      wsdlDefinition: {
        name: "SyncResponse",
        type: "SyncResponseType",
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementSyncResponse;
Modeler.register(ElementSyncResponse, "ElementSyncResponse");
