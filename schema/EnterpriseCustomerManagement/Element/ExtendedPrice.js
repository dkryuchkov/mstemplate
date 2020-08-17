var Modeler = require("../Modeler.js");
var className = 'ElementExtendedPrice';

var ElementExtendedPrice = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  ExtendedPrice: {
      type: "TypePriceType",
      wsdlDefinition: {
        name: "ExtendedPrice",
        type: "PriceType",
        "xsd:annotation": {
          "xsd:documentation": "The price of an item that does not include tax, charge or other allowances"
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
	  ExtendedPrice: {
      type: "TypePriceType",
      wsdlDefinition: {
        name: "ExtendedPrice",
        type: "PriceType",
        "xsd:annotation": {
          "xsd:documentation": "The price of an item that does not include tax, charge or other allowances"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementExtendedPrice;
Modeler.register(ElementExtendedPrice, "ElementExtendedPrice");
