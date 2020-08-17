var Modeler = require("../Modeler.js");
var className = 'ElementReceivingQuantityPercentTolerance';

var ElementReceivingQuantityPercentTolerance = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  ReceivingQuantityPercentTolerance: {
      type: "TypePercentToleranceType",
      wsdlDefinition: {
        name: "ReceivingQuantityPercentTolerance",
        type: "PercentToleranceType",
        "xsd:annotation": {
          "xsd:documentation": "Percentage Toelerance applicable for receipt of items"
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
	  ReceivingQuantityPercentTolerance: {
      type: "TypePercentToleranceType",
      wsdlDefinition: {
        name: "ReceivingQuantityPercentTolerance",
        type: "PercentToleranceType",
        "xsd:annotation": {
          "xsd:documentation": "Percentage Toelerance applicable for receipt of items"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementReceivingQuantityPercentTolerance;
Modeler.register(ElementReceivingQuantityPercentTolerance, "ElementReceivingQuantityPercentTolerance");
