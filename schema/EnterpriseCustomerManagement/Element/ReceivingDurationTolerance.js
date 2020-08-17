var Modeler = require("../Modeler.js");
var className = 'ElementReceivingDurationTolerance';

var ElementReceivingDurationTolerance = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  ReceivingDurationTolerance: {
      type: "TypeDurationToleranceType",
      wsdlDefinition: {
        name: "ReceivingDurationTolerance",
        type: "DurationToleranceType",
        "xsd:annotation": {
          "xsd:documentation": "Receiving Duration Tolerance"
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
	  ReceivingDurationTolerance: {
      type: "TypeDurationToleranceType",
      wsdlDefinition: {
        name: "ReceivingDurationTolerance",
        type: "DurationToleranceType",
        "xsd:annotation": {
          "xsd:documentation": "Receiving Duration Tolerance"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementReceivingDurationTolerance;
Modeler.register(ElementReceivingDurationTolerance, "ElementReceivingDurationTolerance");
