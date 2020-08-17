var Modeler = require("../Modeler.js");
var className = 'ElementOriginalFulfillmentOrderLineReference';

var ElementOriginalFulfillmentOrderLineReference = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  OriginalFulfillmentOrderLineReference: {
      type: "TypeFulfillmentOrderLineReferenceType",
      wsdlDefinition: {
        name: "OriginalFulfillmentOrderLineReference",
        type: "FulfillmentOrderLineReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Refers to the first version of the FulfillmentOrderLine before any revision."
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
	  OriginalFulfillmentOrderLineReference: {
      type: "TypeFulfillmentOrderLineReferenceType",
      wsdlDefinition: {
        name: "OriginalFulfillmentOrderLineReference",
        type: "FulfillmentOrderLineReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Refers to the first version of the FulfillmentOrderLine before any revision."
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementOriginalFulfillmentOrderLineReference;
Modeler.register(ElementOriginalFulfillmentOrderLineReference, "ElementOriginalFulfillmentOrderLineReference");
