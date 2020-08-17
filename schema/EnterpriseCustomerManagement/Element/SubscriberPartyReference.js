var Modeler = require("../Modeler.js");
var className = 'ElementSubscriberPartyReference';

var ElementSubscriberPartyReference = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  SubscriberPartyReference: {
      type: "TypeSubscriberPartyReferenceType",
      wsdlDefinition: {
        name: "SubscriberPartyReference",
        type: "SubscriberPartyReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Person or Organization that subscribes to a service. Examples are catalog subscriptions, broadcasting service subscriptions, cellular phone service subscriptions etc"
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
	  SubscriberPartyReference: {
      type: "TypeSubscriberPartyReferenceType",
      wsdlDefinition: {
        name: "SubscriberPartyReference",
        type: "SubscriberPartyReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Person or Organization that subscribes to a service. Examples are catalog subscriptions, broadcasting service subscriptions, cellular phone service subscriptions etc"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementSubscriberPartyReference;
Modeler.register(ElementSubscriberPartyReference, "ElementSubscriberPartyReference");
