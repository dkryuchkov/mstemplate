var Modeler = require("../Modeler.js");
var className = 'ElementProductionOrderMaterialReference';

var ElementProductionOrderMaterialReference = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  ProductionOrderMaterialReference: {
      type: "TypeProductionOrderMaterialReferenceType",
      wsdlDefinition: {
        name: "ProductionOrderMaterialReference",
        type: "ProductionOrderMaterialReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Reference to a material in a production order"
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
	  ProductionOrderMaterialReference: {
      type: "TypeProductionOrderMaterialReferenceType",
      wsdlDefinition: {
        name: "ProductionOrderMaterialReference",
        type: "ProductionOrderMaterialReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Reference to a material in a production order"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementProductionOrderMaterialReference;
Modeler.register(ElementProductionOrderMaterialReference, "ElementProductionOrderMaterialReference");
