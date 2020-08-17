var Modeler = require("../Modeler.js");
var className = 'ElementDeliverToPartyReference';

var ElementDeliverToPartyReference = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  DeliverToPartyReference: {
      type: "TypeDeliverToPartyReferenceType",
      wsdlDefinition: {
        name: "DeliverToPartyReference",
        type: "DeliverToPartyReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Person or Department within the organization where ordered items are to be delivered"
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
	  DeliverToPartyReference: {
      type: "TypeDeliverToPartyReferenceType",
      wsdlDefinition: {
        name: "DeliverToPartyReference",
        type: "DeliverToPartyReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Person or Department within the organization where ordered items are to be delivered"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementDeliverToPartyReference;
Modeler.register(ElementDeliverToPartyReference, "ElementDeliverToPartyReference");
