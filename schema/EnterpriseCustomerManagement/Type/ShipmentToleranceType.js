var Modeler = require("../Modeler.js");
var className = 'TypeShipmentToleranceType';

var TypeShipmentToleranceType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  QuantityTolerance: {
      type: "TypeQuantityToleranceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:QuantityTolerance",
        type: "QuantityToleranceType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    PercentTolerance: {
      type: "TypePercentToleranceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:PercentTolerance",
        type: "PercentToleranceType",
        attribute: false,
        ns: "WL5G3N2"
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
        minOccurs: "0",
        name: "WL5G3N2:QuantityTolerance",
        type: "QuantityToleranceType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    PercentTolerance: {
      type: "TypePercentToleranceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:PercentTolerance",
        type: "PercentToleranceType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeShipmentToleranceType;
Modeler.register(TypeShipmentToleranceType, "TypeShipmentToleranceType");
