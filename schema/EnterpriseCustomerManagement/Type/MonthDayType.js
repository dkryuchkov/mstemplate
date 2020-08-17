var Modeler = require("../Modeler.js");
var className = 'TypeMonthDayType';

var TypeMonthDayType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  MonthDayType: {
      type: "string",
      wsdlDefinition: {
        name: "MonthDayType",
        "xsd:annotation": {
          "xsd:documentation": "A yearly recurring time point indicated by the month and the day of the month."
        },
        "xsd:restriction": {
          base: "xsd:gMonthDay"
        },
        attribute: false,
        type: "xsd:string"
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
	  MonthDayType: {
      type: "string",
      wsdlDefinition: {
        name: "MonthDayType",
        "xsd:annotation": {
          "xsd:documentation": "A yearly recurring time point indicated by the month and the day of the month."
        },
        "xsd:restriction": {
          base: "xsd:gMonthDay"
        },
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeMonthDayType;
Modeler.register(TypeMonthDayType, "TypeMonthDayType");
