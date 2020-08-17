var Modeler = require("../Modeler.js");
var className = 'ElementProductionOrderIdentification';

var ElementProductionOrderIdentification = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  ProductionOrderIdentification: {
      type: "TypeProductionOrderIdentificationType",
      wsdlDefinition: {
        name: "ProductionOrderIdentification",
        type: "ProductionOrderIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Unique identification of production order"
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
	  ProductionOrderIdentification: {
      type: "TypeProductionOrderIdentificationType",
      wsdlDefinition: {
        name: "ProductionOrderIdentification",
        type: "ProductionOrderIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Unique identification of production order"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementProductionOrderIdentification;
Modeler.register(ElementProductionOrderIdentification, "ElementProductionOrderIdentification");
