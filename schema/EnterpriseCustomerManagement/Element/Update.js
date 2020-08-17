var Modeler = require("../Modeler.js");
var className = 'ElementUpdate';

var ElementUpdate = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  Update: {
      type: "TypeUpdateType",
      wsdlDefinition: {
        name: "Update",
        type: "UpdateType",
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
	  Update: {
      type: "TypeUpdateType",
      wsdlDefinition: {
        name: "Update",
        type: "UpdateType",
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementUpdate;
Modeler.register(ElementUpdate, "ElementUpdate");
