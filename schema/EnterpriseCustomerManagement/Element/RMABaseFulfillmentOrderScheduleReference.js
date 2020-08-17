var Modeler = require("../Modeler.js");
var className = 'ElementRMABaseFulfillmentOrderScheduleReference';

var ElementRMABaseFulfillmentOrderScheduleReference = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  RMABaseFulfillmentOrderScheduleReference: {
      type: "TypeFulfillmentOrderScheduleReferenceType",
      wsdlDefinition: {
        name: "RMABaseFulfillmentOrderScheduleReference",
        type: "FulfillmentOrderScheduleReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Refer to the original outbound FulfillmentOrderSchedule within a FulfillmentOrder object instance that has an associated return (RMA)"
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
	  RMABaseFulfillmentOrderScheduleReference: {
      type: "TypeFulfillmentOrderScheduleReferenceType",
      wsdlDefinition: {
        name: "RMABaseFulfillmentOrderScheduleReference",
        type: "FulfillmentOrderScheduleReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Refer to the original outbound FulfillmentOrderSchedule within a FulfillmentOrder object instance that has an associated return (RMA)"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementRMABaseFulfillmentOrderScheduleReference;
Modeler.register(ElementRMABaseFulfillmentOrderScheduleReference, "ElementRMABaseFulfillmentOrderScheduleReference");
