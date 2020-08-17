var Modeler = require("../Modeler.js");
var className = 'ElementFulfillmentOrderHoldIdentification';

var ElementFulfillmentOrderHoldIdentification = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  FulfillmentOrderHoldIdentification: {
      type: "TypeFulfillmentOrderHoldIdentificationType",
      wsdlDefinition: {
        name: "FulfillmentOrderHoldIdentification",
        type: "FulfillmentOrderHoldIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "An identification pointing to a Fulfillment Order Hold entity child of the Fulfillment Order object."
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
	  FulfillmentOrderHoldIdentification: {
      type: "TypeFulfillmentOrderHoldIdentificationType",
      wsdlDefinition: {
        name: "FulfillmentOrderHoldIdentification",
        type: "FulfillmentOrderHoldIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "An identification pointing to a Fulfillment Order Hold entity child of the Fulfillment Order object."
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementFulfillmentOrderHoldIdentification;
Modeler.register(ElementFulfillmentOrderHoldIdentification, "ElementFulfillmentOrderHoldIdentification");
