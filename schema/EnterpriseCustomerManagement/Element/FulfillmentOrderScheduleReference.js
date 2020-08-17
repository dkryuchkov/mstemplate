var Modeler = require("../Modeler.js");
var className = 'ElementFulfillmentOrderScheduleReference';

var ElementFulfillmentOrderScheduleReference = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  FulfillmentOrderScheduleReference: {
      type: "TypeFulfillmentOrderScheduleReferenceType",
      wsdlDefinition: {
        name: "FulfillmentOrderScheduleReference",
        type: "FulfillmentOrderScheduleReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Refers to a FulfillmentOrderSchedule of a FulfillmentOrder."
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
	  FulfillmentOrderScheduleReference: {
      type: "TypeFulfillmentOrderScheduleReferenceType",
      wsdlDefinition: {
        name: "FulfillmentOrderScheduleReference",
        type: "FulfillmentOrderScheduleReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Refers to a FulfillmentOrderSchedule of a FulfillmentOrder."
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementFulfillmentOrderScheduleReference;
Modeler.register(ElementFulfillmentOrderScheduleReference, "ElementFulfillmentOrderScheduleReference");
