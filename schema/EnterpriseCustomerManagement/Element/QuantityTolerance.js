var Modeler = require("../Modeler.js");
var className = 'ElementQuantityTolerance';

var ElementQuantityTolerance = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  QuantityTolerance: {
      type: "TypeQuantityToleranceType",
      wsdlDefinition: {
        name: "QuantityTolerance",
        type: "QuantityToleranceType",
        "xsd:annotation": {
          "xsd:documentation": "Tolerance expressed as quantity"
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
	  QuantityTolerance: {
      type: "TypeQuantityToleranceType",
      wsdlDefinition: {
        name: "QuantityTolerance",
        type: "QuantityToleranceType",
        "xsd:annotation": {
          "xsd:documentation": "Tolerance expressed as quantity"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementQuantityTolerance;
Modeler.register(ElementQuantityTolerance, "ElementQuantityTolerance");
