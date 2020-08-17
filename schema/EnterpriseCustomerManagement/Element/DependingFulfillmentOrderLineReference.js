var Modeler = require("../Modeler.js");
var className = 'ElementDependingFulfillmentOrderLineReference';

var ElementDependingFulfillmentOrderLineReference = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  DependingFulfillmentOrderLineReference: {
      type: "TypeFulfillmentOrderLineReferenceType",
      wsdlDefinition: {
        name: "DependingFulfillmentOrderLineReference",
        type: "FulfillmentOrderLineReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Refers to a Fulfillment Order Line of another Order on which this Line depends on"
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
	  DependingFulfillmentOrderLineReference: {
      type: "TypeFulfillmentOrderLineReferenceType",
      wsdlDefinition: {
        name: "DependingFulfillmentOrderLineReference",
        type: "FulfillmentOrderLineReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Refers to a Fulfillment Order Line of another Order on which this Line depends on"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementDependingFulfillmentOrderLineReference;
Modeler.register(ElementDependingFulfillmentOrderLineReference, "ElementDependingFulfillmentOrderLineReference");
