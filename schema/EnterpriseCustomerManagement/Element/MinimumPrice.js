var Modeler = require("../Modeler.js");
var className = 'ElementMinimumPrice';

var ElementMinimumPrice = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  MinimumPrice: {
      type: "TypePriceType",
      wsdlDefinition: {
        name: "MinimumPrice",
        type: "PriceType",
        "xsd:annotation": {
          "xsd:documentation": "The minimum price of an item"
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
	  MinimumPrice: {
      type: "TypePriceType",
      wsdlDefinition: {
        name: "MinimumPrice",
        type: "PriceType",
        "xsd:annotation": {
          "xsd:documentation": "The minimum price of an item"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementMinimumPrice;
Modeler.register(ElementMinimumPrice, "ElementMinimumPrice");
