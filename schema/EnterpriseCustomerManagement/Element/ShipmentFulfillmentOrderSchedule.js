var Modeler = require("../Modeler.js");
var className = 'ElementShipmentFulfillmentOrderSchedule';

var ElementShipmentFulfillmentOrderSchedule = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  ShipmentFulfillmentOrderSchedule: {
      type: "TypeShipmentFulfillmentOrderScheduleType",
      wsdlDefinition: {
        name: "ShipmentFulfillmentOrderSchedule",
        type: "ShipmentFulfillmentOrderScheduleType",
        "xsd:annotation": {
          "xsd:documentation": "Business reference component for the FulfillmentOrderSchedule in the Shipment"
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
	  ShipmentFulfillmentOrderSchedule: {
      type: "TypeShipmentFulfillmentOrderScheduleType",
      wsdlDefinition: {
        name: "ShipmentFulfillmentOrderSchedule",
        type: "ShipmentFulfillmentOrderScheduleType",
        "xsd:annotation": {
          "xsd:documentation": "Business reference component for the FulfillmentOrderSchedule in the Shipment"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementShipmentFulfillmentOrderSchedule;
Modeler.register(ElementShipmentFulfillmentOrderSchedule, "ElementShipmentFulfillmentOrderSchedule");
