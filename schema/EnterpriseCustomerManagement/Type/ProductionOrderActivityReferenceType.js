var Modeler = require("../Modeler.js");
var className = 'TypeProductionOrderActivityReferenceType';

var TypeProductionOrderActivityReferenceType = function(json, parentObj) {
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
    ProductionOrderActivityIdentification: {
      type: "TypeProductionOrderActivityIdentificationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:ProductionOrderActivityIdentification",
        type: "ProductionOrderActivityIdentificationType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Custom: {
      type: "TypeCustomProductionOrderActivityReferenceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Custom",
        type: "corecomcust:CustomProductionOrderActivityReferenceType",
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
    ProductionOrderActivityIdentification: {
      type: "TypeProductionOrderActivityIdentificationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:ProductionOrderActivityIdentification",
        type: "ProductionOrderActivityIdentificationType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Custom: {
      type: "TypeCustomProductionOrderActivityReferenceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Custom",
        type: "corecomcust:CustomProductionOrderActivityReferenceType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeProductionOrderActivityReferenceType;
Modeler.register(TypeProductionOrderActivityReferenceType, "TypeProductionOrderActivityReferenceType");
