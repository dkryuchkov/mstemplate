var Modeler = require("../Modeler.js");
var className = 'ElementToStatus';

var ElementToStatus = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  ToStatus: {
      type: "TypeStatusType",
      wsdlDefinition: {
        name: "ToStatus",
        type: "StatusType",
        "xsd:annotation": {
          "xsd:documentation": "The new status of an object in a status change event"
        },
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
	  ToStatus: {
      type: "TypeStatusType",
      wsdlDefinition: {
        name: "ToStatus",
        type: "StatusType",
        "xsd:annotation": {
          "xsd:documentation": "The new status of an object in a status change event"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementToStatus;
Modeler.register(ElementToStatus, "ElementToStatus");
