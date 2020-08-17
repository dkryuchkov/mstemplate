var Modeler = require("../Modeler.js");
var className = 'ElementMarketingOfferReference';

var ElementMarketingOfferReference = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  MarketingOfferReference: {
      type: "TypeMarketingOfferReferenceType",
      wsdlDefinition: {
        name: "MarketingOfferReference",
        type: "MarketingOfferReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Reference to a Marketing Offer. A Marketing Offer is a proposition or message to one or more customers that provides an incentive to respond. MarketingOffer can be associated with a campaign or a promotion. A MarketingOffer may be delivered through various channels, these are referred to as treaments e.g. direct mail, outbound call etc."
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
	  MarketingOfferReference: {
      type: "TypeMarketingOfferReferenceType",
      wsdlDefinition: {
        name: "MarketingOfferReference",
        type: "MarketingOfferReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Reference to a Marketing Offer. A Marketing Offer is a proposition or message to one or more customers that provides an incentive to respond. MarketingOffer can be associated with a campaign or a promotion. A MarketingOffer may be delivered through various channels, these are referred to as treaments e.g. direct mail, outbound call etc."
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementMarketingOfferReference;
Modeler.register(ElementMarketingOfferReference, "ElementMarketingOfferReference");
