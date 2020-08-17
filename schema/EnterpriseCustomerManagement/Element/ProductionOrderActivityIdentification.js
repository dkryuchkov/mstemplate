var Modeler = require("../Modeler.js");
var className = 'ElementProductionOrderActivityIdentification';

var ElementProductionOrderActivityIdentification = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  ProductionOrderActivityIdentification: {
      type: "TypeProductionOrderActivityIdentificationType",
      wsdlDefinition: {
        name: "ProductionOrderActivityIdentification",
        type: "ProductionOrderActivityIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Unique identification of an activity of an operation in a production order"
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
	  ProductionOrderActivityIdentification: {
      type: "TypeProductionOrderActivityIdentificationType",
      wsdlDefinition: {
        name: "ProductionOrderActivityIdentification",
        type: "ProductionOrderActivityIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Unique identification of an activity of an operation in a production order"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementProductionOrderActivityIdentification;
Modeler.register(ElementProductionOrderActivityIdentification, "ElementProductionOrderActivityIdentification");
