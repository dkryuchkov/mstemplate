var Modeler = require("../Modeler.js");
var className = 'ElementWorkRestrictionTimePeriod';

var ElementWorkRestrictionTimePeriod = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  WorkRestrictionTimePeriod: {
      type: "TypeTimePeriodType",
      wsdlDefinition: {
        name: "WorkRestrictionTimePeriod",
        type: "TimePeriodType",
        "xsd:annotation": {
          "xsd:documentation": "Period of time during which an employee was placed on restricted work"
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
	  WorkRestrictionTimePeriod: {
      type: "TypeTimePeriodType",
      wsdlDefinition: {
        name: "WorkRestrictionTimePeriod",
        type: "TimePeriodType",
        "xsd:annotation": {
          "xsd:documentation": "Period of time during which an employee was placed on restricted work"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementWorkRestrictionTimePeriod;
Modeler.register(ElementWorkRestrictionTimePeriod, "ElementWorkRestrictionTimePeriod");
