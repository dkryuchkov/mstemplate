var Modeler = require("../Modeler.js");
var className = 'ElementInterestSchedule';

var ElementInterestSchedule = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  InterestSchedule: {
      type: "TypeInterestScheduleType",
      wsdlDefinition: {
        name: "InterestSchedule",
        type: "InterestScheduleType",
        "xsd:annotation": {
          "xsd:documentation": "Captures interest rate details of a financial account",
          "xsd:appinfo": {
            "ebocontext:BusinessContext": "BankingAndWealthManagement"
          }
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
	  InterestSchedule: {
      type: "TypeInterestScheduleType",
      wsdlDefinition: {
        name: "InterestSchedule",
        type: "InterestScheduleType",
        "xsd:annotation": {
          "xsd:documentation": "Captures interest rate details of a financial account",
          "xsd:appinfo": {
            "ebocontext:BusinessContext": "BankingAndWealthManagement"
          }
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementInterestSchedule;
Modeler.register(ElementInterestSchedule, "ElementInterestSchedule");
