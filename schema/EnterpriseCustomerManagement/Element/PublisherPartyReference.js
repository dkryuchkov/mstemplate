var Modeler = require("../Modeler.js");
var className = 'ElementPublisherPartyReference';

var ElementPublisherPartyReference = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  PublisherPartyReference: {
      type: "TypePublisherPartyReferenceType",
      wsdlDefinition: {
        name: "PublisherPartyReference",
        type: "PublisherPartyReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Party responsible for publishing a document or a catalog of goods and services"
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
	  PublisherPartyReference: {
      type: "TypePublisherPartyReferenceType",
      wsdlDefinition: {
        name: "PublisherPartyReference",
        type: "PublisherPartyReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Party responsible for publishing a document or a catalog of goods and services"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementPublisherPartyReference;
Modeler.register(ElementPublisherPartyReference, "ElementPublisherPartyReference");
