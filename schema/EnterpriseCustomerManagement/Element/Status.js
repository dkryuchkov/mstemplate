var Modeler = require("../Modeler.js");
var className = 'ElementStatus';

var ElementStatus = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  Status: {
      type: "TypeStatusType",
      wsdlDefinition: {
        name: "Status",
        type: "StatusType",
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
	  Status: {
      type: "TypeStatusType",
      wsdlDefinition: {
        name: "Status",
        type: "StatusType",
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementStatus;
Modeler.register(ElementStatus, "ElementStatus");
