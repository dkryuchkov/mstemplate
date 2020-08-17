var Modeler = require("../Modeler.js");
var className = 'ElementFulfillmentOrderLineIdentification';

var ElementFulfillmentOrderLineIdentification = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  FulfillmentOrderLineIdentification: {
      type: "TypeFulfillmentOrderLineIdentificationType",
      wsdlDefinition: {
        name: "FulfillmentOrderLineIdentification",
        type: "FulfillmentOrderLineIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Unique identification of a Fulfillment Order line"
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
	  FulfillmentOrderLineIdentification: {
      type: "TypeFulfillmentOrderLineIdentificationType",
      wsdlDefinition: {
        name: "FulfillmentOrderLineIdentification",
        type: "FulfillmentOrderLineIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Unique identification of a Fulfillment Order line"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementFulfillmentOrderLineIdentification;
Modeler.register(ElementFulfillmentOrderLineIdentification, "ElementFulfillmentOrderLineIdentification");
