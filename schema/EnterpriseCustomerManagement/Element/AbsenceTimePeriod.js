var Modeler = require("../Modeler.js");
var className = 'ElementAbsenceTimePeriod';

var ElementAbsenceTimePeriod = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  AbsenceTimePeriod: {
      type: "TypeTimePeriodType",
      wsdlDefinition: {
        name: "AbsenceTimePeriod",
        type: "TimePeriodType",
        "xsd:annotation": {
          "xsd:documentation": "Period of time during which an employee was unable to work"
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
	  AbsenceTimePeriod: {
      type: "TypeTimePeriodType",
      wsdlDefinition: {
        name: "AbsenceTimePeriod",
        type: "TimePeriodType",
        "xsd:annotation": {
          "xsd:documentation": "Period of time during which an employee was unable to work"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementAbsenceTimePeriod;
Modeler.register(ElementAbsenceTimePeriod, "ElementAbsenceTimePeriod");
