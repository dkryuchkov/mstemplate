var Modeler = require("../Modeler.js");
var className = 'ElementExtendedUnitPrice';

var ElementExtendedUnitPrice = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  ExtendedUnitPrice: {
      type: "TypePriceType",
      wsdlDefinition: {
        name: "ExtendedUnitPrice",
        type: "PriceType",
        "xsd:annotation": {
          "xsd:documentation": "The unit price of an item that does not include tax, charge or other allowances"
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
	  ExtendedUnitPrice: {
      type: "TypePriceType",
      wsdlDefinition: {
        name: "ExtendedUnitPrice",
        type: "PriceType",
        "xsd:annotation": {
          "xsd:documentation": "The unit price of an item that does not include tax, charge or other allowances"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementExtendedUnitPrice;
Modeler.register(ElementExtendedUnitPrice, "ElementExtendedUnitPrice");
