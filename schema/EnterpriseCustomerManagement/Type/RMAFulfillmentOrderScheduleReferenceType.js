var Modeler = require("../Modeler.js");
var className = 'TypeRMAFulfillmentOrderScheduleReferenceType';

var TypeRMAFulfillmentOrderScheduleReferenceType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  FulfillmentOrderIdentification: {
      type: "TypeFulfillmentOrderIdentificationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:FulfillmentOrderIdentification",
        type: "FulfillmentOrderIdentificationType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    FulfillmentOrderLineIdentification: {
      type: "TypeFulfillmentOrderLineIdentificationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:FulfillmentOrderLineIdentification",
        type: "FulfillmentOrderLineIdentificationType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    FulfillmentOrderScheduleIdentification: {
      type: "TypeFulfillmentOrderScheduleIdentificationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:FulfillmentOrderScheduleIdentification",
        type: "FulfillmentOrderScheduleIdentificationType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    undefined: {
      type: "string",
      wsdlDefinition: {
        base: "FulfillmentOrderScheduleReferenceType",
        attribute: false,
        type: "xsd:string"
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
	  FulfillmentOrderIdentification: {
      type: "TypeFulfillmentOrderIdentificationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:FulfillmentOrderIdentification",
        type: "FulfillmentOrderIdentificationType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    FulfillmentOrderLineIdentification: {
      type: "TypeFulfillmentOrderLineIdentificationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:FulfillmentOrderLineIdentification",
        type: "FulfillmentOrderLineIdentificationType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    FulfillmentOrderScheduleIdentification: {
      type: "TypeFulfillmentOrderScheduleIdentificationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:FulfillmentOrderScheduleIdentification",
        type: "FulfillmentOrderScheduleIdentificationType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    undefined: {
      type: "string",
      wsdlDefinition: {
        base: "FulfillmentOrderScheduleReferenceType",
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeRMAFulfillmentOrderScheduleReferenceType;
Modeler.register(TypeRMAFulfillmentOrderScheduleReferenceType, "TypeRMAFulfillmentOrderScheduleReferenceType");
