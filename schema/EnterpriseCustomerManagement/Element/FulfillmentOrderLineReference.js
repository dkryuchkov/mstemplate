var Modeler = require("../Modeler.js");
var className = 'ElementFulfillmentOrderLineReference';

var ElementFulfillmentOrderLineReference = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  FulfillmentOrderLineReference: {
      type: "TypeFulfillmentOrderLineReferenceType",
      wsdlDefinition: {
        name: "FulfillmentOrderLineReference",
        type: "FulfillmentOrderLineReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Reference to a line on a fulfillment order"
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
	  FulfillmentOrderLineReference: {
      type: "TypeFulfillmentOrderLineReferenceType",
      wsdlDefinition: {
        name: "FulfillmentOrderLineReference",
        type: "FulfillmentOrderLineReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Reference to a line on a fulfillment order"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementFulfillmentOrderLineReference;
Modeler.register(ElementFulfillmentOrderLineReference, "ElementFulfillmentOrderLineReference");
