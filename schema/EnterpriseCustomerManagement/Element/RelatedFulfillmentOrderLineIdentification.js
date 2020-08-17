var Modeler = require("../Modeler.js");
var className = 'ElementRelatedFulfillmentOrderLineIdentification';

var ElementRelatedFulfillmentOrderLineIdentification = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  RelatedFulfillmentOrderLineIdentification: {
      type: "TypeFulfillmentOrderLineIdentificationType",
      wsdlDefinition: {
        name: "RelatedFulfillmentOrderLineIdentification",
        type: "FulfillmentOrderLineIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Unique identification of a Related Fulfillment Order line"
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
	  RelatedFulfillmentOrderLineIdentification: {
      type: "TypeFulfillmentOrderLineIdentificationType",
      wsdlDefinition: {
        name: "RelatedFulfillmentOrderLineIdentification",
        type: "FulfillmentOrderLineIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Unique identification of a Related Fulfillment Order line"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementRelatedFulfillmentOrderLineIdentification;
Modeler.register(ElementRelatedFulfillmentOrderLineIdentification, "ElementRelatedFulfillmentOrderLineIdentification");
