var Modeler = require("../Modeler.js");
var className = 'ElementDependentProductionOrderMaterialReference';

var ElementDependentProductionOrderMaterialReference = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  DependentProductionOrderMaterialReference: {
      type: "TypeProductionOrderMaterialReferenceType",
      wsdlDefinition: {
        name: "DependentProductionOrderMaterialReference",
        type: "ProductionOrderMaterialReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Reference to the Production Order ingredient line. This is a reference to the production order material in another production order for which this production order produces."
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
	  DependentProductionOrderMaterialReference: {
      type: "TypeProductionOrderMaterialReferenceType",
      wsdlDefinition: {
        name: "DependentProductionOrderMaterialReference",
        type: "ProductionOrderMaterialReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Reference to the Production Order ingredient line. This is a reference to the production order material in another production order for which this production order produces."
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementDependentProductionOrderMaterialReference;
Modeler.register(ElementDependentProductionOrderMaterialReference, "ElementDependentProductionOrderMaterialReference");
