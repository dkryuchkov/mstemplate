var Modeler = require("../Modeler.js");
var className = 'ElementQuoteAwardPrice';

var ElementQuoteAwardPrice = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  QuoteAwardPrice: {
      type: "TypePriceType",
      wsdlDefinition: {
        name: "QuoteAwardPrice",
        type: "PriceType",
        "xsd:annotation": {
          "xsd:documentation": "The price at which an a Quote from a bidder is accepted and the bidder is \"awarded\" the order for the corresponding line item"
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
	  QuoteAwardPrice: {
      type: "TypePriceType",
      wsdlDefinition: {
        name: "QuoteAwardPrice",
        type: "PriceType",
        "xsd:annotation": {
          "xsd:documentation": "The price at which an a Quote from a bidder is accepted and the bidder is \"awarded\" the order for the corresponding line item"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementQuoteAwardPrice;
Modeler.register(ElementQuoteAwardPrice, "ElementQuoteAwardPrice");
