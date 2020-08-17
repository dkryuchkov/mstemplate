var Modeler = require("../Modeler.js");
var className = 'TypeCustomShipmentFulfillmentOrderScheduleType';

var TypeCustomShipmentFulfillmentOrderScheduleType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomShipmentFulfillmentOrderScheduleType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomShipmentFulfillmentOrderScheduleType",
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
	  CustomShipmentFulfillmentOrderScheduleType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomShipmentFulfillmentOrderScheduleType",
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCustomShipmentFulfillmentOrderScheduleType;
Modeler.register(TypeCustomShipmentFulfillmentOrderScheduleType, "TypeCustomShipmentFulfillmentOrderScheduleType");
