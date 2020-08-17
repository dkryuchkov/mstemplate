var Modeler = require("../Modeler.js");
var className = 'ElementOverPickPercentTolerance';

var ElementOverPickPercentTolerance = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  OverPickPercentTolerance: {
      type: "TypePercentToleranceType",
      wsdlDefinition: {
        name: "OverPickPercentTolerance",
        type: "PercentToleranceType",
        "xsd:annotation": {
          "xsd:documentation": "Allowed tolerance percentage of Over Picking of the material"
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
	  OverPickPercentTolerance: {
      type: "TypePercentToleranceType",
      wsdlDefinition: {
        name: "OverPickPercentTolerance",
        type: "PercentToleranceType",
        "xsd:annotation": {
          "xsd:documentation": "Allowed tolerance percentage of Over Picking of the material"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementOverPickPercentTolerance;
Modeler.register(ElementOverPickPercentTolerance, "ElementOverPickPercentTolerance");
