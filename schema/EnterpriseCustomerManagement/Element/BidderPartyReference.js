var Modeler = require("../Modeler.js");
var className = 'ElementBidderPartyReference';

var ElementBidderPartyReference = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  BidderPartyReference: {
      type: "TypeBidderPartyReferenceType",
      wsdlDefinition: {
        name: "BidderPartyReference",
        type: "BidderPartyReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "A Party that makes an offer for goods or servicesin an auction or on request"
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
	  BidderPartyReference: {
      type: "TypeBidderPartyReferenceType",
      wsdlDefinition: {
        name: "BidderPartyReference",
        type: "BidderPartyReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "A Party that makes an offer for goods or servicesin an auction or on request"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementBidderPartyReference;
Modeler.register(ElementBidderPartyReference, "ElementBidderPartyReference");
