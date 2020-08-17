var Modeler = require("../Modeler.js");
var className = 'ElementFulfillmentOrderScheduleIdentification';

var ElementFulfillmentOrderScheduleIdentification = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  FulfillmentOrderScheduleIdentification: {
      type: "TypeFulfillmentOrderScheduleIdentificationType",
      wsdlDefinition: {
        name: "FulfillmentOrderScheduleIdentification",
        type: "FulfillmentOrderScheduleIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "An identification pointing to a Fulfillment Order Schedule entity child of the Fulfillment Order Line within a Fulfillment Order entity."
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
	  FulfillmentOrderScheduleIdentification: {
      type: "TypeFulfillmentOrderScheduleIdentificationType",
      wsdlDefinition: {
        name: "FulfillmentOrderScheduleIdentification",
        type: "FulfillmentOrderScheduleIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "An identification pointing to a Fulfillment Order Schedule entity child of the Fulfillment Order Line within a Fulfillment Order entity."
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementFulfillmentOrderScheduleIdentification;
Modeler.register(ElementFulfillmentOrderScheduleIdentification, "ElementFulfillmentOrderScheduleIdentification");
