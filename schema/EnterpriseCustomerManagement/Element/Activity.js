var Modeler = require("../Modeler.js");
var className = 'ElementActivity';

var ElementActivity = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  Activity: {
      type: "TypeActivityType",
      wsdlDefinition: {
        name: "Activity",
        type: "ActivityType",
        "xsd:annotation": {
          "xsd:documentation": "An Activity represents a definition of what the action is (not including its usage and occurrence)."
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
	  Activity: {
      type: "TypeActivityType",
      wsdlDefinition: {
        name: "Activity",
        type: "ActivityType",
        "xsd:annotation": {
          "xsd:documentation": "An Activity represents a definition of what the action is (not including its usage and occurrence)."
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementActivity;
Modeler.register(ElementActivity, "ElementActivity");
