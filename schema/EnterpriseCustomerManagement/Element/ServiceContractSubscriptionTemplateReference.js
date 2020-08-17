var Modeler = require("../Modeler.js");
var className = 'ElementServiceContractSubscriptionTemplateReference';

var ElementServiceContractSubscriptionTemplateReference = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  ServiceContractSubscriptionTemplateReference: {
      type: "TypeServiceContractSubscriptionTemplateReferenceType",
      wsdlDefinition: {
        name: "ServiceContractSubscriptionTemplateReference",
        type: "ServiceContractSubscriptionTemplateReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Reference to a Service Contract Subscription Template object. A Service Contract Subscription Template contains properties that are applicable to Service Contract Item. It is associated with an item when its contract type is a subscription. Its properties include Subscription type, Media and Property type, Fulfillment Channel, and Frequency. A subscription item can be a tangible item like a magazine or an intangible item like a membership."
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
	  ServiceContractSubscriptionTemplateReference: {
      type: "TypeServiceContractSubscriptionTemplateReferenceType",
      wsdlDefinition: {
        name: "ServiceContractSubscriptionTemplateReference",
        type: "ServiceContractSubscriptionTemplateReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Reference to a Service Contract Subscription Template object. A Service Contract Subscription Template contains properties that are applicable to Service Contract Item. It is associated with an item when its contract type is a subscription. Its properties include Subscription type, Media and Property type, Fulfillment Channel, and Frequency. A subscription item can be a tangible item like a magazine or an intangible item like a membership."
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementServiceContractSubscriptionTemplateReference;
Modeler.register(ElementServiceContractSubscriptionTemplateReference, "ElementServiceContractSubscriptionTemplateReference");
