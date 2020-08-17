var Modeler = require("../Modeler.js");
var className = 'ElementParentFulfillmentOrderReference';

var ElementParentFulfillmentOrderReference = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  ParentFulfillmentOrderReference: {
      type: "TypeFulfillmentOrderReferenceType",
      wsdlDefinition: {
        name: "ParentFulfillmentOrderReference",
        type: "FulfillmentOrderReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Reference to a parent Fulfillment order"
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
	  ParentFulfillmentOrderReference: {
      type: "TypeFulfillmentOrderReferenceType",
      wsdlDefinition: {
        name: "ParentFulfillmentOrderReference",
        type: "FulfillmentOrderReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Reference to a parent Fulfillment order"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementParentFulfillmentOrderReference;
Modeler.register(ElementParentFulfillmentOrderReference, "ElementParentFulfillmentOrderReference");
