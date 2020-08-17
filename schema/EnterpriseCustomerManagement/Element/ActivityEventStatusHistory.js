var Modeler = require("../Modeler.js");
var className = 'ElementActivityEventStatusHistory';

var ElementActivityEventStatusHistory = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  ActivityEventStatusHistory: {
      type: "TypeActivityEventStatusHistoryType",
      wsdlDefinition: {
        name: "ActivityEventStatusHistory",
        type: "ActivityEventStatusHistoryType",
        "xsd:annotation": {
          "xsd:documentation": "This component allows for keeping track of history of statuses of an activity event/occurrence"
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
	  ActivityEventStatusHistory: {
      type: "TypeActivityEventStatusHistoryType",
      wsdlDefinition: {
        name: "ActivityEventStatusHistory",
        type: "ActivityEventStatusHistoryType",
        "xsd:annotation": {
          "xsd:documentation": "This component allows for keeping track of history of statuses of an activity event/occurrence"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementActivityEventStatusHistory;
Modeler.register(ElementActivityEventStatusHistory, "ElementActivityEventStatusHistory");
