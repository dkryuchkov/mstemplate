var Modeler = require("../Modeler.js");
var className = 'ElementTimeDuration';

var ElementTimeDuration = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  TimeDuration: {
      type: "TypeTimeDurationType",
      wsdlDefinition: {
        name: "TimeDuration",
        type: "TimeDurationType",
        "xsd:annotation": {
          "xsd:documentation": "This component allows a duration to be specified via a start time and an end time or a start time and a duration. Unlike the TimePeriod component which needs a DateTime this component needs only the Time. Consequently, it can be used within another component for specifying recurring occurrences of time periods for a period of time (e.g., a recurring meeting between 8am and 9am for 3 days). In general the length of time between the start time and end time or the duration component should be less than 24 hrs."
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
	  TimeDuration: {
      type: "TypeTimeDurationType",
      wsdlDefinition: {
        name: "TimeDuration",
        type: "TimeDurationType",
        "xsd:annotation": {
          "xsd:documentation": "This component allows a duration to be specified via a start time and an end time or a start time and a duration. Unlike the TimePeriod component which needs a DateTime this component needs only the Time. Consequently, it can be used within another component for specifying recurring occurrences of time periods for a period of time (e.g., a recurring meeting between 8am and 9am for 3 days). In general the length of time between the start time and end time or the duration component should be less than 24 hrs."
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementTimeDuration;
Modeler.register(ElementTimeDuration, "ElementTimeDuration");
