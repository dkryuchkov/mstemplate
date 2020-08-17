var Modeler = require("../Modeler.js");
var className = 'ElementDependingFulfillmentOrderReference';

var ElementDependingFulfillmentOrderReference = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  DependingFulfillmentOrderReference: {
      type: "TypeFulfillmentOrderReferenceType",
      wsdlDefinition: {
        name: "DependingFulfillmentOrderReference",
        type: "FulfillmentOrderReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Reference to the a previous Fulfillment Order"
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
	  DependingFulfillmentOrderReference: {
      type: "TypeFulfillmentOrderReferenceType",
      wsdlDefinition: {
        name: "DependingFulfillmentOrderReference",
        type: "FulfillmentOrderReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Reference to the a previous Fulfillment Order"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementDependingFulfillmentOrderReference;
Modeler.register(ElementDependingFulfillmentOrderReference, "ElementDependingFulfillmentOrderReference");
