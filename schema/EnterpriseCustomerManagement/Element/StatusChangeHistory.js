var Modeler = require("../Modeler.js");
var className = 'ElementStatusChangeHistory';

var ElementStatusChangeHistory = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  StatusChangeHistory: {
      type: "TypeStatusChangeHistoryType",
      wsdlDefinition: {
        name: "StatusChangeHistory",
        type: "StatusChangeHistoryType",
        "xsd:annotation": {
          "xsd:documentation": "A record of the different statuses of an object over time. Status Change History may or may not record all statuses an object or component has been through, i.e., only important status may be recorded. In a normal (create) instance, the FromStatusCode field may not be present which will mean the ToStatusCode is an initial status"
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
	  StatusChangeHistory: {
      type: "TypeStatusChangeHistoryType",
      wsdlDefinition: {
        name: "StatusChangeHistory",
        type: "StatusChangeHistoryType",
        "xsd:annotation": {
          "xsd:documentation": "A record of the different statuses of an object over time. Status Change History may or may not record all statuses an object or component has been through, i.e., only important status may be recorded. In a normal (create) instance, the FromStatusCode field may not be present which will mean the ToStatusCode is an initial status"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementStatusChangeHistory;
Modeler.register(ElementStatusChangeHistory, "ElementStatusChangeHistory");
