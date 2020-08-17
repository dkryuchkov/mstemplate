var Modeler = require("../Modeler.js");
var className = 'ElementReturnPercentTolerance';

var ElementReturnPercentTolerance = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  ReturnPercentTolerance: {
      type: "TypePercentToleranceType",
      wsdlDefinition: {
        name: "ReturnPercentTolerance",
        type: "PercentToleranceType",
        "xsd:annotation": {
          "xsd:documentation": "The return tolerance percentage for the item"
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
	  ReturnPercentTolerance: {
      type: "TypePercentToleranceType",
      wsdlDefinition: {
        name: "ReturnPercentTolerance",
        type: "PercentToleranceType",
        "xsd:annotation": {
          "xsd:documentation": "The return tolerance percentage for the item"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementReturnPercentTolerance;
Modeler.register(ElementReturnPercentTolerance, "ElementReturnPercentTolerance");
