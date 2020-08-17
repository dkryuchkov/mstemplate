var Modeler = require("../Modeler.js");
var className = 'ElementBatchProductionOrderIdentification';

var ElementBatchProductionOrderIdentification = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  BatchProductionOrderIdentification: {
      type: "TypeBatchProductionOrderIdentificationType",
      wsdlDefinition: {
        name: "BatchProductionOrderIdentification",
        type: "BatchProductionOrderIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Unique identfication of a batch production order"
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
	  BatchProductionOrderIdentification: {
      type: "TypeBatchProductionOrderIdentificationType",
      wsdlDefinition: {
        name: "BatchProductionOrderIdentification",
        type: "BatchProductionOrderIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Unique identfication of a batch production order"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementBatchProductionOrderIdentification;
Modeler.register(ElementBatchProductionOrderIdentification, "ElementBatchProductionOrderIdentification");
