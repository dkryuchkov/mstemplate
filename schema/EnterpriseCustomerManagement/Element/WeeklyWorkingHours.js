var Modeler = require("../Modeler.js");
var className = 'ElementWeeklyWorkingHours';

var ElementWeeklyWorkingHours = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  WeeklyWorkingHours: {
      type: "TypeWeeklyWorkingHoursType",
      wsdlDefinition: {
        name: "WeeklyWorkingHours",
        type: "WeeklyWorkingHoursType",
        "xsd:annotation": {
          "xsd:documentation": "Hours on each day of the week that someone or something is supposed to be working (e.g., specify WeeklyWorkingHours for a Position)"
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
	  WeeklyWorkingHours: {
      type: "TypeWeeklyWorkingHoursType",
      wsdlDefinition: {
        name: "WeeklyWorkingHours",
        type: "WeeklyWorkingHoursType",
        "xsd:annotation": {
          "xsd:documentation": "Hours on each day of the week that someone or something is supposed to be working (e.g., specify WeeklyWorkingHours for a Position)"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementWeeklyWorkingHours;
Modeler.register(ElementWeeklyWorkingHours, "ElementWeeklyWorkingHours");
