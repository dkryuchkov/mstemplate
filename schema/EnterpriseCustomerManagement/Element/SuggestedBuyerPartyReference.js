var Modeler = require("../Modeler.js");
var className = 'ElementSuggestedBuyerPartyReference';

var ElementSuggestedBuyerPartyReference = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  SuggestedBuyerPartyReference: {
      type: "TypeBuyerPartyReferenceType",
      wsdlDefinition: {
        name: "SuggestedBuyerPartyReference",
        type: "BuyerPartyReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Name of a buyer suggested for procuring an item on a requisition by the requester"
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
	  SuggestedBuyerPartyReference: {
      type: "TypeBuyerPartyReferenceType",
      wsdlDefinition: {
        name: "SuggestedBuyerPartyReference",
        type: "BuyerPartyReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Name of a buyer suggested for procuring an item on a requisition by the requester"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementSuggestedBuyerPartyReference;
Modeler.register(ElementSuggestedBuyerPartyReference, "ElementSuggestedBuyerPartyReference");
