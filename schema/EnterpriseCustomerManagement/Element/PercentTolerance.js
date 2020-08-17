var Modeler = require("../Modeler.js");
var className = 'ElementPercentTolerance';

var ElementPercentTolerance = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  PercentTolerance: {
      type: "TypePercentToleranceType",
      wsdlDefinition: {
        name: "PercentTolerance",
        type: "PercentToleranceType",
        "xsd:annotation": {
          "xsd:documentation": "Tolerance expressed as a precentage"
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
	  PercentTolerance: {
      type: "TypePercentToleranceType",
      wsdlDefinition: {
        name: "PercentTolerance",
        type: "PercentToleranceType",
        "xsd:annotation": {
          "xsd:documentation": "Tolerance expressed as a precentage"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementPercentTolerance;
Modeler.register(ElementPercentTolerance, "ElementPercentTolerance");
