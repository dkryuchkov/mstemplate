var Modeler = require("../Modeler.js");
var className = 'ElementSync';

var ElementSync = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  Sync: {
      type: "TypeSyncType",
      wsdlDefinition: {
        name: "Sync",
        type: "SyncType",
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
	  Sync: {
      type: "TypeSyncType",
      wsdlDefinition: {
        name: "Sync",
        type: "SyncType",
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementSync;
Modeler.register(ElementSync, "ElementSync");
