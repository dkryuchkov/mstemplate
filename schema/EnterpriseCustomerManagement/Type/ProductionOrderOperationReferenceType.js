var Modeler = require("../Modeler.js");
var className = 'TypeProductionOrderOperationReferenceType';

var TypeProductionOrderOperationReferenceType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  BatchProductionOrderIdentification: {
      type: "TypeBatchProductionOrderIdentificationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:BatchProductionOrderIdentification",
        type: "BatchProductionOrderIdentificationType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    ProductionOrderIdentification: {
      type: "TypeProductionOrderIdentificationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:ProductionOrderIdentification",
        type: "ProductionOrderIdentificationType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    ProductionOrderOperationIdentification: {
      type: "TypeProductionOrderOperationIdentificationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:ProductionOrderOperationIdentification",
        type: "ProductionOrderOperationIdentificationType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Custom: {
      type: "TypeCustomProductionOrderOperationReferenceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Custom",
        type: "corecomcust:CustomProductionOrderOperationReferenceType",
        attribute: false,
        ns: "WL5G3N2"
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
	  BatchProductionOrderIdentification: {
      type: "TypeBatchProductionOrderIdentificationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:BatchProductionOrderIdentification",
        type: "BatchProductionOrderIdentificationType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    ProductionOrderIdentification: {
      type: "TypeProductionOrderIdentificationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:ProductionOrderIdentification",
        type: "ProductionOrderIdentificationType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    ProductionOrderOperationIdentification: {
      type: "TypeProductionOrderOperationIdentificationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:ProductionOrderOperationIdentification",
        type: "ProductionOrderOperationIdentificationType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Custom: {
      type: "TypeCustomProductionOrderOperationReferenceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Custom",
        type: "corecomcust:CustomProductionOrderOperationReferenceType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeProductionOrderOperationReferenceType;
Modeler.register(TypeProductionOrderOperationReferenceType, "TypeProductionOrderOperationReferenceType");
