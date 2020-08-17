var Modeler = require("../Modeler.js");
var className = 'ElementProductionOrderResourceIdentification';

var ElementProductionOrderResourceIdentification = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  ProductionOrderResourceIdentification: {
      type: "TypeProductionOrderResourceIdentificationType",
      wsdlDefinition: {
        name: "ProductionOrderResourceIdentification",
        type: "ProductionOrderResourceIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Unique identification of resource in a production order"
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
	  ProductionOrderResourceIdentification: {
      type: "TypeProductionOrderResourceIdentificationType",
      wsdlDefinition: {
        name: "ProductionOrderResourceIdentification",
        type: "ProductionOrderResourceIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Unique identification of resource in a production order"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementProductionOrderResourceIdentification;
Modeler.register(ElementProductionOrderResourceIdentification, "ElementProductionOrderResourceIdentification");
