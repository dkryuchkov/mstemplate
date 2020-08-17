var Modeler = require("../Modeler.js");
var className = 'ElementProductionOrderOperationReference';

var ElementProductionOrderOperationReference = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  ProductionOrderOperationReference: {
      type: "TypeProductionOrderOperationReferenceType",
      wsdlDefinition: {
        name: "ProductionOrderOperationReference",
        type: "ProductionOrderOperationReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Reference to an operation within a production order"
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
	  ProductionOrderOperationReference: {
      type: "TypeProductionOrderOperationReferenceType",
      wsdlDefinition: {
        name: "ProductionOrderOperationReference",
        type: "ProductionOrderOperationReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Reference to an operation within a production order"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementProductionOrderOperationReference;
Modeler.register(ElementProductionOrderOperationReference, "ElementProductionOrderOperationReference");
