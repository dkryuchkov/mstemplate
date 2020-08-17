var Modeler = require("../Modeler.js");
var className = 'ElementOriginalFulfillmentOrderScheduleReference';

var ElementOriginalFulfillmentOrderScheduleReference = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  OriginalFulfillmentOrderScheduleReference: {
      type: "TypeFulfillmentOrderScheduleReferenceType",
      wsdlDefinition: {
        name: "OriginalFulfillmentOrderScheduleReference",
        type: "FulfillmentOrderScheduleReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Refers to the first version of the FulfillmentOrderSchedule before any revision."
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
	  OriginalFulfillmentOrderScheduleReference: {
      type: "TypeFulfillmentOrderScheduleReferenceType",
      wsdlDefinition: {
        name: "OriginalFulfillmentOrderScheduleReference",
        type: "FulfillmentOrderScheduleReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Refers to the first version of the FulfillmentOrderSchedule before any revision."
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementOriginalFulfillmentOrderScheduleReference;
Modeler.register(ElementOriginalFulfillmentOrderScheduleReference, "ElementOriginalFulfillmentOrderScheduleReference");
