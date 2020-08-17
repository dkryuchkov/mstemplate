var Modeler = require("../Modeler.js");
var className = 'ElementStandardWorkingHoursTimeDuration';

var ElementStandardWorkingHoursTimeDuration = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  StandardWorkingHoursTimeDuration: {
      type: "TypeStandardWorkingHoursTimeDurationType",
      wsdlDefinition: {
        name: "StandardWorkingHoursTimeDuration",
        type: "StandardWorkingHoursTimeDurationType",
        "xsd:annotation": {
          "xsd:documentation": "Regular daily work day start time and end time, e.g., 8am-5pm standard working hours"
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
	  StandardWorkingHoursTimeDuration: {
      type: "TypeStandardWorkingHoursTimeDurationType",
      wsdlDefinition: {
        name: "StandardWorkingHoursTimeDuration",
        type: "StandardWorkingHoursTimeDurationType",
        "xsd:annotation": {
          "xsd:documentation": "Regular daily work day start time and end time, e.g., 8am-5pm standard working hours"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementStandardWorkingHoursTimeDuration;
Modeler.register(ElementStandardWorkingHoursTimeDuration, "ElementStandardWorkingHoursTimeDuration");
