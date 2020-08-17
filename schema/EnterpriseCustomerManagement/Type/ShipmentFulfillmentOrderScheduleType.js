var Modeler = require("../Modeler.js");
var className = 'TypeShipmentFulfillmentOrderScheduleType';

var TypeShipmentFulfillmentOrderScheduleType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  FulfillmentOrderScheduleReference: {
      type: "TypeFulfillmentOrderScheduleReferenceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:FulfillmentOrderScheduleReference",
        type: "FulfillmentOrderScheduleReferenceType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Custom: {
      type: "TypeCustomShipmentFulfillmentOrderScheduleType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Custom",
        type: "corecomcust:CustomShipmentFulfillmentOrderScheduleType",
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
	  FulfillmentOrderScheduleReference: {
      type: "TypeFulfillmentOrderScheduleReferenceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:FulfillmentOrderScheduleReference",
        type: "FulfillmentOrderScheduleReferenceType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Custom: {
      type: "TypeCustomShipmentFulfillmentOrderScheduleType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Custom",
        type: "corecomcust:CustomShipmentFulfillmentOrderScheduleType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeShipmentFulfillmentOrderScheduleType;
Modeler.register(TypeShipmentFulfillmentOrderScheduleType, "TypeShipmentFulfillmentOrderScheduleType");
