var Modeler = require("../Modeler.js");
var className = 'ElementPhantomProductionOrderMaterialReference';

var ElementPhantomProductionOrderMaterialReference = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  PhantomProductionOrderMaterialReference: {
      type: "TypeProductionOrderMaterialReferenceType",
      wsdlDefinition: {
        name: "PhantomProductionOrderMaterialReference",
        type: "ProductionOrderMaterialReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Reference to the ProductionOrderMaterial in a Phantom ProductionOrder which produces the material in context (e.g., the containing production order)"
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
	  PhantomProductionOrderMaterialReference: {
      type: "TypeProductionOrderMaterialReferenceType",
      wsdlDefinition: {
        name: "PhantomProductionOrderMaterialReference",
        type: "ProductionOrderMaterialReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Reference to the ProductionOrderMaterial in a Phantom ProductionOrder which produces the material in context (e.g., the containing production order)"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementPhantomProductionOrderMaterialReference;
Modeler.register(ElementPhantomProductionOrderMaterialReference, "ElementPhantomProductionOrderMaterialReference");
