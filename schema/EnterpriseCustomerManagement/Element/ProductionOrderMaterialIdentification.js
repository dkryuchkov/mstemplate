var Modeler = require("../Modeler.js");
var className = 'ElementProductionOrderMaterialIdentification';

var ElementProductionOrderMaterialIdentification = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  ProductionOrderMaterialIdentification: {
      type: "TypeProductionOrderMaterialIdentificationType",
      wsdlDefinition: {
        name: "ProductionOrderMaterialIdentification",
        type: "ProductionOrderMaterialIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Unique identification of a production order material"
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
	  ProductionOrderMaterialIdentification: {
      type: "TypeProductionOrderMaterialIdentificationType",
      wsdlDefinition: {
        name: "ProductionOrderMaterialIdentification",
        type: "ProductionOrderMaterialIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Unique identification of a production order material"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementProductionOrderMaterialIdentification;
Modeler.register(ElementProductionOrderMaterialIdentification, "ElementProductionOrderMaterialIdentification");
