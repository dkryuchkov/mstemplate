var Modeler = require("../Modeler.js");
var className = 'ElementFulfillmentOrderReference';

var ElementFulfillmentOrderReference = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  FulfillmentOrderReference: {
      type: "TypeFulfillmentOrderReferenceType",
      wsdlDefinition: {
        name: "FulfillmentOrderReference",
        type: "FulfillmentOrderReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Reference to a Fulfillment Order"
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
	  FulfillmentOrderReference: {
      type: "TypeFulfillmentOrderReferenceType",
      wsdlDefinition: {
        name: "FulfillmentOrderReference",
        type: "FulfillmentOrderReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Reference to a Fulfillment Order"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementFulfillmentOrderReference;
Modeler.register(ElementFulfillmentOrderReference, "ElementFulfillmentOrderReference");
