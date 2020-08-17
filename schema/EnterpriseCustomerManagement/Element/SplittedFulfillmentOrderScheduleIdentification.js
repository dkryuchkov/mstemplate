var Modeler = require("../Modeler.js");
var className = 'ElementSplittedFulfillmentOrderScheduleIdentification';

var ElementSplittedFulfillmentOrderScheduleIdentification = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  SplittedFulfillmentOrderScheduleIdentification: {
      type: "TypeFulfillmentOrderScheduleIdentificationType",
      wsdlDefinition: {
        name: "SplittedFulfillmentOrderScheduleIdentification",
        type: "FulfillmentOrderScheduleIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Refers to a Fulfillment Order Schedule from which the containing Fulfillment Order Schedule is splitted."
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
	  SplittedFulfillmentOrderScheduleIdentification: {
      type: "TypeFulfillmentOrderScheduleIdentificationType",
      wsdlDefinition: {
        name: "SplittedFulfillmentOrderScheduleIdentification",
        type: "FulfillmentOrderScheduleIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Refers to a Fulfillment Order Schedule from which the containing Fulfillment Order Schedule is splitted."
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementSplittedFulfillmentOrderScheduleIdentification;
Modeler.register(ElementSplittedFulfillmentOrderScheduleIdentification, "ElementSplittedFulfillmentOrderScheduleIdentification");
