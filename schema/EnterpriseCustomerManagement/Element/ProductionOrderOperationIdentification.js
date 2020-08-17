var Modeler = require("../Modeler.js");
var className = 'ElementProductionOrderOperationIdentification';

var ElementProductionOrderOperationIdentification = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  ProductionOrderOperationIdentification: {
      type: "TypeProductionOrderOperationIdentificationType",
      wsdlDefinition: {
        name: "ProductionOrderOperationIdentification",
        type: "ProductionOrderOperationIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Unique identification of an operation in a production order"
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
	  ProductionOrderOperationIdentification: {
      type: "TypeProductionOrderOperationIdentificationType",
      wsdlDefinition: {
        name: "ProductionOrderOperationIdentification",
        type: "ProductionOrderOperationIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Unique identification of an operation in a production order"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementProductionOrderOperationIdentification;
Modeler.register(ElementProductionOrderOperationIdentification, "ElementProductionOrderOperationIdentification");
