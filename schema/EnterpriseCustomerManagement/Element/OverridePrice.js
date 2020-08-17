var Modeler = require("../Modeler.js");
var className = 'ElementOverridePrice';

var ElementOverridePrice = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  OverridePrice: {
      type: "TypePriceType",
      wsdlDefinition: {
        name: "OverridePrice",
        type: "PriceType",
        "xsd:annotation": {
          "xsd:documentation": "An overriding price for an item"
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
	  OverridePrice: {
      type: "TypePriceType",
      wsdlDefinition: {
        name: "OverridePrice",
        type: "PriceType",
        "xsd:annotation": {
          "xsd:documentation": "An overriding price for an item"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementOverridePrice;
Modeler.register(ElementOverridePrice, "ElementOverridePrice");
