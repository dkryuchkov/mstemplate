var Modeler = require("../Modeler.js");
var className = 'ElementUnitListPrice';

var ElementUnitListPrice = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  UnitListPrice: {
      type: "TypePriceType",
      wsdlDefinition: {
        name: "UnitListPrice",
        type: "PriceType",
        "xsd:annotation": {
          "xsd:documentation": "Unit price of an item or service  on a price list, expressed per quantity"
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
	  UnitListPrice: {
      type: "TypePriceType",
      wsdlDefinition: {
        name: "UnitListPrice",
        type: "PriceType",
        "xsd:annotation": {
          "xsd:documentation": "Unit price of an item or service  on a price list, expressed per quantity"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementUnitListPrice;
Modeler.register(ElementUnitListPrice, "ElementUnitListPrice");
