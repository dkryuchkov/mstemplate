var Modeler = require("../Modeler.js");
var className = 'ElementDeliveryDurationTolerance';

var ElementDeliveryDurationTolerance = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  DeliveryDurationTolerance: {
      type: "TypeDurationToleranceType",
      wsdlDefinition: {
        name: "DeliveryDurationTolerance",
        type: "DurationToleranceType",
        "xsd:annotation": {
          "xsd:documentation": "Delivery Duration Tolerance"
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
	  DeliveryDurationTolerance: {
      type: "TypeDurationToleranceType",
      wsdlDefinition: {
        name: "DeliveryDurationTolerance",
        type: "DurationToleranceType",
        "xsd:annotation": {
          "xsd:documentation": "Delivery Duration Tolerance"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementDeliveryDurationTolerance;
Modeler.register(ElementDeliveryDurationTolerance, "ElementDeliveryDurationTolerance");
