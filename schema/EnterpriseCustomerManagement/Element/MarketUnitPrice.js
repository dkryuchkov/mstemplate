var Modeler = require("../Modeler.js");
var className = 'ElementMarketUnitPrice';

var ElementMarketUnitPrice = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  MarketUnitPrice: {
      type: "TypeMarketUnitPriceType",
      wsdlDefinition: {
        name: "MarketUnitPrice",
        type: "MarketUnitPriceType",
        "xsd:annotation": {
          "xsd:documentation": "Market price is usually a discount from the UnitListPrice."
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
	  MarketUnitPrice: {
      type: "TypeMarketUnitPriceType",
      wsdlDefinition: {
        name: "MarketUnitPrice",
        type: "MarketUnitPriceType",
        "xsd:annotation": {
          "xsd:documentation": "Market price is usually a discount from the UnitListPrice."
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementMarketUnitPrice;
Modeler.register(ElementMarketUnitPrice, "ElementMarketUnitPrice");
