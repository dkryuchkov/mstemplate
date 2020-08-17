var Modeler = require("../Modeler.js");
var className = 'ElementProductionOrderReference';

var ElementProductionOrderReference = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  ProductionOrderReference: {
      type: "TypeProductionOrderReferenceType",
      wsdlDefinition: {
        name: "ProductionOrderReference",
        type: "ProductionOrderReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Reference to a production order within a bach production order"
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
	  ProductionOrderReference: {
      type: "TypeProductionOrderReferenceType",
      wsdlDefinition: {
        name: "ProductionOrderReference",
        type: "ProductionOrderReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Reference to a production order within a bach production order"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementProductionOrderReference;
Modeler.register(ElementProductionOrderReference, "ElementProductionOrderReference");
