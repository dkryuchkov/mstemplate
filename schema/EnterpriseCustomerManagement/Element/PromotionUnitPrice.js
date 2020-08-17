var Modeler = require("../Modeler.js");
var className = 'ElementPromotionUnitPrice';

var ElementPromotionUnitPrice = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  PromotionUnitPrice: {
      type: "TypePriceType",
      wsdlDefinition: {
        name: "PromotionUnitPrice",
        type: "PriceType",
        "xsd:annotation": {
          "xsd:documentation": "The price a consumer pays to purchase the product from the retailer with the promotional discount applied"
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
	  PromotionUnitPrice: {
      type: "TypePriceType",
      wsdlDefinition: {
        name: "PromotionUnitPrice",
        type: "PriceType",
        "xsd:annotation": {
          "xsd:documentation": "The price a consumer pays to purchase the product from the retailer with the promotional discount applied"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementPromotionUnitPrice;
Modeler.register(ElementPromotionUnitPrice, "ElementPromotionUnitPrice");
