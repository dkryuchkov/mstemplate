var Modeler = require("../Modeler.js");
var className = 'ElementBatchProductionOrderReference';

var ElementBatchProductionOrderReference = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  BatchProductionOrderReference: {
      type: "TypeBatchProductionOrderReferenceType",
      wsdlDefinition: {
        name: "BatchProductionOrderReference",
        type: "BatchProductionOrderReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Reference to a batch production order"
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
	  BatchProductionOrderReference: {
      type: "TypeBatchProductionOrderReferenceType",
      wsdlDefinition: {
        name: "BatchProductionOrderReference",
        type: "BatchProductionOrderReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Reference to a batch production order"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementBatchProductionOrderReference;
Modeler.register(ElementBatchProductionOrderReference, "ElementBatchProductionOrderReference");
