var Modeler = require("../Modeler.js");
var className = 'TypeFulfillmentOrderLineReferenceType';

var TypeFulfillmentOrderLineReferenceType = function(json, parentObj) {
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
    Custom: {
      type: "TypeCustomFulfillmentOrderLineReferenceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Custom",
        type: "corecomcust:CustomFulfillmentOrderLineReferenceType",
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
    Custom: {
      type: "TypeCustomFulfillmentOrderLineReferenceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Custom",
        type: "corecomcust:CustomFulfillmentOrderLineReferenceType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeFulfillmentOrderLineReferenceType;
Modeler.register(TypeFulfillmentOrderLineReferenceType, "TypeFulfillmentOrderLineReferenceType");
