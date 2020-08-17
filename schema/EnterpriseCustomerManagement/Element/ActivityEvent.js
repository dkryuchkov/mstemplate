var Modeler = require("../Modeler.js");
var className = 'ElementActivityEvent';

var ElementActivityEvent = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  ActivityEvent: {
      type: "TypeActivityEventType",
      wsdlDefinition: {
        name: "ActivityEvent",
        type: "ActivityEventType",
        "xsd:annotation": {
          "xsd:documentation": "An ActivityEvent captures occurrence information of an Activity"
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
	  ActivityEvent: {
      type: "TypeActivityEventType",
      wsdlDefinition: {
        name: "ActivityEvent",
        type: "ActivityEventType",
        "xsd:annotation": {
          "xsd:documentation": "An ActivityEvent captures occurrence information of an Activity"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementActivityEvent;
Modeler.register(ElementActivityEvent, "ElementActivityEvent");
