var Modeler = require("../Modeler.js");
var className = 'TypeManufacturingRoutingActivityReferenceType';

var TypeManufacturingRoutingActivityReferenceType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  ManufacturingRoutingIdentification: {
      type: "TypeManufacturingRoutingIdentificationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:ManufacturingRoutingIdentification",
        type: "ManufacturingRoutingIdentificationType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    ManufacturingRoutingOperationIdentification: {
      type: "TypeManufacturingRoutingOperationIdentificationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:ManufacturingRoutingOperationIdentification",
        type: "ManufacturingRoutingOperationIdentificationType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    ManufacturingRoutingActivityIdentification: {
      type: "TypeManufacturingRoutingActivityIdentificationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:ManufacturingRoutingActivityIdentification",
        type: "ManufacturingRoutingActivityIdentificationType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Custom: {
      type: "TypeCustomManufacturingRoutingActivityReferenceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Custom",
        type: "corecomcust:CustomManufacturingRoutingActivityReferenceType",
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
	  ManufacturingRoutingIdentification: {
      type: "TypeManufacturingRoutingIdentificationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:ManufacturingRoutingIdentification",
        type: "ManufacturingRoutingIdentificationType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    ManufacturingRoutingOperationIdentification: {
      type: "TypeManufacturingRoutingOperationIdentificationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:ManufacturingRoutingOperationIdentification",
        type: "ManufacturingRoutingOperationIdentificationType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    ManufacturingRoutingActivityIdentification: {
      type: "TypeManufacturingRoutingActivityIdentificationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:ManufacturingRoutingActivityIdentification",
        type: "ManufacturingRoutingActivityIdentificationType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Custom: {
      type: "TypeCustomManufacturingRoutingActivityReferenceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Custom",
        type: "corecomcust:CustomManufacturingRoutingActivityReferenceType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeManufacturingRoutingActivityReferenceType;
Modeler.register(TypeManufacturingRoutingActivityReferenceType, "TypeManufacturingRoutingActivityReferenceType");
