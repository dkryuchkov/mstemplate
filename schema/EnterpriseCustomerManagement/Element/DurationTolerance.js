var Modeler = require("../Modeler.js");
var className = 'ElementDurationTolerance';

var ElementDurationTolerance = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  DurationTolerance: {
      type: "TypeDurationToleranceType",
      wsdlDefinition: {
        name: "DurationTolerance",
        type: "DurationToleranceType",
        "xsd:annotation": {
          "xsd:documentation": "Tolerance expressed as a duration"
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
	  DurationTolerance: {
      type: "TypeDurationToleranceType",
      wsdlDefinition: {
        name: "DurationTolerance",
        type: "DurationToleranceType",
        "xsd:annotation": {
          "xsd:documentation": "Tolerance expressed as a duration"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementDurationTolerance;
Modeler.register(ElementDurationTolerance, "ElementDurationTolerance");
