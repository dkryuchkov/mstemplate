var Modeler = require("../Modeler.js");
var className = 'ElementRequesterPartyReference';

var ElementRequesterPartyReference = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  RequesterPartyReference: {
      type: "TypeRequesterPartyReferenceType",
      wsdlDefinition: {
        name: "RequesterPartyReference",
        type: "RequesterPartyReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "The requester of an item or a service on a requisition. This may be different from the person that actually requires the item or the service (e.g. an assistant requesting for items for a team or a manager)"
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
	  RequesterPartyReference: {
      type: "TypeRequesterPartyReferenceType",
      wsdlDefinition: {
        name: "RequesterPartyReference",
        type: "RequesterPartyReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "The requester of an item or a service on a requisition. This may be different from the person that actually requires the item or the service (e.g. an assistant requesting for items for a team or a manager)"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementRequesterPartyReference;
Modeler.register(ElementRequesterPartyReference, "ElementRequesterPartyReference");
