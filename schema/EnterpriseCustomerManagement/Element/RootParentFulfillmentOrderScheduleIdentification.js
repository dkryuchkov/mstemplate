var Modeler = require("../Modeler.js");
var className = 'ElementRootParentFulfillmentOrderScheduleIdentification';

var ElementRootParentFulfillmentOrderScheduleIdentification = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  RootParentFulfillmentOrderScheduleIdentification: {
      type: "TypeFulfillmentOrderScheduleIdentificationType",
      wsdlDefinition: {
        name: "RootParentFulfillmentOrderScheduleIdentification",
        type: "FulfillmentOrderScheduleIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Refers to the root Fulfillment Order Schedule entity within a Fulfillment Order when there is a hierarchical relationship among a set of Fulfillment Order Schedule entities."
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
	  RootParentFulfillmentOrderScheduleIdentification: {
      type: "TypeFulfillmentOrderScheduleIdentificationType",
      wsdlDefinition: {
        name: "RootParentFulfillmentOrderScheduleIdentification",
        type: "FulfillmentOrderScheduleIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Refers to the root Fulfillment Order Schedule entity within a Fulfillment Order when there is a hierarchical relationship among a set of Fulfillment Order Schedule entities."
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementRootParentFulfillmentOrderScheduleIdentification;
Modeler.register(ElementRootParentFulfillmentOrderScheduleIdentification, "ElementRootParentFulfillmentOrderScheduleIdentification");
