var Modeler = require("../Modeler.js");
var className = 'ElementUnitPurchasePrice';

var ElementUnitPurchasePrice = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  UnitPurchasePrice: {
      type: "TypePriceType",
      wsdlDefinition: {
        name: "UnitPurchasePrice",
        type: "PriceType",
        "xsd:annotation": {
          "xsd:documentation": "Unit price at which an itemor service  was purchased, expressed per quantity"
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
	  UnitPurchasePrice: {
      type: "TypePriceType",
      wsdlDefinition: {
        name: "UnitPurchasePrice",
        type: "PriceType",
        "xsd:annotation": {
          "xsd:documentation": "Unit price at which an itemor service  was purchased, expressed per quantity"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementUnitPurchasePrice;
Modeler.register(ElementUnitPurchasePrice, "ElementUnitPurchasePrice");
