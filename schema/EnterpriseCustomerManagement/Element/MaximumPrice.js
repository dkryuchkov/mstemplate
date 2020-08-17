var Modeler = require("../Modeler.js");
var className = 'ElementMaximumPrice';

var ElementMaximumPrice = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  MaximumPrice: {
      type: "TypePriceType",
      wsdlDefinition: {
        name: "MaximumPrice",
        type: "PriceType",
        "xsd:annotation": {
          "xsd:documentation": "The maximum price of an item"
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
	  MaximumPrice: {
      type: "TypePriceType",
      wsdlDefinition: {
        name: "MaximumPrice",
        type: "PriceType",
        "xsd:annotation": {
          "xsd:documentation": "The maximum price of an item"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementMaximumPrice;
Modeler.register(ElementMaximumPrice, "ElementMaximumPrice");
