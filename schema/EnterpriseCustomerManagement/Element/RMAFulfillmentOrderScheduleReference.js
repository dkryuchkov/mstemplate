var Modeler = require("../Modeler.js");
var className = 'ElementRMAFulfillmentOrderScheduleReference';

var ElementRMAFulfillmentOrderScheduleReference = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  RMAFulfillmentOrderScheduleReference: {
      type: "TypeRMAFulfillmentOrderScheduleReferenceType",
      wsdlDefinition: {
        name: "RMAFulfillmentOrderScheduleReference",
        type: "RMAFulfillmentOrderScheduleReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Refer to a FulfillmentOrderSchedule associated with a return item within a FulfillmentOrder object instance"
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
	  RMAFulfillmentOrderScheduleReference: {
      type: "TypeRMAFulfillmentOrderScheduleReferenceType",
      wsdlDefinition: {
        name: "RMAFulfillmentOrderScheduleReference",
        type: "RMAFulfillmentOrderScheduleReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Refer to a FulfillmentOrderSchedule associated with a return item within a FulfillmentOrder object instance"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementRMAFulfillmentOrderScheduleReference;
Modeler.register(ElementRMAFulfillmentOrderScheduleReference, "ElementRMAFulfillmentOrderScheduleReference");
