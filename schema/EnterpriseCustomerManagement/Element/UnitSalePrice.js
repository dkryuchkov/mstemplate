var Modeler = require("../Modeler.js");
var className = 'ElementUnitSalePrice';

var ElementUnitSalePrice = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  UnitSalePrice: {
      type: "TypePriceType",
      wsdlDefinition: {
        name: "UnitSalePrice",
        type: "PriceType",
        "xsd:annotation": {
          "xsd:documentation": "Unit price at which an item or service was sold, expressed per quantity"
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
	  UnitSalePrice: {
      type: "TypePriceType",
      wsdlDefinition: {
        name: "UnitSalePrice",
        type: "PriceType",
        "xsd:annotation": {
          "xsd:documentation": "Unit price at which an item or service was sold, expressed per quantity"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementUnitSalePrice;
Modeler.register(ElementUnitSalePrice, "ElementUnitSalePrice");
