var Modeler = require("../Modeler.js");
var className = 'ElementMinimumUnitSalePrice';

var ElementMinimumUnitSalePrice = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  MinimumUnitSalePrice: {
      type: "TypePriceType",
      wsdlDefinition: {
        name: "MinimumUnitSalePrice",
        type: "PriceType",
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
	  MinimumUnitSalePrice: {
      type: "TypePriceType",
      wsdlDefinition: {
        name: "MinimumUnitSalePrice",
        type: "PriceType",
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementMinimumUnitSalePrice;
Modeler.register(ElementMinimumUnitSalePrice, "ElementMinimumUnitSalePrice");
