var Modeler = require("../Modeler.js");
var className = 'TypeWorkOrderLineReferenceType';

var TypeWorkOrderLineReferenceType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  WorkOrderIdentification: {
      type: "TypeWorkOrderIdentificationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:WorkOrderIdentification",
        type: "WorkOrderIdentificationType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    WorkOrderLineIdentification: {
      type: "TypeWorkOrderLineIdentificationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:WorkOrderLineIdentification",
        type: "WorkOrderLineIdentificationType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Custom: {
      type: "TypeCustomWorkOrderLineReferenceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Custom",
        type: "corecomcust:CustomWorkOrderLineReferenceType",
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
	  WorkOrderIdentification: {
      type: "TypeWorkOrderIdentificationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:WorkOrderIdentification",
        type: "WorkOrderIdentificationType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    WorkOrderLineIdentification: {
      type: "TypeWorkOrderLineIdentificationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:WorkOrderLineIdentification",
        type: "WorkOrderLineIdentificationType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Custom: {
      type: "TypeCustomWorkOrderLineReferenceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Custom",
        type: "corecomcust:CustomWorkOrderLineReferenceType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeWorkOrderLineReferenceType;
Modeler.register(TypeWorkOrderLineReferenceType, "TypeWorkOrderLineReferenceType");
