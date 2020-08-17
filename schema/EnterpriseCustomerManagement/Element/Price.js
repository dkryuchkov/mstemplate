var Modeler = require("../Modeler.js");
var className = 'ElementPrice';

var ElementPrice = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  Price: {
      type: "TypePriceType",
      wsdlDefinition: {
        name: "Price",
        type: "PriceType",
        "xsd:annotation": {
          "xsd:documentation": "The price of an item, typically used in the context of a purchase or sale"
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
	  Price: {
      type: "TypePriceType",
      wsdlDefinition: {
        name: "Price",
        type: "PriceType",
        "xsd:annotation": {
          "xsd:documentation": "The price of an item, typically used in the context of a purchase or sale"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementPrice;
Modeler.register(ElementPrice, "ElementPrice");
