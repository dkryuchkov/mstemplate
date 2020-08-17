var Modeler = require("../Modeler.js");
var className = 'ElementRecoveryTimePeriod';

var ElementRecoveryTimePeriod = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  RecoveryTimePeriod: {
      type: "TypeRecoveryTimePeriodType",
      wsdlDefinition: {
        name: "RecoveryTimePeriod",
        type: "RecoveryTimePeriodType",
        "xsd:annotation": {
          "xsd:documentation": "A time period used for recovery from an issue such as failure, illness, or injury."
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
	  RecoveryTimePeriod: {
      type: "TypeRecoveryTimePeriodType",
      wsdlDefinition: {
        name: "RecoveryTimePeriod",
        type: "RecoveryTimePeriodType",
        "xsd:annotation": {
          "xsd:documentation": "A time period used for recovery from an issue such as failure, illness, or injury."
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementRecoveryTimePeriod;
Modeler.register(ElementRecoveryTimePeriod, "ElementRecoveryTimePeriod");
