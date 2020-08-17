var Modeler = require("../Modeler.js");
var className = 'ElementParentFulfillmentOrderScheduleIdentification';

var ElementParentFulfillmentOrderScheduleIdentification = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  ParentFulfillmentOrderScheduleIdentification: {
      type: "TypeFulfillmentOrderScheduleIdentificationType",
      wsdlDefinition: {
        name: "ParentFulfillmentOrderScheduleIdentification",
        type: "FulfillmentOrderScheduleIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Refers to a Fulfillment Order Schedule entity which is a parent of the containing Fulfillment Order Schedule entity in order to create a hierarchical relationship between Fulfillment Order Schedule entities within a Fulfillment Order object ."
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
	  ParentFulfillmentOrderScheduleIdentification: {
      type: "TypeFulfillmentOrderScheduleIdentificationType",
      wsdlDefinition: {
        name: "ParentFulfillmentOrderScheduleIdentification",
        type: "FulfillmentOrderScheduleIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Refers to a Fulfillment Order Schedule entity which is a parent of the containing Fulfillment Order Schedule entity in order to create a hierarchical relationship between Fulfillment Order Schedule entities within a Fulfillment Order object ."
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementParentFulfillmentOrderScheduleIdentification;
Modeler.register(ElementParentFulfillmentOrderScheduleIdentification, "ElementParentFulfillmentOrderScheduleIdentification");
